import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'jb-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  animations: [
    trigger('visibility', [
      state('shown', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class AlertsComponent implements OnInit {
  classes: string;
  message: string;
  visibility = 'hidden';

  constructor() { }

  ngOnInit() {

  }

  private showMessage(message, classes) {
    this.clearAlert();

    this.message = message;
    this.classes = classes;
    this.visibility = 'shown';

    setTimeout(() =>
      this.visibility = 'hidden'
      , 3000);
  }

  clearAlert() {
    if (this.message && this.message.length > 0) {
      this.message = '';
      this.classes = '';
      this.visibility = 'hidden';
    }
  }

  toggleVisibility() {
    this.visibility =
      this.visibility == 'shown' ? 'hidden' : 'shown';
  }

  showSuccess(message) {
    this.showMessage(message, 'alert alert-success');
  }

  showInfo(message) {
    this.showMessage(message, 'alert alert-info');
  }

  showWarning(message) {
    this.showMessage(message, 'alert alert-warning');
  }

  showDanger(message) {
    this.showMessage(message, 'alert alert-danger');
  }
}
