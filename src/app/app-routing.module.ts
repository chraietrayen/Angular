import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page-component/landing-page-component.component';  


const routes: Routes = [
  { path: '', component: LandingPageComponent }, 
  { path: 'facesnaps', component: FaceSnapListComponent } 

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
