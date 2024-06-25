// style
import "./NewEventList.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function NewEventList({ setShowModal, newEvent }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    

    const resetInput = () => {
        setDate("");
        setTitle("");
    };

    const handelSubmit = (e) =>{
        e.preventDefault()
        const event = {
            title: title,
            date: date,
            id: uuidv4()
        }
        newEvent(event);
        resetInput()
    }

    return (
        <div className="new_event">
            <form onSubmit={handelSubmit}>
                <label>
                    <span>Event title</span>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        value={title}
                    />
                </label>

                <label>
                    <span>Event data</span>
                    <input
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                    />
                </label>

                <p> Title {title}</p>
                <p> Date {date}</p>

                <button>Submit</button>
                <button onClick={() => setShowModal(false)}> Close</button>
            </form>
        </div>
    );
}

export default NewEventList;
