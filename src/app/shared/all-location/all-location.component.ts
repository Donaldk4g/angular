import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { LocationDetailComponent } from '../location-detail/location-detail.component';
@Component({
  selector: 'app-all-locations',
  templateUrl: './all-location.component.html',
  styleUrls: ['./all-location.component.scss'],
})
export class AllLocationsComponent implements OnInit {

  allLocations: any;


  constructor(
    private randmService: RickAndMortyService,
    private modalController: ModalController
    ) { }

  ngOnInit() {
    this.randmService.getAllLocations().then( (res: any) => {
      this.allLocations = res;
      console.log (this.allLocations);
    });
  }

  async openModal(data: any) {
    const modal = await this.modalController.create({
    component: LocationDetailComponent,
    componentProps: { location: data }
    });
    return await modal.present();
   }

}
