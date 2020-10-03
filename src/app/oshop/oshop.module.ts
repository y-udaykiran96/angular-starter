import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OshopComponent } from './components/oshop/oshop.component';
import { OshopRoutingModule } from './oshop-routing.module';


@NgModule({
  declarations: [
    OshopComponent
  ],
  imports: [
    BrowserModule,
    OshopRoutingModule
  ],
  providers: [],
  exports: [
    OshopComponent
  ],
  bootstrap: [OshopComponent]
})
export class OshopModule { }

