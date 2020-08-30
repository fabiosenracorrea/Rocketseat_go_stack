import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentRepository from '../repositories/AppointmentRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmnetRepository = new AppointmentRepository();
const createAppointmentService = new CreateAppointmentService(
  appointmnetRepository,
);

const appointmentsRoute = Router();

appointmentsRoute.get('/', (request, response) => {
  return response.json(appointmnetRepository.allAppointments());
});

appointmentsRoute.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const appointment = createAppointmentService.execute({
      provider,
      date: parsedDate,
    });

    return response.status(201).json(appointment);
  } catch (err) {
    return response.status(400).json({ Error: err.message });
  }
});

export default appointmentsRoute;
