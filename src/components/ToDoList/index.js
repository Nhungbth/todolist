import './ToDoList.css';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ToDoItem from '../ToDoItem';

const ToDoList = (props) => {

    const [selected, setSelected] = useState(true);

    const renderListTask = () => {
        return <div>
            <ToDoItem isSelected={isSelected}/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>

        </div>;
    };

    const renderFooter = () => {
        if (!selected) {
            return <div className="box-bulk">
                <Typography className="bulk-action">Bulk Action: </Typography>

                <div className="btn-bulk">
                    <Button variant="outlined" id="btn-done">Done</Button>
                    <Button variant="outlined" id="btn-remove-bulk">Remove</Button>

                </div>
            </div>;
        }else return null;
    };

    const isSelected = (checked) => {
        setSelected(checked);
    };
    return (
        <div>
            <div className="container">
                <Typography className="text-title">To Do List</Typography>
                <TextField className="search" id="outlined-basic" placeholder="Search..." variant="outlined"/>
                {renderListTask()}
            </div>
            {renderFooter()}
        </div>
    );
};

export default ToDoList;
