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
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    this.platform.ready();
    this.loadMap();
  }

  loadMap() {

    // This code is necessary for browser
    // Environment.setEnv({
    //   'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCqq7r1-YV_33ON5BHgJN4ffTGTx-J0bzM',
    //   'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCqq7r1-YV_33ON5BHgJN4ffTGTx-J0bzM'
    // });

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
      title: 'Ionic',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: 54.39130005461771,
           lng: 18.588087894858084
      }
    });
    let marker1: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 54.36189047445653, 
           lng: 18.654381463939878
      }
    });
    let marker2: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 54.42933814652592, 
           lng: 18.59259258720778
      }
    });
    let marker3: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'yellow',
      animation: 'DROP',
      position: {
        lat: 54.40289042078417, 
           lng: 18.598006412930836
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
    marker1.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
    marker2.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
    marker3.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }

}
  


