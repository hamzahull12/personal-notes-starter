import React from 'react';
import { showFormattedDate } from '../../utils';

const NoteContent = ({title, date, body}) =>{
    return (
        <div className="note-item__content">
            <h3 className='note_item__title'>{title}</h3>
            <p className='note-item__date'>{date}</p>
            <p className='note-tem__body'>{body}</p>
        </div>
    );
}

export default NoteContent;