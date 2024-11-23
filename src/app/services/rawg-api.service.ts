import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class RawgApiService {
  private apiKey = '55907b0054844180a52737a6f88376cb'; // Coloca tu API Key aquí
  private baseUrl = 'https://api.rawg.io/api';

  constructor() {}

  // Método para buscar información de un juego
  async getGameDetails(gameName: string): Promise<any> {
    const url = `${this.baseUrl}/games?key=${this.apiKey}&search=${gameName}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error al buscar el juego:', error);
      throw error;
    }
  }
}