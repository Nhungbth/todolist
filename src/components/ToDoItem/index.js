import './ToDoItem.css';
import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NewTask from '../NewTask';
import PropTypes from 'prop-types';

const ToDoItem = (props) => {
    const [checked, setChecked] = useState(false);
    const [isOpenDetail, setIsOpenDetail] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        props.isSelected(checked);
    };


    const handleDetail = () => {
        setIsOpenDetail(true);
    };

    const renderDetail = () => {
        if (isOpenDetail) {
            return <NewTask isToDoItem={false} nameTask={'Do homework'}/>;
        } else return null;
    };

    return (
        <div className="todo-item">
            <div className="box-todo">
                <div className="check-name">
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        color="default"
                    />
                    <Typography>Do homework</Typography>
                </div>
                <div className="btn">
                    <Button variant="outlined" id="btn-detail" onClick={handleDetail}>Detail</Button>
                    <Button variant="outlined" id="btn-remove">Remove</Button>

                </div>
            </div>
            {renderDetail()}
        </div>
    );
};

ToDoItem.propTypes = {
    isSelected: PropTypes.func.isRequired,

};

export default ToDoItem;
