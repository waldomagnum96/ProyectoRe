import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {


  noticias : any = [
    {
      titulo: "Titulo de la Noticia",
      texto: "Texto de la noticia que quiero que salga en el cuerpo del item"
    }
  ];
  editForm: FormGroup;

  constructor(private dbService: DbserviceService, private modalCtrl: ModalController, private fb: FormBuilder) { 
    this.editForm = this.fb.group({
      id: [''],
      titulo: [''],
      texto: ['']
    });
  }

    

  eliminarNoticia(noticias: any) {
    this.dbService.deleteNoticia(noticias.id)
      .then(() => {
        // Recargar la lista desde la base de datos
        this.dbService.fetchNoticias().subscribe((item: any) => {
          this.noticias = item;
        });
      })
      .catch((error) => {
        console.error("Error eliminando la noticia: ", error);
      });
  }
 

  ngOnInit() {
    this.dbService.dbState().subscribe((res: any)=>{
      if (res) {
        this.dbService.fetchNoticias().subscribe((item:any)=>{
          this.noticias = item;
        })
      }
    });
  }





  // Abre el modal para editar la noticia
  async editarNoticia(noticia: { id: any; titulo: any; texto: any; }) {
    this.editForm.patchValue({
      id: noticia.id,
      titulo: noticia.titulo,
      texto: noticia.texto
    });
    const modal = await this.modalCtrl.create({
      component: this.actualizarNoticia, // puedes crear un componente de modal específico para la edición
      componentProps: { noticia: this.editForm }
    });
    return await modal.present();
  }

  // Método que llama a actualizar noticia en el servicio
  actualizarNoticia() {
    const { id, titulo, texto } = this.editForm.value;
    this.dbService.updateNoticia(id, titulo, texto).then(() => {
      this.dbService.cargarNoticias(); // Recarga la lista después de actualizar
      this.modalCtrl.dismiss();
    });
  }
  






}
