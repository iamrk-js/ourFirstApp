import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ourFirstApp';
  skills : Array<string> = ["JS", "TS", "Angular", "Node"]
}
