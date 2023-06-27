import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';

const AppointmentModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext)
    console.log(user.displayName)
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

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    alert('Appointment booked successfully');
                    refetch();
                }
            })

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
                        <input name='patientName' type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full mt-4" />
                        <input name='number' type="text" placeholder="Phone Number" className="input input-bordered w-full mt-4" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full mt-4" />
                        <button className="mt-5 btn btn-neutral w-full">Submit</button>
                    </form>

                </div>
            </div>
        </>
    );
};

export default AppointmentModal;