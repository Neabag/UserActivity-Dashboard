import React from 'react'
import * as moment from 'moment';

import './Popup.css';

export default function Popup(props) {

    return (
        <section className="Popup">
            <div className="content" >
                <h3>{props.selected.real_name}'s Activity</h3>

                <span>Date: </span><input type="date" id="day" name="day" value={props.date} onChange={props.submit} />

                {(props.userActivity.length > 0) ? <div><span className="startTime">Start Time: {getTime(props.userActivity[0].start_time)}</span>
                    <span className="endTime">End Time: {getTime(props.userActivity[0].end_time)}</span></div> : <div className="noActivity">No Activity for {(props.date === moment().format("YYYY-MM-DD")) ? "today" : "this date"}, Please choose another date and try again!!!</div>}
                <button className="close" onClick={props.closePopup}>Close</button>
            </div>
        </section>
    )
}

function getTime(str) {
    console.log(str.split("  "));
    let time = str.split("  ");
    return time[1]
}

