import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JuiceBoxSearchBarModule } from '@fulcrum/juicy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JuiceBoxSearchBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fulcrum';
}
