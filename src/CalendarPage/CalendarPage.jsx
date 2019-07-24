import React from 'react'
import PropTypes from 'prop-types'
import Calendar from "../Calendar/Calendarr";
import styles from "./CalendarPage.module.css";

const CalendarPage = ({ dates }) => {
  return (
    <div className={styles.container}>
      {/* This is the calendar page */}
      <Calendar dates={dates} />
    </div>
  )
}

CalendarPage.propTypes = {
  dates: PropTypes.array.isRequired
}

export default CalendarPage
