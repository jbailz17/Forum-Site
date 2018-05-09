import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SearchInterfaceModule } from './search-interface/search-interface.module';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './core/header/header.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HeaderComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SearchInterfaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
