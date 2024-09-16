import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { Action, provideStore } from "@mini-rx/signal-store";

export interface CounterState {
  counter: number;
}

export const counterInitialState: CounterState = {
  counter: 1,
};

export function counterReducer(
  state: CounterState = counterInitialState,
  action: Action,
) {
  switch (action.type) {
    case 'inc':
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideStore({
    reducers: {
      counter: counterReducer
    }
  })]
};
