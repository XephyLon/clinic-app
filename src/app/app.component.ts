import { Component, OnInit } from "@angular/core";
import { ClinicService } from "./clinic.service";
import { Clinic } from "./shared/clinic.model";
import { FormControl } from "@angular/forms";
import * as moment from 'moment';
import { Moment } from 'moment';
import { TimesService } from './times.service';
import { Time } from './shared/time.model';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit {
  clinics: Array<Clinic>;

  times: Array<Time>

  myControl = new FormControl();

  constructor(private clinicService: ClinicService, private timesService: TimesService) {
    clinicService.getClinics().subscribe(data => (this.clinics = data));
  }

  dateFilter(date: Moment) {
    if ( date.isSameOrAfter(moment()) && date.isSameOrBefore(moment().add(7, "days")) ) {
      return true
    }
  }

  ngOnInit(): void {
    this.timesService
      .getTimes()
      .then( data => this.times = data )
  }

  setColor(value) {
    if (value === "available") {
      return "green"
    } else if (value === "reserved") {
      return "purple"
    } else {
      return "red"
    }
  }
}
