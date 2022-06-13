import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FblComponent } from './fbl/fbl.component';
import { FiltersComponent } from './filters/filters.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InfluencersComponent } from './influencers/influencers.component';
import { PartnerComponent } from './partner/partner.component';
import { VendorsComponent } from './vendors/vendors.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'footer',component:FooterComponent},
  {path:'careers',component:CareersComponent},
  {path:'fbl',component:FblComponent},
  {path:'influencers',component:InfluencersComponent},
  {path:'vendors',component:VendorsComponent},
  {path:'partner',component:PartnerComponent},//,children:[
  
   
  //]},
  {path:'filters',component:FiltersComponent},
 
  {path:'',redirectTo:'/home',pathMatch:'full'}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
