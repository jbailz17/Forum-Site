import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SearchInterfaceModule } from './search-interface/search-interface.module';
import { PostModule } from './post/post.module';
import { CoreModule } from './core/core.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    NgFlashMessagesModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    HomeModule,
    SearchInterfaceModule,
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
