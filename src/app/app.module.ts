import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OshopModule } from './oshop/oshop.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // NgbModule,
    AppRoutingModule,
    OshopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
