import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const patientName = form.patientName.value;
        const number = form.number.value;
        const email = form.email.value;
        const slot = form.slot.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            number
        }
        console.log(booking);
        setTreatment(null);
    }
    return (
        <>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my_modal_6" className=" btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={date} className="input input-bordered w-full mt-4 " disabled />
                        <select name='slot' className="select mt-4 select-bordered w-full">
                            <option disabled value="DEFAULT">Select a slot</option>
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='patientName' type="text" placeholder="Full Name" className="input input-bordered w-full mt-4" />
                        <input name='number' type="text" placeholder="Phone Number" className="input input-bordered w-full mt-4" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full mt-4" />
                        <button className="mt-5 btn btn-neutral w-full">Submit</button>
                    </form>

                </div>
            </div>
        </>
    );
};

export default AppointmentModal;