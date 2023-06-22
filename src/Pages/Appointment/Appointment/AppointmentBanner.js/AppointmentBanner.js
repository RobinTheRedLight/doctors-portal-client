import chair from '../../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import bgChair from '../../../../assets/images/bg.png'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header style={{
            background: `url(${bgChair})`,
            backgroundSize: ' 100% 100%',

        }}>
            <div className="hero py-16">
                <div className="hero-content flex-col  lg:flex-row-reverse">
                    <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:pr-32'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />

                    </div>
                </div>
            </div>
        </header >
    );
};

export default AppointmentBanner;