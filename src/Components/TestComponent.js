import React, { Component, Fragment, useState } from 'react';
import Chart from 'r-chart';
export default function ChartComponent() {
  const [targets, setTargets] = useState([
    { date: 'January', amount: 10, size: 0 },
    { date: 'February', amount: 30 },
    { date: 'March', amount: 20 },
    { date: 'May', amount: 15 },
    { date: 'July', amount: 50 },
    { date: 'August', amount: 55 },
    { date: 'September', amount: 40 },
    { date: 'October', amount: 20 },
    { date: 'November', amount: 40 },
    { date: 'December', amount: 50 },
  ]);
  function change({ point, key, value, dataIndex, pointIndex, drag }) {
    var targetsData = [...targets];
    targetsData[pointIndex].amount = value;
    setTargets(targetsData);
    // var {targets,sales,logs} = this.state;
    // if(dataIndex === 0){
    //     if(!drag){//drag end
    //         logs.push(`You changed this.state.targets[${pointIndex}].amount to ${value}`);
    //     }
    //     this.setState({targets,logs})
    // }
    // else if(dataIndex === 1){
    //     sales[pointIndex].amount = value;
    //     if(!drag){//drag end
    //         logs.push(`You changed this.state.saled[${pointIndex}].amount to ${value}`);
    //     }
    //     this.setState({sales,logs})
    // }
  }
  function add({ key, value, dataIndex, pointIndex }) {
    var targetsData = [...targets];
    var newPoint = { date: key, amount: value };
    targetsData.splice(pointIndex, 0, newPoint);
    setTargets(targetsData);
    // var {logs} = this.state;
    // if(dataIndex === 0){
    //     let {targets} = this.state;
    //     targets.splice(pointIndex,0,newPoint);
    //     logs.push(`You added ${JSON.stringify(newPoint)} to this.state.targets`)
    //     this.setState({targets,logs})
    // }
    // else if(dataIndex === 1){
    //     let {sales} = this.state;
    //     sales.splice(pointIndex,0,{date:key,amount:value});
    //     logs.push(`You added ${JSON.stringify(newPoint)} to this.state.sales`)
    //     this.setState({sales,logs})
    // }
  }
  function remove({ point, key, value, dataIndex, pointIndex }) {
    var targetsData = [...targets];
    targetsData.splice(pointIndex, 1);
    setTargets(targetsData);
    // var {logs} = this.state;
    // if(dataIndex === 0){
    //     let {targets} = this.state;
    //     targets.splice(pointIndex,1);
    //     logs.push(`You removed this.state.targets[${pointIndex}]`);
    //     this.setState({targets,logs});
    // }
    // else if(dataIndex === 1){
    //     let {sales} = this.state;
    //     sales.splice(pointIndex,1);
    //     logs.push(`You removed this.state.sales[${pointIndex}]`)
    //     this.setState({sales,logs});
    // }
  }
  return (
    <Fragment>
      <Chart
        data={[
          {
            type: 'line',
            color: '#3F8CB0',
            pointStyle: { radius: 5, fill: '#3F8CB0' },
            text: (point) => {
              return { value: point.date, y: -20 };
            },
            title: 'Data1',
            areaOpacity: 0.1,
            points: targets,
          },
        ]}
        getKey={({ point }) => point.date}
        getValue={({ point }) => point.amount}
        key_editLabel={(label) => label.slice(0, 3)}
        value_editLabel={(value) => value + '%'}
        value_gridColor='#ddd'
        key_title='Date'
        value_title='Amount'
        keys={[
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ]}
        key_zoom={true}
        spline={true}
        value_zoom={true}
        onChange={change}
        onAdd={add}
        onRemove={remove}
      />
      {/* <h3>Logs</h3>
        <div className='logs'>
            <ul>
                {logs.map((log,i)=><li key={i}>{log}</li>)}
            </ul>
        </div> */}
    </Fragment>
  );
}
