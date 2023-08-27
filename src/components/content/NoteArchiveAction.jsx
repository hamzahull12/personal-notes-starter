import React from 'react';

const NoteArchiveAction = ({id, onArchive, isArchive}) => {
    return (
        <button className='note-item__archive-button' 
        onClick={()=> onArchive(id)}>
        {isArchive ? "succeed move to ": "archive"}    
        </button>
    );
}

export default NoteArchiveAction;