import { Injectable } from '@angular/core';
import { Clinic } from './shared/clinic.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  constructor(private http: HttpClient ) {}

  getClinics() {
    const path = "https://next.json-generator.com/api/json/get/Ey5vMsevP";
    return this.http.get<Clinic[]>(path);
  }
}
