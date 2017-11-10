import { Component, OnInit } from '@angular/core';
import { KIDS } from '../models/kidmodels';
import { Kid } from '../models/kid';
import { KidService} from '../services/kid.service';
import { ToyService} from '../services/toy.service';
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
  constructor(private kidService: KidService, private toyService: ToyService) { }

  ngOnInit() {
  }
  public initMap() {
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    let map = new google.maps.Map(document.getElementById('map'));
    directionsDisplay.setMap(map);
    this.calculateAndDisplayRoute(directionsService, directionsDisplay);
  }

  private calculateAndDisplayRoute(directionsService, directionsDisplay) {
    let waypts = [];

    for (var i = 0; i < this.kidService.add.length; i++) {
          waypts.push({
          location: this.kidService.add[i],
          stopover: true
        });
    }

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
