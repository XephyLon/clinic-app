import { Moment } from 'moment';
import { Exam } from './exam.model';

export interface Time {
  time: string;
  availability: "available" | "reserved" | "examined";
  examDetails?: Exam
}
