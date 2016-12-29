/**
 * Created by root on 28/12/16.
 */

import {SearchComponent} from './search/search.component';
import {AboutComponent} from './about/about.component';
import {ArtistComponent} from './artist/artist.component';
import {AlbumComponent} from './album/album.component';



import {Routes,RouterModule} from "@angular/router";
import { ModuleWithProviders }  from '@angular/core';





const APP_ROUTES: Routes=[

  {path:'', component:SearchComponent},
  {path:'about', component: AboutComponent},
  {path:'artist/:id', component:ArtistComponent},
  {path:'album/:id', component:AlbumComponent}
];

export const routing: ModuleWithProviders=RouterModule.forRoot(APP_ROUTES);
