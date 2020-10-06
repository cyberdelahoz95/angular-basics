import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)], // imports refer to modules needed or available inside the current ngmodule.
  exports: [RouterModule], // exports are modules available for those other components or modules using this module
})
export class HomeRoutingModule {}
