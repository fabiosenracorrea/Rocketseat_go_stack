import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface AppointmentTDO {
  provider: string;
  date: Date;
}

class AppointmentRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public allAppointments(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const scheduledAppointment = this.appointments.find(app =>
      isEqual(app.date, date),
    );

    return scheduledAppointment || null;
  }

  public createAppointment({ provider, date }: AppointmentTDO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentRepository;
