import React from 'react';

const AppointmentOptions = ({ appointmentOptions, setTreatment }) => {
    const { name, price, slots } = appointmentOptions;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary justify-center">{name}</h2>
                <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p className='text-center'><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(appointmentOptions)} htmlFor="my_modal_6" className="bg-gradient-to-r from-primary to-secondary btn btn-primary text-white">open modal</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;