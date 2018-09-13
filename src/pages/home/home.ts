import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact'; 


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
homeRoot = HomePage;
home1Root = AboutPage;
home2Root = ContactPage; 
  constructor() {

  }

}
