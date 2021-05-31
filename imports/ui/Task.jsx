import React from 'react';
import moment from 'moment';
import 'moment/locale/de';

export const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
  return (
    <li>
      <label>
      <input
        type="checkbox"
        checked={!task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readOnly
      />
      <span className="text">{task.text}</span>
      <span className="date">{moment(task.createdAt).format('L')}</span>

      </label>
 
      <button onClick={() => onDeleteClick(task)}>&times;</button>



    </li>
  );
};
