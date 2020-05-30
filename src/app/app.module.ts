import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routerModule } from './routes';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BachanComponent } from './bachan/bachan.component';
import { GurVichaarComponent } from './gur-vichaar/gur-vichaar.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';


const appRoutes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BachanComponent,
    GurVichaarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routerModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
