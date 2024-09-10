import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperarcontra',
  templateUrl: './recuperarcontra.page.html',
  styleUrls: ['./recuperarcontra.page.scss'],
})
export class RecuperarcontraPage{
  [x: string]: any;

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController // Importamos NavController para la navegación
  ) { }

  // Método para mostrar el mensaje de recuperación
  async recover() {
    const alert = await this.alertController.create({
      header: 'Correo Enviado',
      message: 'Se han enviado las instrucciones de recuperación a su correo Duoc UC.',
      buttons: [{
        text: 'OK',
        handler: () => {
          // Navegar a la página de login al presionar OK
          this.navCtrl.navigateBack('/login');
        }
      }]
    });

    await alert.present();
  }
}

export class RecoverPasswordPage {
  recoveryForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    // Inicializar el formulario con validaciones
    this.recoveryForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  

  

  // Método para enviar el formulario
  onRegister() {
    this.submitted = true;


    // Si el formulario es válido, procedemos con la lógica de recuperación
    if (this.recoveryForm.valid) {
      console.log('Formulario válido, se procede a la recuperación');
      // Aquí colocas la lógica de recuperación, como enviar una solicitud al servidor
    } else {
      console.log('Formulario inválido');
    }
  }
}

 

/**
   * Muestra un toast al usuario
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */
  

