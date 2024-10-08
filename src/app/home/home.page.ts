import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router,NavigationExtras,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario:String;
  niveles:any[]=[
    {id:1,nivel:"Basica Incompleta"},
    {id:2,nivel:"Basica Completa"},
    {id:3,nivel:"Media Incompleta"},
    {id:4,nivel:"Media Completa"},
    {id:5,nivel:"Media Incompleta"},
    {id:6,nivel:"Superior Completa"}
  ]
  data:any={
    nombre:"",
    apellido:"",
    education:"",
    nacimiento:""
  };
  constructor(public alertController: AlertController,private activeroute: ActivatedRoute, private router: Router) {
    
    this.activeroute.queryParams.subscribe(params => {
     
      if(this.router.getCurrentNavigation().extras.state){
        this.usuario=this.router.getCurrentNavigation().extras.state.user;
     
      }
    });
  }
  /**
   * Metodo limpíar recorre un objeto y se define el 
   * valor de su propiedad en ""
   */
  limpiar(){
    for (var [key, value] of Object.entries(this.data)) {
      Object.defineProperty(this.data,key,{value:""})
    }
  }

  mostrar(){
    (this.data.nombre!="" && this.data.apellido!="") && 
    this.presentAlert("Usuario","Su nombre es "+this.data.nombre+" "+this.data.apellido);
  }

  async presentAlert(titulo:string,message:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
