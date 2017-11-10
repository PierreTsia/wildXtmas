import { Component, OnInit } from '@angular/core';
import { KIDS } from '../models/kidmodels';
import { Kid } from '../models/kid';
declare var google: any;

@Component({
  selector: 'app-santa',
  templateUrl: './santa.component.html',
  styleUrls: ['./santa.component.scss']
})
export class SantaComponent implements OnInit {
  public start: any;
  public end: any;
  kids = KIDS;
  constructor() { }

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  ngOnInit() {
  }
  public initMap() {
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: { lat: 41.85, lng: -87.65 }
    });
    directionsDisplay.setMap(map);
    this.calculateAndDisplayRoute(directionsService, directionsDisplay);
  }
  private getKid3(): Kid {
    return KIDS['ppp'];
  }
  private getKid2(): Kid {
    return KIDS['s'];
  }
  private getKid1(): Kid {
    return KIDS['a'];
  }
  private calculateAndDisplayRoute(directionsService, directionsDisplay) {
    let add1=this.getKid1().address;
    let add2=this.getKid2().address;
    let add3=this.getKid3().address;
    let waypts = [{location: add1, stopover: true},{location: add2, stopover: true},{location: add3, stopover: true}];
   /* let checkboxArray: any = document.getElementById('waypoints');
    for (var i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray.options[i].selected) {
        waypts.push({
          location: checkboxArray[i].value,
          stopover: true
        });
      }
    }*/

    directionsService.route({
      origin: "La Loupe",
      destination: "La Loupe",
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        let route = response.routes[0];
        let summaryPanel = document.getElementById('directions-panel');
        summaryPanel.innerHTML = '';

        for (let i = 0; i < route.legs.length; i++) {
          let routeSegment = i + 1;
          summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
            '</b><br>';
          summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
          summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
          summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
        }
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}
