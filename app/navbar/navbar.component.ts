/**
 * Created by root on 27/12/16.
 */
import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent{
  private projectName:string;

  constructor(){
    this.projectName = 'SpotifyClone';
  }
}
