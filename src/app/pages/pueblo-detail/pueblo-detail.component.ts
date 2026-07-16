import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { GalleriaModule } from 'primeng/galleria';
import { PueblosService } from '../../services/pueblos.service';
import { Pueblo } from '../../models/pueblo.interface';
import { PLACEHOLDER_IMAGE, resolvePuebloImage } from '../../utils/pueblo-image.util';

interface GalleriaImage {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-pueblo-detail',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, TagModule, DividerModule, ProgressSpinnerModule, GalleriaModule],
  templateUrl: './pueblo-detail.component.html',
  styleUrl: './pueblo-detail.component.scss',
})
export class PuebloDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly pueblosService = inject(PueblosService);

  pueblo: Pueblo | null = null;
  loading = false;
  error = '';
  images: GalleriaImage[] = [];

  /**
   * Suscribe al parámetro de ruta `nombre` y carga el pueblo correspondiente.
   *
   * @returns {void}
   */
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const nombre = params['nombre'];
      if (nombre) {
        this.loadPueblo(nombre);
      }
    });
  }

  /**
   * Obtiene un pueblo por nombre desde la API y prepara su galería de imágenes.
   *
   * @param {string} nombre Nombre del pueblo a cargar.
   * @returns {void}
   */
  loadPueblo(nombre: string): void {
    this.loading = true;
    this.pueblosService.getPuebloByNombre(nombre).subscribe({
      next: response => {
        this.pueblo = response.data;
        this.prepareGallery();
        this.loading = false;
      },
      error: err => {
        this.error = 'No se pudo cargar la información del pueblo';
        this.loading = false;
        console.error('Error:', err);
      },
    });
  }

  /**
   * Construye las imágenes de la galería (Galleria de PrimeNG) del pueblo cargado.
   * Como solo hay una foto local real por pueblo, todas las entradas apuntan a la misma imagen resuelta.
   *
   * @returns {void}
   */
  prepareGallery(): void {
    if (this.pueblo?.imagenes && this.pueblo.imagenes.length > 0) {
      const imageSrc = resolvePuebloImage(this.pueblo.nombre);

      this.images = this.pueblo.imagenes.map(img => ({
        itemImageSrc: imageSrc,
        thumbnailImageSrc: imageSrc,
        alt: img.descripcion,
        title: img.descripcion,
      }));
    }
  }

  /**
   * Sustituye una imagen rota por el placeholder cuando el navegador no puede cargarla.
   *
   * @param {Event} event Evento `error` del elemento `<img>`.
   * @returns {void}
   */
  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target.src !== PLACEHOLDER_IMAGE) {
      target.src = PLACEHOLDER_IMAGE;
    }
  }

  /**
   * Vuelve al listado de pueblos.
   *
   * @returns {void}
   */
  goBack(): void {
    this.router.navigate(['/pueblos']);
  }
}
