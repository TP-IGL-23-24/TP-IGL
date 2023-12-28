import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import BlackCalendar from "../../assets/blackCalendar.png";
import ActiveCalendar from "../../assets/activeCalendar.png";

const CustomInput = ({ value, onClick, isCalendarOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`w-64 grid grid-cols-2 items-center text-darkBlue rounded-xl py-2 border transition duration-300 ease-in-out hover:bg-gray-50 mb-3 focus:outline-none ${isCalendarOpen ? 'border-lightBlue' : ''}`}
    >
      <img
        src={isCalendarOpen ? ActiveCalendar : BlackCalendar}
        alt="Calendar"
        className="ml-2"
      />
      <span className="ml-2">{value}</span>
    </button>
  );
};



const Datepicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
    return (
      <div className="flex items-center">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
            setIsCalendarOpen(false);
          }}
          onInputClick={() => setIsCalendarOpen(true)}
          onBlur={() => !selectedDate && setIsCalendarOpen(false)} // Reset only if no date is selected
          dateFormat="dd/MM/yyyy"
          customInput={<CustomInput isCalendarOpen={isCalendarOpen} />}
          popperPlacement="bottom-start"
          className="w-64"
        />
      </div>
    );
  };
  
  export default Datepicker;
  