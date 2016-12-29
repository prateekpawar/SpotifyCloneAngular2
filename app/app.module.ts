import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './navbar/navbar.component';



import { SearchComponent }  from './search/search.component';
/*import { NavbarComponent }  from './jumbotron/jumbotron.component';*/
import { AboutComponent }  from './about/about.component';
import { ArtistComponent }  from './artist/artist.component';
import { AlbumComponent }  from './album/album.component';
import { routing }  from './app.routes';

@NgModule({
  imports:      [ BrowserModule,FormsModule,routing ,HttpModule],
  declarations: [ AppComponent,NavbarComponent,SearchComponent ,AboutComponent,ArtistComponent,AlbumComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
