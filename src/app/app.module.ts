import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { InfluencersComponent } from './influencers/influencers.component';
import { RouterModule } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { FblComponent } from './fbl/fbl.component';
import { PartnerComponent } from './partner/partner.component';
import { VendorsComponent } from './vendors/vendors.component';
import { FiltersComponent } from './filters/filters.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    ContactusComponent,
    HeaderComponent,
    InfluencersComponent,
    CareersComponent,
    FblComponent,
    PartnerComponent,
    VendorsComponent,
    FiltersComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
