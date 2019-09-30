import { Injectable } from '@angular/core';
import { times } from './shared/mock-db/times';
import { Time } from './shared/time.model';

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  getTimes(): Promise<Time[]> {
    return Promise.resolve(times)
  }
}
