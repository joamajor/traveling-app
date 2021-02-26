import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public loading: boolean = false;

  constructor(
    private alertController: AlertController,
    private router: Router,
  ) { }

  async presentSuccessAlert(message: string, redirectTo?: string) {
    this.loading = false;

    const alert = await this.alertController.create({
      message: message,
      buttons: [{
        text: 'Ok',
        handler: () => {
          if(redirectTo) this.router.navigate([redirectTo]);
        }
      }]
    });

    await alert.present();
  }

  async presentErrorAlert(message: string) {
    this.loading = false;
    
    const alert = await this.alertController.create({
      message: message,
      buttons: ['Ok']
    });

    await alert.present();
  }
}
