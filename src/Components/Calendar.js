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
    
    
        convertDate = (date) => {
          return moment.utc(date).toDate() 
        }
    

    componentDidMount() {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        
        .then(jsondata => {

            let calEvents = jsondata.content

            for (let i = 0; i < calEvents.length; i++) {
              let startDate = this.convertDate(calEvents[i].date)
              let start = moment(startDate).subtract(3, 'hours')
              let end = moment(start).add(calEvents[i].duration, 'm')
              
             
                let items = {
                title: calEvents[i].activity,
                start: new Date(start),
                end: new Date(end) 
              }     
        
          
          this.setState({
          cal_events: [...this.state.cal_events, items] 
           
            })

          
          }


        })
        .catch(err => console.error(err));
           
    }
    
    render() {
      
      
        
       const {cal_events} = this.state
          
       console.log(cal_events)
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
