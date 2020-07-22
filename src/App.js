import React, { useState, useEffect } from 'react';
import * as moment from 'moment';

import './App.css';
import UserList from './Components/UserList/UserList';
import Popup from './Components/Popup/Popup';

function App() {
  const apiUrl = "http://localhost:3000/members";
  const [state, setState] = useState({
    users: [],
    selected: {},
    date: moment().format("YYYY-MM-DD"),
    userActivity: []
  });

  useEffect(() => {
    // console.log(moment.format("20-01-2020"))
    fetch(apiUrl)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        let users = data;
        setState(prevState => {
          return { ...prevState, users: users }
        });
      })

  }, [])

  const openPopup = id => {
    console.log(id);
    fetch(apiUrl + "/" + id).then(res => res.json())
      .then((data) => {
        let result = data;
        let date = moment(state.date).format("MMM D YYYY")
        console.log(result, date);
        if (result.activity_periods.length > 0) {
          let userActivity = result.activity_periods.filter(data => data.start_time.includes(date) === true)
          console.log(userActivity);
          setState(prevState => {
            return { ...prevState, userActivity: userActivity, }
          })
        }
        setState(prevState => {
          return { ...prevState, selected: result, }
        })

      });
  };
  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {}, date: moment().format("YYYY-MM-DD"), }
    });
  }
  const selectDate = (e) => {
    console.log(e.target.value)
    let d = moment(e.target.value).format("MMM D YYYY");
    setState(prevState => {
      return { ...prevState, date: moment(d).format("YYYY-MM-DD") }
    });
    console.log(d);

    if (state.selected !== undefined) {
      let selected = { ...state.selected };
      console.log(selected);
      let result = selected.activity_periods.filter(data =>
        data.start_time.includes(d) === true
      )
      setState(prevState => {
        return { ...prevState, userActivity: result, }
      })
      console.log(result);
      if (result.length > 0) {
        let selectedDateAndTime = getDateAndTime(result[0].start_time);
        let selectedDate = selectedDateAndTime[0];
        let selectedTime = selectedDateAndTime[1];
        console.log(selectedDate, "nnn", selectedTime);
      }

    }
  }

  return (
    <div className="App">
      <header>
        <h1>User Activity</h1>
      </header>
      <main>
        <UserList users={state.users}
          openPopup={openPopup} />
        {(typeof state.selected.id != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} submit={selectDate} userActivity={state.userActivity} date={state.date} /> : false}
      </main>
    </div>
  );
}

export default App;

function getDateAndTime(str) {
  console.log(str.split("  "));
  let dateAndTime = str.split("  ");
  return dateAndTime;
}