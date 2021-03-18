import React, { useContext } from 'react'
import { CalendarDate, CaretUp } from 'react-bootstrap-icons'
import { calendarItems } from '../constants'
import { TodoContext } from '../context'

function Calendar(){
    // CONTEXT
    const { setSelectedProject } = useContext(TodoContext)
        
    return (
        <div className='Calendar'>
            <div className="header">
                <div className="title">
                    <CalendarDate size="18"/>
                    <p>Calendar</p>
                </div>
                <div className="btns">
                    <span>
                        <CaretUp size="20" />
                    </span>
                </div>
            </div>
            <div className="items">
                {
                    calendarItems.map( item => 
                        <div
                            className="item"
                            key={item}
                            onClick={ () => setSelectedProject(item)}
                        >
                            {item}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Calendar