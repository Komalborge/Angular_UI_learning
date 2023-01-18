import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from 'src/server/server.component';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { PassalertComponent } from './passalert/passalert.component';
import { FailalertComponent } from './failalert/failalert.component';
import { PasswordvalidationComponent } from './passwordvalidation/passwordvalidation.component';
import { InputdecoratorComponent } from './inputdecorator/inputdecorator.component';
import { ChildComponent } from './child/child.component';
import { HooksComponent } from './hooks/hooks.component';
import { DirassignComponent } from './dirassign/dirassign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildcmpComponent } from './childcmp/childcmp.component';
import { MultipledataComponent } from './multipledata/multipledata.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { SimpleValidationformComponent } from './simple-validationform/simple-validationform.component';
import { RegistrationComponent } from './registration/registration.component';
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import { HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './services/comp1/comp1.component';
import { Comp2Component } from './services/comp2/comp2.component';
import { Comp3Component } from './services/comp3/comp3.component';
import { Comp4Component } from './services/comp4/comp4.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { CountPipe } from './count.pipe';
import { FilterComponent } from './filter/filter.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GallaryComponent } from './gallary/gallary.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DemopostComponent } from './demopost/demopost.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { GenderpipesComponent } from './genderpipes/genderpipes.component';
import { Reactiveassign1Component } from './reactiveassign1/reactiveassign1.component';
import { Reactiveassign2Component } from './reactiveassign2/reactiveassign2.component';
import { PipesassignComponent } from './pipesassign/pipesassign.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { RapidcompComponent } from './rapidcomp/rapidcomp.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { AdduserComponent } from './adduser/adduser.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    DemodirectivesComponent,
    NgswitchComponent,
    StructuraldirectivesComponent,
    AttriComponent,
    CustdirDirective,
    PassalertComponent, 
    FailalertComponent,
    PasswordvalidationComponent,
    InputdecoratorComponent,
    ChildComponent,
    HooksComponent,
    DirassignComponent,
    ChildcmpComponent,
    MultipledataComponent,
    ReactiveFormsComponent,
    SimpleformComponent,
    SimpleValidationformComponent,
    RegistrationComponent,
    Servicecomp1Component,
    Servicecomp2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    PipesdemoComponent,
    CountPipe,
    FilterComponent,
    AboutusComponent,
    ContactusComponent,
    ProductComponent,
    HomeComponent,
    LoginComponent,
    GallaryComponent,
    PagenotfoundComponent,
    DemopostComponent,
    LaptopComponent,
    TabletComponent,
    TvComponent,
    WashingmachineComponent,
    PostdetailsComponent,
    GenderpipesComponent,
    Reactiveassign1Component,
    Reactiveassign2Component,
    PipesassignComponent,
    FirebaseComponent,
    RapidcompComponent,
    ManageproductComponent,
    AdduserComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
