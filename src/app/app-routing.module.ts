import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { ProductComponent } from './product/product.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { Unsavedchangesguard } from './unsavedchangesguard.guard';

const routes: Routes = [
   //{path:'', redirectTo: 'login', pathMatch:'full'},
   //{path:'login', component:LoginComponent},
   //{path:'home', component:HomeComponent},
   //{path:'aboutus', component:AboutusComponent},
   //{path:'contactus', component:ContactusComponent},
   //{path:'product', component:ProductComponent},
   //{path:'**', component:PagenotfoundComponent}


   //{path:'', redirectTo: 'login', pathMatch:'full'},
   //{path:'login', component:LoginComponent},
   //{path:'home', component:HomeComponent},
   //{path:'aboutus', component:AboutusComponent},//
   //{path:'contactus', component:ContactusComponent},
   //{path:'product', children: [
     //{path:'',component:ProductComponent},
     //{path:'laptop',component:LaptopComponent},
    //{path:'tv',component:TvComponent},
    //{path:'tablet',component:TabletComponent},
   // {path:'washingmachine',component:WashingmachineComponent}
   //]},
   //{path:'**', component:PagenotfoundComponent}



  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'product',canActivate:[AuthGuard], component:ProductComponent, children: [
    {path:'',component:ProductComponent},
    {path:'laptop',component:LaptopComponent},
    {path:'tv',component:TvComponent},
    {path:'tablet',component:TabletComponent},
    {path:'washingmachine',component:WashingmachineComponent}
  ]},
{path:'post', component: DemopostComponent},
  {path:'postdetails/id', component:PostdetailsComponent},// to go on perticular page
  {path: 'adduser', component: AdduserComponent, canDeactivate: [Unsavedchangesguard]},
  {path:'**', component:PagenotfoundComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }