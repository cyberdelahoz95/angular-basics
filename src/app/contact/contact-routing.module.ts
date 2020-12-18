import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)], // imports refer to modules needed or available inside the current ngmodule.
  exports: [RouterModule], // exports are modules available for those other components or modules using this module
})
export class ContactRoutingModule {}
