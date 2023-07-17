import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOptions from './AppointmentOptions';
import AppointmentModal from '../Appointment/AppointmentModal/AppointmentModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AppointmentAvailable = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-omega-three.vercel.app/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    };

    // useEffect(() => {
    //     fetch('https://doctors-portal-server-omega-three.vercel.app/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])
    return (
        <div className='mt-16'>
            <p className='text-secondary font-semibold text-center '>Available Services on: {format(selectedDate, 'PP')} </p>
            <div className='lg:pl-12 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-32'>
                {
                    appointmentOptions.map(data => <AppointmentOptions
                        key={data._id}
                        appointmentOptions={data}
                        setTreatment={setTreatment}
                    >
                    </AppointmentOptions>)
                }
            </div>
            {
                treatment &&
                <AppointmentModal refetch={refetch} setTreatment={setTreatment} selectedDate={selectedDate} treatment={treatment}></AppointmentModal>
            }
        </div>
    );
};

export default AppointmentAvailable;