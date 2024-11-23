import { Component, OnInit } from '@angular/core';
import { RawgApiService } from '../../services/rawg-api.service';

@Component({
  selector: 'app-apiresident',
  templateUrl: './apiresident.page.html',
  styleUrls: ['./apiresident.page.scss'],
})
export class ApiresidentPage implements OnInit {
  gameDetails: any = null;

  constructor(private rawgApiService: RawgApiService) {}

  ngOnInit() {
    this.searchGame('Resident Evil'); // Busca información al cargar la página
  }

  async searchGame(gameName: string) {
    try {
      this.gameDetails = await this.rawgApiService.getGameDetails(gameName);
      console.log(this.gameDetails); // Muestra los datos en consola para depurar
    } catch (error) {
      console.error('Error al obtener datos del juego:', error);
    }
  }
}