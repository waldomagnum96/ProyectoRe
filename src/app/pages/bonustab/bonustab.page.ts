import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bonustab',
  templateUrl: './bonustab.page.html',
  styleUrls: ['./bonustab.page.scss'],
})
export class BonustabPage implements OnInit {

  constructor(private alertController: AlertController) { }

  async presentAlert(message: string,header: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  async showInfo() {
    this.presentAlert(
      'La primera parte de Resident Evil: The Official Comic Magazine, número 1 se publicó en marzo de 1998.',
      'Resident evil (Volume 1) Issue #1'
    );
  }

  async showOtherInfo() {
    this.presentAlert(
      'Resident Evil: The Official Comic Magazine, número 2 se publicó en junio de 1998. Presenta dos historias originales e inconexas de Kris Oprisko y una larga narración de Resident Evil 2 de Ted Adams, que forma parte de una antología que enlaza con varias de sus otras historias.',
      'Resident evil (Volume 1) Issue #2'
    );
  }

  async showInfo3() {
    this.presentAlert(
      'Resident Evil: The Official Comic Magazine, número 3 se publicó en septiembre de 1998. Este número contiene una entrevista con Shinji Mikami, intercalando "Danger Island" en cada extremo, con una galería de arte de fans después de su conclusión. Si bien Claire Redfield aparece en la portada, en realidad no aparece en ninguna de las tres historias.',
      'Resident evil (Volume 1) Issue #3'
    );
  }

  async showInfo4() {
    this.presentAlert(
      'Resident Evil: La revista oficial de cómics, número 4, se publicó en diciembre de 1998.',
      'Resident evil (Volume 1) Issue #4'
    );
  }

  async showInfo5() {
    this.presentAlert(
      'Resident Evil: La revista oficial de cómics, número 5, se publicó en febrero de 1999.',
      'Resident evil (Volume 1) Issue #5'
    );
  }


  async showInfo6() {
    this.presentAlert(
      'Resident Evil: The Umbrella Conspiracy es una novelización del primer juego de Resident Evil, y fue escrito por la autora S.D. Perry como el primer libro de su serie de Resident Evil. La novela combina los escenarios de Jill y Chris en una sola narración y cuenta con los cinco personajes principales (incluyendo Barry, Rebecca, Joseph y Brad).',
      'Resident Evil The Umbrella Conspiracy'
    );
  }

  async showInfo7() {
    this.presentAlert(
      'Resident Evil: Caliban Cove es la segunda novela de S.D. Serie de novelizaciones de Perry. Ambientado entre los eventos de Resident Evil y Resident Evil 2. Debido al establecimiento de la presencia de Resident Evil 2 dentro de la línea de tiempo en Resident Evil 3: Nemesis de 1999, la línea de tiempo de Caliban Cove es inconsistente con la de su contraparte del videojuego.',
      'Resident Evil Caliban Cove'
    );
  }


  async showInfo8() {
    this.presentAlert(
      'Raccoon City se ha convertido en una necrópolis. En un laboratorio secreto muy por debajo de sus otrora bulliciosas calles, un intento fallido de la Corporación Umbrella de recuperar un arma mutagénica devastadora ha resultado en un horrible brote viral, transformando a cada hombre, mujer y niño de la ciudad en uno de los muertos vivientes. . Y todos tienen hambre.',
      'Resident Evil City of the Dead'
    );
  }


  async showInfo9() {
    this.presentAlert(
      'Leon S. Kennedy, Claire Redfield, Rebecca Chambers, y los supervivientes del incidente de la Ensenada Calibán, John Andrews y David Trapp, están en camino a Europa en un avión para encontrarse con los otros miembros supervivientes de S.T.A.R.S. para otras operaciones contra la Corporación Umbrella.',
      'Resident Evil Underworld'
    );
  }


  async showInfo10() {
    this.presentAlert(
      'Todavía existe demasiada evidencia de su investigación poco ética e inmoral. Debe recuperarse o destruirse (y rápidamente) antes de que se pueda rastrear hasta Umbrella. Y con el virus mutagénico de William Birkin ya propagándose por la ciudad como un reguero de pólvora, se necesitan medidas drásticas. Al amparo de la noche, equipos de mercenarios han entrado en la ciudad, junto con algo más: el dispositivo de seguridad de Umbrella: una versión evolucionada de sus máquinas de matar clase Tyrant, una criatura letal cuyo nombre en código es Nemesis. Ahora Nemesis está a la caza. Y Jill Valentine está a punto de convertirse en presa.',
      'Resident Evil Nemesis'
    );
  }


  async showInfo11() {
    this.presentAlert(
      'La búsqueda desesperada de Claire Redfield de su hermano desaparecido la lleva a una isla remota, donde un genio loco ha desatado todas las criaturas grotescas a su disposición para evitar que ella interfiera con su horrible agenda. Mientras tanto, Chris Redfield ha estado librando una guerra de un solo hombre contra las creaciones de Umbrella... y ahora está en curso de colisión con el hombre que traicionó a los S.T.A.R.S. en Raccoon City.',
      'Resident Evil Code Veronica'
    );
  }


  async showInfo12() {
    this.presentAlert(
      'El equipo Bravo de los S.T.A.R.S. entra en acción para investigar una serie de horribles asesinatos ocurridos en Raccoon City. De camino hacia la escena del crimen, el helicóptero en el que viajan se estrella. El equipo sobrevive y descubre un transporte militar volcado con varios cadáveres destrozados junto a él. Pero eso sólo es el principio de la pesadilla. Están a punto de descubrir la maldad que ha estado creciendo a su alrededor, y la novata del grupo, Rebecca Chambers, comenzará a preguntarse dónde se ha metido.',
      'Resident Evil Zero Hour'
    );
  }

  ngOnInit() {
  }
  
}
