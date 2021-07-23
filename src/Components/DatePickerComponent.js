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

const DatePickerInnerWrap = styled.div`
  width: 50%;
  padding-right: 10px;
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 0.05rem;

  @media (max-width: 745px) {
    font-size: 1rem;
  }
`;

const DatePickerStartWrap = styled(DatePickerInnerWrap)`
  .datePicker {
    padding: 0.5rem;
    width: 100%;
    margin-bottom: 0.5rem;
    border-radius: 8px;
    height: 40px;
    outline: none;
    border: none;
    color: #757575;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    &:focus {
      border: 1px solid #336581;
      border-color: ${(props) => props.borderColor};
    }
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
  p {
    padding: 10px 0px 10px 0px;
  }
`;
const DatePickerEndWrap = styled(DatePickerInnerWrap)`
  .datePicker {
    padding: 0.5rem;
    width: 100%;
    margin-bottom: 0.5rem;
    border-radius: 8px;
    height: 40px;
    outline: none;
    border: none;
    color: #757575;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    &:focus {
      border: 1px solid #336581;
      border-color: ${(props) => props.borderColor};
    }
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
  p {
    padding: 0.6rem 0rem;
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
          className='datePicker'
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
          className='datePicker'
        />
      </DatePickerEndWrap>
    </DatePickerWrap>
  );
};

export default DatePickerComponent;
