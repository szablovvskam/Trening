import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { Component, OnInit  } from '@angular/core';
import {
  Platform
} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {
  map: GoogleMap;


  constructor( private platform: Platform) {}
  
  ngOnInit() {

    this.platform.ready();
    this.loadMap();
  }

  loadMap() {


    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 54.39620630892717, 
           lng: 18.602921932285238
         },
         zoom: 12,
         tilt: 30
       }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'CrossCore',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: 54.39130005461771,
           lng: 18.588087894858084
      }
    });
    let marker1: Marker = this.map.addMarkerSync({
      title: 'CrossFit Stocznia',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 54.36189047445653, 
           lng: 18.654381463939878
      }
    });
    let marker2: Marker = this.map.addMarkerSync({
      title: 'Marina Welness Center',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 54.42933814652592, 
           lng: 18.59259258720778
      }
    });
    let marker3: Marker = this.map.addMarkerSync({
      title: 'CrossBox Atleta',
      icon: 'yellow',
      animation: 'DROP',
      position: {
        lat: 54.40289042078417, 
           lng: 18.598006412930836
      }
    });
  }

}
  


