import React from 'react';
import NoteItem from './NoteItem';

const NoteItemList = ({notes, onArchive, isArchive, onDelete, inputSearch }) => {
    return(
        <div className='notes-list'>
            {notes.map((note) => (
                <NoteItem 
                key={note.id}
                id={note.id}
                onArchive={onArchive}
                isArchive={isArchive}
                onDelete={onDelete}
                inputSearch={inputSearch}
                {...note} 
                />
            )
        )}
        </div>
    );
}

export default NoteItemList;