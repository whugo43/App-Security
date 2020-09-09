import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController, ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.page.html',
  styleUrls: ['./visitas.page.scss'],
})
export class VisitasPage implements OnInit {

  constructor(public popoverController: PopoverController,
              public navCtrl: NavController,  
              public modalController: ModalController,
              public router: Router,
              public alertController: AlertController) { }

  ngOnInit() {
  }
  async presentar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',

      header: 'Residencia de Hugo Wong',
      message:'<ion-card><img src="../../assets/map.jfif" /> </ion-card>',
      buttons: [
       {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');            
          }
        }
      ]
    });
    await alert.present();
  }


}
