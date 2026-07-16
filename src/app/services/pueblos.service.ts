import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Pueblo, PueblosStats } from '../models/pueblo.interface';
import { environment } from '../../environments/environment';

export type CaracteristicasFiltro = Partial<Record<'costero' | 'montanoso' | 'rio' | 'castillo' | 'iglesia', boolean>>;

@Injectable({
  providedIn: 'root',
})
export class PueblosService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  /**
   * Obtiene todos los pueblos.
   *
   * @returns {Observable<ApiResponse<Pueblo[]>>} Listado completo de pueblos.
   */
  getAllPueblos(): Observable<ApiResponse<Pueblo[]>> {
    return this.http.get<ApiResponse<Pueblo[]>>(`${this.apiUrl}/pueblos`);
  }

  /**
   * Obtiene un pueblo por su nombre exacto.
   *
   * @param {string} nombre Nombre del pueblo.
   * @returns {Observable<ApiResponse<Pueblo>>} El pueblo encontrado.
   */
  getPuebloByNombre(nombre: string): Observable<ApiResponse<Pueblo>> {
    return this.http.get<ApiResponse<Pueblo>>(`${this.apiUrl}/pueblos/nombre/${nombre}`);
  }

  /**
   * Obtiene los pueblos de una comunidad autónoma.
   *
   * @param {string} comunidad Nombre de la comunidad autónoma.
   * @returns {Observable<ApiResponse<Pueblo[]>>} Pueblos de esa comunidad.
   */
  getPueblosByComunidad(comunidad: string): Observable<ApiResponse<Pueblo[]>> {
    return this.http.get<ApiResponse<Pueblo[]>>(`${this.apiUrl}/pueblos/comunidad/${comunidad}`);
  }

  /**
   * Obtiene los pueblos de una provincia.
   *
   * @param {string} provincia Nombre de la provincia.
   * @returns {Observable<ApiResponse<Pueblo[]>>} Pueblos de esa provincia.
   */
  getPueblosByProvincia(provincia: string): Observable<ApiResponse<Pueblo[]>> {
    return this.http.get<ApiResponse<Pueblo[]>>(`${this.apiUrl}/pueblos/provincia/${provincia}`);
  }

  /**
   * Búsqueda de texto completo en nombre y descripción.
   *
   * @param {string} query Término de búsqueda.
   * @returns {Observable<ApiResponse<Pueblo[]>>} Pueblos que coinciden con la búsqueda.
   */
  searchPueblos(query: string): Observable<ApiResponse<Pueblo[]>> {
    const params = new HttpParams().set('q', query);
    return this.http.get<ApiResponse<Pueblo[]>>(`${this.apiUrl}/pueblos/search`, { params });
  }

  /**
   * Filtra pueblos por características booleanas (costero, montañoso, río, castillo, iglesia).
   *
   * @param {CaracteristicasFiltro} caracteristicas Flags a aplicar como filtro.
   * @returns {Observable<ApiResponse<Pueblo[]>>} Pueblos que cumplen las características indicadas.
   */
  getPueblosByCaracteristicas(caracteristicas: CaracteristicasFiltro): Observable<ApiResponse<Pueblo[]>> {
    let params = new HttpParams();
    Object.entries(caracteristicas).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        params = params.set(key, String(value));
      }
    });
    return this.http.get<ApiResponse<Pueblo[]>>(`${this.apiUrl}/pueblos/caracteristicas`, { params });
  }

  /**
   * Obtiene estadísticas agregadas de los pueblos.
   *
   * @returns {Observable<ApiResponse<PueblosStats>>} Estadísticas generales.
   */
  getStats(): Observable<ApiResponse<PueblosStats>> {
    return this.http.get<ApiResponse<PueblosStats>>(`${this.apiUrl}/pueblos/stats`);
  }
}
