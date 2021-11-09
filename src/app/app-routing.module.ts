import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { HrPageComponent } from './hr-page/hr-page.component';
import { AuthGuard } from './auth.guard';


const appRoot:  Routes = [
  {
    path: '', // if empty path is given then basic path will point to Login component
    component: LoginComponent
  }, 
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'register', 
    canActivate:[AuthGuard],
    component: RegisterComponent
  },
  {
    path: 'product',
    canActivate:[AuthGuard],
    component: ProductComponent
  },
  {
    path: 'showemp',
    canActivate:[AuthGuard],
    component: ShowempComponent
  }, {
    path: 'hrpage',
    children: [
      {
        path: '',
        canActivate:[AuthGuard],
        component: HrPageComponent
      },
      {
        path: 'register',
        canActivate:[AuthGuard],
        component: RegisterComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoot)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
