import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { KidComponent } from './kid/kid.component';
import { ElfeComponent } from './elfe/elfe.component';
import { SantaComponent } from './santa/santa.component';
import { ScanComponent } from './scan/scan.component';
import { ToyselectComponent } from './toyselect/toyselect.component';
import { ToylistComponent } from './toylist/toylist.component';
import { ToyService } from './services/toy.service';
import { KidService } from './services/kid.service';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    KidComponent,
    ElfeComponent,
    SantaComponent,
    ScanComponent,
    ToyselectComponent,
    ToylistComponent
  ],
  imports: [
    RoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDvWuLRUl6vv_rZzfi7rRDUVKpmry0DV1o'
    })
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    UserService,
    ToyService,
    ToylistComponent,
    KidService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
