import { Component, inject } from '@angular/core';
import { Store } from "@mini-rx/signal-store";
import { JsonPipe } from "@angular/common";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  store = inject(Store)
  state = this.store.select()

  inc() {
    this.store.dispatch({type: 'inc'})
  }
}
