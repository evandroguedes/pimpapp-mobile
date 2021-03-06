import { CadastroCatadorPage4 } from './../cadastro-catador-page4/cadastro-catador-page4';
import { Storage } from '@ionic/storage';
import { UsersAPI } from './../../../providers/users-api';
import { CatadoresProvider } from './../../../providers/catadores-provider';
import { Catador } from './../../catador';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-cadastro-catador-page5',
  templateUrl: 'cadastro-catador-page5.html',
})
export class CadastroCatadorPage5 {
  public myDate: any;
  public catador: Catador = new Catador();
  public user: any;
  public avatar:String = '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public catadoresProvider: CatadoresProvider,
    public userProvider: UsersAPI, private camera: Camera, public storage: Storage,
    public toastCtrl: ToastController) {
        this.catador = navParams.get('catador');
        console.log(this.catador);
    }

    printItem(){
        console.log(this.catador);
    }
    
    openCamera(){
        const options: CameraOptions = {
            quality: 40,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.avatar = base64Image;
            let toast = this.toastCtrl.create({
                message: 'Imagem carregada com sucesso!',
                duration: 3000,
                position: 'top'
            });
            toast.present();

        }, (err) => {
            console.log('Error camera: ' + err);
        });
    }

    openPage4(){
        this.navCtrl.push(CadastroCatadorPage4);
    }

}
