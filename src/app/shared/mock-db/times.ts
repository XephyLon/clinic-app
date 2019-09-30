import { Time } from "../time.model";
import * as moment from "moment";

const HOUR = moment()
  .hour(9)
  .minute(0);

export let times: Time[] = [
  {
    time: "9:00",
    availability: "available"
  },
  { time: "9:15", availability: "available" },
  {
    time: "9:30",
    availability: "reserved",
    examDetails: { patientName: "Mark Rogers", service: "nisi" }
  },
  {
    time: "9:45",
    availability: "examined",
    examDetails: { patientName: "Alice Newt", service: "uno" }
  },
  {
    time: "10:00",
    availability: "available"
  },
  { time: "10:15", availability: "available" },
  {
    time: "10:30",
    availability: "reserved",
    examDetails: { patientName: "Mark Rogers", service: "nisi" }
  },
  {
    time: "10:45",
    availability: "examined",
    examDetails: { patientName: "Alice Newt", service: "uno" }
  },
  {
    time: "11:00",
    availability: "available"
  },
  { time: "11:15", availability: "available" },
  {
    time: "11:30",
    availability: "reserved",
    examDetails: { patientName: "Mark Rogers", service: "nisi" }
  },
  {
    time: "11:45",
    availability: "examined",
    examDetails: { patientName: "Alice Newt", service: "uno" }
  },
  {
    time: "12:00",
    availability: "available"
  },
  { time: "12:15", availability: "available" },
  {
    time: "12:30",
    availability: "reserved",
    examDetails: { patientName: "Mark Rogers", service: "nisi" }
  },
  {
    time: "12:45",
    availability: "examined",
    examDetails: { patientName: "Alice Newt", service: "uno" }
  },
  {
    time: "13:00",
    availability: "available"
  },
  { time: "13:15", availability: "available" },
  {
    time: "13:30",
    availability: "reserved",
    examDetails: { patientName: "Mark Rogers", service: "nisi" }
  },
  {
    time: "13:45",
    availability: "examined",
    examDetails: { patientName: "Alice Newt", service: "uno" }
  },
  {
    time: "14:00",
    availability: "available"
  },
  { time: "14:15", availability: "available" },
  {
    time: "14:30",
    availability: "reserved",
    examDetails: { patientName: "Mark Rogers", service: "nisi" }
  },
  {
    time: "14:45",
    availability: "examined",
    examDetails: { patientName: "Alice Newt", service: "uno" }
  },
];
