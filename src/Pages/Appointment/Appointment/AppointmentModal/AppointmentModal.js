import React from 'react';

const AppointmentModal = ({ treatment }) => {
    const { name } = treatment;
    return (
        <>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my_modal_6" className=" btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">This modal works with a hidden checkbox!</p>
                </div>
            </div>
        </>
    );
};

export default AppointmentModal;