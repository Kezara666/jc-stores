import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUsed = signal(true);

  setTrue() {
    this.loggedUsed.set(true); // Set signal value to true
  }

  setFalse() {
    this.loggedUsed.set(false); // Set signal value to false
  }

  get sharedState() {
    return this.loggedUsed()
  }
}
