import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserContentComponent } from './user-content/user-content.component';
import { AddressComponent } from './user-content/address/address.component';
import { GeoComponent } from './user-content/address/geo/geo.component';

@NgModule({
  declarations: [
    UserComponent,
    UserContentComponent,
    AddressComponent,
    GeoComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
