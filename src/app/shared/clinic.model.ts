import { Doctor } from './doctor.model';
import { ClinicServices } from './clinic-services.model';

export interface Clinic {
  _id: string;
  clinicName: string;
  doctors: Array<Doctor>;
  services: Array<ClinicServices>;
}
