import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductsContainer } from './containers/products/products.container';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
const routes: Routes = [
  {
    path: '',
    component: ProductsContainer,
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)], // imports refer to modules needed or available inside the current ngmodule.
  exports: [RouterModule], // exports are modules available for those other components or modules using this module
})
export class ProductsRoutingModule {}
