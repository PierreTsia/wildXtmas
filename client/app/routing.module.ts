import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

import { KidComponent } from './kid/kid.component';
import { ElfeComponent } from './elfe/elfe.component';
import { SantaComponent } from './santa/santa.component';
const routes: Routes = [
  { path: '', component: KidComponent },
  { path: 'elfe', component: ElfeComponent },
  { path: 'santa', component: SantaComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
