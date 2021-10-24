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

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
    ShowempComponent,
    RegisterComponent,
    ExperiencePipe,
    PhonenoPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
