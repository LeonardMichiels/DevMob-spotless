import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { Router } from '@angular/router';
import { Place } from './models/place';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  places: Place[];
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    public router : Router
  ) {
    this.places = [
      { _id:'5fa96f68224b3a0017733314', location:{coordinates:[32.520125,62.637738],type:'Point'}, postedBy:'5fa91dcc1a32460017971d7d', title:'un spot bien nice', description:'Bar', rates:'2'},
     
    ];
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.router.navigateByUrl('splash');
    });
  }
}
