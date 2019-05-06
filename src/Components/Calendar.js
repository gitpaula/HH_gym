import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('fi');
const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {cal_events: [] }
    }
    
    componentDidMount() {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        //.then (jsondata => this.setState({customers: jsondata.content}))
        
        .then(jsondata => {
            console.log(jsondata);
            let appointments = jsondata.content;
            
            for (let i = 0; i < appointments.length; i++) {
              appointments[i].content.date = moment.utc(appointments[i].content.date).toDate();

              
            }
            this.setState({
              cal_events:appointments
            })
      
          })
        .catch(err => console.error(err));
        }    

    
    render() {
        
        const {cal_events} = this.state
        
        return (
            
        <div style={{ height: 700 }}>
          <BigCalendar
            localizer={localizer}
            events={cal_events}
            step={30}
            defaultView='week'
            views={['month','week','day']}
            defaultDate={new Date()}
          />

            </div>
        );
    }
}

export default Calendar;