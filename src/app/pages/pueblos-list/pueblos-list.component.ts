import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PueblosService } from '../../services/pueblos.service';
import { Pueblo } from '../../models/pueblo.interface';
import { PLACEHOLDER_IMAGE, resolvePuebloImage } from '../../utils/pueblo-image.util';

@Component({
  selector: 'app-pueblos-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    TagModule,
    IconFieldModule,
    InputIconModule,
  ],
  templateUrl: './pueblos-list.component.html',
  styleUrl: './pueblos-list.component.scss',
})
export class PueblosListComponent implements OnInit {
  private readonly pueblosService = inject(PueblosService);

  pueblos: Pueblo[] = [];
  pueblosFiltrados: Pueblo[] = [];
  loading = false;
  error = '';

  // Búsqueda
  searchTerm = '';

  /**
   * Carga la lista inicial de pueblos al montar el componente.
   *
   * @returns {void}
   */
  ngOnInit(): void {
    this.loadPueblos();
  }

  /**
   * Obtiene todos los pueblos desde la API y los deja listos para filtrar.
   *
   * @returns {void}
   */
  loadPueblos(): void {
    this.loading = true;
    this.pueblosService.getAllPueblos().subscribe({
      next: response => {
        this.pueblos = response.data;
        this.pueblosFiltrados = [...this.pueblos];
        this.loading = false;
      },
      error: err => {
        this.error = 'Error al cargar los pueblos';
        this.loading = false;
        console.error('Error:', err);
      },
    });
  }

  /**
   * Filtra `pueblos` en cliente según `searchTerm` (nombre, descripción, provincia o comunidad).
   *
   * @returns {void}
   */
  onSearchChange(): void {
    if (!this.searchTerm.trim()) {
      this.pueblosFiltrados = [...this.pueblos];
      return;
    }

    const searchLower = this.searchTerm.toLowerCase();
    this.pueblosFiltrados = this.pueblos.filter(
      pueblo =>
        pueblo.nombre.toLowerCase().includes(searchLower) ||
        pueblo.descripcion.toLowerCase().includes(searchLower) ||
        pueblo.provincia.toLowerCase().includes(searchLower) ||
        pueblo.comunidadAutonoma.toLowerCase().includes(searchLower)
    );
  }

  /**
   * Limpia el término de búsqueda y restaura el listado completo.
   *
   * @returns {void}
   */
  clearSearch(): void {
    this.searchTerm = '';
    this.pueblosFiltrados = [...this.pueblos];
  }

  /**
   * Resuelve la imagen principal de un pueblo (foto local real o placeholder).
   *
   * @param {Pueblo} pueblo Pueblo a mostrar.
   * @returns {string} URL de la imagen principal.
   */
  getPrincipalImage(pueblo: Pueblo): string {
    return resolvePuebloImage(pueblo.nombre);
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
}
