import React from "react";
import PropTypes from "prop-types";
import { Calendar, Badge } from 'antd';
import './Calendarr.css';

// data
import dates from "../data/calendar.json";

function getListData(value) {
  let listData;
  dates.map((date, index) => {

    if( date.date === value.format('YYYY-MM-DD') ) {
      listData = [
        { type: 'success', content: date.description }
      ];
      return listData;
    }

  });
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return value.format('YYYY-MM-DD');
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Fall Semester</span>
    </div>
  ) : null;
}



const Calendarr = ({ dates }) => {
  // return (
  //   <div>
  //     {dates.map((date, index) => {
  //       return (
  //         <div key={`${date.date}-${index}`}>
  //           Date display information, {date.description}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
  );

};

Calendarr.propTypes = {
  dates: PropTypes.array.isRequired
};

export default Calendarr;
