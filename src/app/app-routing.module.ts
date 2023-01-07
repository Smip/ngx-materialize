import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {ParallaxComponent} from './parallax/parallax.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'parallax', component: ParallaxComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
