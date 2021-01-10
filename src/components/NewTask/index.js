import './NewTask.css';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";


const NewTask = (props) => {

    const { isToDoItem, nameTask } = props;
    const [piority, setPiority] = useState('Normal');
    const [value, setValue] = useState();
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (event) => {
        setPiority(event.target.value);
    };

    const onChange = e => {
        const { value } = e.target;
        setValue(_value => (value));
    };

    const renderTitle = () => {
        console.log('isToDoItem', isToDoItem);
        if (isToDoItem) {
            return <>
                <Typography className="text-new-task">New Task</Typography>
                <TextField className="add-new" id="outlined-basic" placeholder="Add new task..."
                           variant="outlined" onChange={onChange}/>
            </>;
        } else return <TextField className="add-new" id="outlined-basic" value={value}
                                 variant="outlined" defaultValue={nameTask} />;
    };

    return (
        <div className="container">
            {renderTitle()}
            <div className="description">
                <Typography>Description</Typography>
                <textarea className="text-description"/>
            </div>
            <div className="option">
                <div>
                    <Typography>Due Date</Typography>
                    <DatePicker
                        selected={startDate} onChange={date => setStartDate(date)}
                    />
                </div>
                <div>
                    <Typography>Piority</Typography>
                    <FormControl variant="outlined" size="large" className="piority">
                        <Select
                            value={piority}
                            onChange={handleChange}
                        >
                            <MenuItem value={'Low'}>Low</MenuItem>
                            <MenuItem value={'Normal'}>Normal</MenuItem>
                            <MenuItem value={'High'}>High</MenuItem>
                        </Select>
                    </FormControl>
                </div>


            </div>
            <Button variant="outlined" id="btn-add">{isToDoItem ? 'Add' : 'Update'}</Button>

        </div>
    );
};

NewTask.propTypes = {
    isToDoItem: PropTypes.bool.isRequired,
    nameTask: PropTypes.string,

};

export default NewTask;
