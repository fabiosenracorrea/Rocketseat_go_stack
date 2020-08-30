import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';

import AppointmentRepository from '../repositories/AppointmentRepository';

interface AppointmentTDO {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentRepository: AppointmentRepository;

  constructor(appointmentRepository: AppointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  public execute({ provider, date }: AppointmentTDO): Appointment {
    const startofHourDate = startOfHour(date);

    const appointmentAlreadyonDate = this.appointmentRepository.findByDate(
      startofHourDate,
    );

    if (appointmentAlreadyonDate) {
      throw new Error('Date already scheduled');
    }

    const appointment = this.appointmentRepository.createAppointment({
      provider,
      date: startofHourDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
