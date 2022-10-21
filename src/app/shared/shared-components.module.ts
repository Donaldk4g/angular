import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { AllEpisodesComponent } from './all-episodes/all-episodes.component';
import { AllLocationsComponent } from './all-location/all-location.component';

@NgModule({
  declarations: [AllCharactersComponent, AllEpisodesComponent, AllLocationsComponent],
  imports: [
    CommonModule
  ],
  exports: [AllCharactersComponent, AllEpisodesComponent,AllLocationsComponent]
})


export class SharedComponentsModule { }
