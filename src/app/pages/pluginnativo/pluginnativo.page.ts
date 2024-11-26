import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-pluginnativo',
  templateUrl: './pluginnativo.page.html',
  styleUrls: ['./pluginnativo.page.scss'],
})
export class PluginnativoPage implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }





  async openBrowser() {
    await Browser.open({ url: 'https://game.capcom.com/residentevil/sp/en/' });
  }
}
