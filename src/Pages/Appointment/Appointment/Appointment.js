import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner.js/AppointmentBanner';
import AppointmentAvailable from '../AppointmentAvailable/AppointmentAvailable';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AppointmentAvailable selectedDate={selectedDate}>
            </AppointmentAvailable>
        </div>
    );
};

export default Appointment;