import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  public notify = new BehaviorSubject<any>('');

notifyObservable$ = this.notify.asObservable();

    public notifyOther(data: any) {
    if (data) {
        this.notify.next(data);
    }
}

  constructor() { }
}
