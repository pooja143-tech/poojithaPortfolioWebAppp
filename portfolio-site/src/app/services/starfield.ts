import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarfieldService {
  private colorChangeSource = new Subject<string>();
  colorChange$ = this.colorChangeSource.asObservable();

  changeColor(color: string) {
    this.colorChangeSource.next(color);
  }
}
