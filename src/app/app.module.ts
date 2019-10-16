import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UsersComponent as UsersContainerComponent } from './containers/users/users.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserComponent } from './containers/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducers } from 'src/store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from 'src/store/effects/user.effects';
import { ConfigEffect } from 'src/store/effects/config.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from 'src/services/user.service';
import { UserDetailsComponent } from './components/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    UserComponent,
    UsersContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffect]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument(): [],
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
