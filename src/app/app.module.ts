import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { ShowempComponent } from './showemp/showemp.component';
import { RegisterComponent } from './register/register.component';
import { ExperiencePipe } from './experience.pipe';
import { PhonenoPipe } from './phoneno.pipe';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { HrPageComponent } from './hr-page/hr-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
    ShowempComponent,
    RegisterComponent,
    ExperiencePipe,
    PhonenoPipe,
    HeaderComponent,
    ProductComponent,
    HrPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
