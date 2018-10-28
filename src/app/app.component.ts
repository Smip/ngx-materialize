import {Component, OnInit} from '@angular/core';

import {toast} from '@Smip/ngx-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  toast = toast;
  title = 'ngx-materialize';
  mTapTargetInstance;
  autocompliteData = {
    'Apple': null,
    'Microsoft': null,
    'Google': 'https://placehold.it/250x250'
  };

  ngOnInit(): void {
  }

  openTapTarget() {
    this.mTapTargetInstance.open();
  }

  closeTapTarget() {
    this.mTapTargetInstance.close();
  }
}
