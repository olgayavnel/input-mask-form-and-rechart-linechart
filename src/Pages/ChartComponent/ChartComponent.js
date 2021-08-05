import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Area,
} from 'recharts';
import { ChartWrapper, TextWrap } from './chartStyling';

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

const Chart = () => {
  const onChangeDot = (e, xvalue, yvalue) => {
    console.log(e, xvalue, yvalue);
  };
  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <ChartWrapper
    // data-aos='zoom-in'
    // data-aos-duration='500'
    // data-aos-once='true'
    // data-aos-anchor-placement='center bottom'
    >
      <TextWrap>
        <FaFacebookSquare className='icon' />
        <h2>Social_facebook</h2>
      </TextWrap>

      {/* Chart container */}
      <ResponsiveContainer width='100%' height={400}>
        <LineChart
          // width={600}
          // height={400}
          data={data}
          // margin={{
          //   top: 60,
          //   right: 60,
          //   left: 60,
          //   bottom: 20,
          // }}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
        >
          <XAxis
            dataKey='name'
            axisLine={false}
            tickLine={false}
            tickCount={8}
            domain={['dataMin', 'dataMax']}
          />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip
            cursor={false}
            contentStyle={{
              backgroundColor: 'white',
              color: '#336581',
            }}
          />
          <CartesianGrid stroke='#ccc' horizontal='true' vertical='' />
          <Line
            type='monotone'
            dot={false}
            dataKey='uv'
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
