import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({ onFilter }) => {
  const [date, setDate] = useState(null);

  const [location, setLocation] = useState("");

  const handleDateChange = (date) => {
    setDate(date);
    onFilter({ date });
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    onFilter({ location: e.target.value });
  };

  return (
    <div className="flex space-x-4">
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        className="border p-2 rounded"
        placeholderText="Filter by Date"
      />
      <input
        type="text"
        value={location}
        onChange={handleLocationChange}
        placeholder="Filter by Location"
        className="border p-2 rounded"
      />
    </div>
  );
};

export default Filter;
