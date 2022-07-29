import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPageComponent } from './modules/modules/auth/pages/auth-page/auth-page.component';
import { FavoritesPageComponent } from './modules/modules/favorites/pages/favorites-page/favorites-page.component';
 

@NgModule({
  declarations: [ //TODO: declaraciones, componententes, directivas, pipes
    AppComponent, AuthPageComponent, FavoritesPageComponent,
    
  ],
  imports: [//TODO: Solo se importan otros modulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
