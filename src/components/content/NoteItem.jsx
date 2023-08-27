import React from 'react';
import NoteContent from './NoteContent';
import NoteDeleteAction from './NoteDeleteAction';
import NoteArchiveAction from './NoteArchiveAction';
import { showFormattedDate } from '../../utils';


const NoteItem = ({body, title, createdAt, id, onDelete, onArchive, isArchive }) => {
    const formatDate = showFormattedDate(createdAt);
    return (
        <div className='note-item'>
            <NoteContent title={title} date={formatDate} body={body}/>
            <div className='note-item__action'>
                <NoteDeleteAction id={id} onDelete={onDelete}/>
                <NoteArchiveAction id={id} onArchive={onArchive} isArchive={isArchive}/>
            </div>
        </div>
    );
}

export default NoteItem;