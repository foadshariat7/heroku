import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../app/angularmaterial.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatSnackBarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SendEmailService } from './send-email.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './commons/footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './commons/header/header.component';
import { ServicesComponent } from './services/services.component';
import { LinksComponent } from './links/links.component';

import 'hammerjs';
import 'web-animations-js';

var firebaseConfig = {
  apiKey: "AIzaSyDg42k0N3sJEvxQVAd9ZL3yNDfSbNzB0z8",
  authDomain: "shirin-b04de.firebaseapp.com",
  databaseURL: "https://shirin-b04de.firebaseio.com",
  projectId: "shirin-b04de",
  storageBucket: "shirin-b04de.appspot.com",
  messagingSenderId: "584181697968"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    GalleryComponent,
    HeaderComponent,
    ServicesComponent,
    LinksComponent
  ],
  entryComponents: [],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'shirin-app'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [SendEmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
