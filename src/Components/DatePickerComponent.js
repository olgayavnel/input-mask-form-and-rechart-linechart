import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';

const DatePickerWrap = styled.section`
  display: flex;
  width: 100%;
  justify-content: end;
  font-weight: ${(props) => props.fontWeight};
`;
const DatePickerStartWrap = styled.div`
  width: 50%;
  padding-right: 10px;
  font-weight: 500;
  font-size: 1.2rem;
  .dataPicker {
    padding: 0.5rem;
    width: 100%;
    margin-bottom: 0.5rem;
    border-radius: 8px;
    height: 40px;
    outline: none;
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
  p {
    padding: 10px 0px 10px 0px;
  }
`;
const DatePickerEndWrap = styled.div`
  width: 50%;
  font-weight: 500;
  font-size: 1.2rem;
  .react-datepicker-wrapper {
    width: 100%;
  }
  .dataPicker {
    padding: 0.5rem;
    width: 100%;
    margin-bottom: 0.5rem;
    border-radius: 8px;
    height: 40px;
  }
  p {
    padding: 10px 0px 10px 0px;
  }
`;

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <DatePickerWrap>
      <DatePickerStartWrap>
        <p>Start date</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className='dataPicker'
        />
      </DatePickerStartWrap>
      <DatePickerEndWrap>
        <p>End date</p>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className='dataPicker'
        />
      </DatePickerEndWrap>
    </DatePickerWrap>
  );
};

export default DatePickerComponent;
