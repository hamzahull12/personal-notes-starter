import React from 'react';

const NoteSearch = ({search, onSearchChange}) => {
    return (
        <div className='note-search'>
            <input type="text" placeholder='Cari Catatan...' value={search} onChange={onSearchChange} />
        </div>
    );
}
export default NoteSearch;