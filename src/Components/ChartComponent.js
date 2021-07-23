import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare } from 'react-icons/fa';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts';

const data = [
  { name: '0', uv: 0, pv: 0, amt: 0 },
  { name: '0.25', uv: 230, pv: 0, amt: 0 },
  { name: '0.5', uv: 400, pv: 0, amt: 0 },
  { name: '0.75', uv: 550, pv: 0, amt: 0 },
  { name: '1', uv: 650, pv: 0, amt: 0 },
  { name: '1.25', uv: 700, pv: 0, amt: 0 },
  { name: '1.5', uv: 740, pv: 0, amt: 0 },
  { name: '1.75', uv: 770, pv: 0, amt: 0 },
  { name: '2', uv: 790, pv: 0, amt: 0 },
];

const ChartWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  margin: 3rem;
  padding: 1.2rem;
  background-color: #f7f9ff;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const TextWrap = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  color: #336581;
  letter-spacing: 0.05rem;
  padding: 0.6rem;

  .icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  h3 {
    align-self: center;
    font-weight: 400;
  }
`;

const Chart = () => {
  const onChangeDot = (e, xvalue, yvalue) => {
    console.log(e, xvalue, yvalue);
  };
  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <ChartWrapper
      data-aos='zoom-in'
      data-aos-duration='500'
      data-aos-once='true'
      data-aos-anchor-placement='center bottom'
    >
      <TextWrap>
        <FaFacebookSquare className='icon' />
        <h2>Social_facebook</h2>
      </TextWrap>
      <ResponsiveContainer width={'100%'} height={400}>
        <LineChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 60,
            right: 60,
            left: 60,
            bottom: 20,
          }}
        >
          <Tooltip
            cursor={false}
            contentStyle={{
              backgroundColor: 'white',
              color: '#336581',
            }}
          />
          <CartesianGrid stroke='#ccc' horizontal='true' vertical='' />
          <XAxis dataKey='name' domain={['dataMin', 'dataMax']}></XAxis>
          <YAxis></YAxis>
          <Line
            type='monotone'
            dot={false}
            dataKey='uv'
            stroke='#336581'
            strokeWidth={2}
            draggable={true}
            activeDot={{
              onDrag: (event, payload) => console.log(payload.payload),
              strokeWidth: 2,
              r: 10,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
      <TextWrap justifyContent='center'>
        <h3>Fraction of actual spend</h3>
      </TextWrap>
    </ChartWrapper>
  );
};

export default Chart;
