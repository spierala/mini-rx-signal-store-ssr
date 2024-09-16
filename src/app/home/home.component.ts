import { Component, inject } from '@angular/core';
import { Store } from "@mini-rx/signal-store";
import { JsonPipe } from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    store = inject(Store)
  state = this.store.select()

  inc() {
      this.store.dispatch({type: 'inc'})
  }
}
