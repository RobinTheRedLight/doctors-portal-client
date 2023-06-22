import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from './AppointmentOptions';

const AppointmentAvailable = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div className='mt-16'>
            <p className='text-secondary font-semibold text-center '>Available Services on: {format(selectedDate, 'PP')} </p>
            <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-32'>
                {
                    appointmentOptions.map(data => <AppointmentOptions
                        key={data._id}
                        appointmentOptions={data}
                    >
                    </AppointmentOptions>)
                }
            </div>
        </div>
    );
};

export default AppointmentAvailable;