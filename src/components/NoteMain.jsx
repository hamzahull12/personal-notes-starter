import React from "react";
import { getInitialData } from "../utils/index";
import NoteNav from "./header/NoteNav";
import NoteForm from "./form/NoteForm";
import NoteItemList from "./content/NoteItemList";

class NoteMain extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            search: "",
        };
        
        this.onAddHandler = this.onAddHandler.bind(this);
        this.onDeletehandler = this.onDeletehandler.bind(this);
        this.onArchivehandler = this.onArchivehandler.bind(this);
        this.onNoteSearchHandler = this.onNoteSearchHandler.bind(this);
    }

    onDeletehandler(id) {
        const datanotes = this.state.notes.filter((note)=> note.id !== id);
        this.setState({notes: datanotes});
    }
    onAddHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: +new Date(),
                        archived: false,

                    },
                ],
            };
        });
    }
    onArchivehandler(id) {
        const notes = this.state.notes.map((note) =>(note.id === id ? {...note, archived: !note.archived} : note));
        this.setState({notes});
    }

    onNoteSearchHandler(event) {
        this.setState(() => {
            return {
                search: event.target.value,
            };
        });
    }

    render() {
        const search = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLocaleLowerCase()));
        const unactived = search.filter((note) => {
            return note.archived === false;
        });
        const actived = search.filter((note) => {
            return note.archived === true;
        });
        return(
            <div>
                <NoteNav search={this.state.search} onSearchChange={this.onNoteSearchHandler}/>
                <div className="note-app__body">
                    <NoteForm addNotes={this.onAddHandler}/>
                    <h2>Catatan</h2>
                    {unactived.length > 0 ? <NoteItemList inputSearch={this.state.search} notes={unactived}  onDelete={this.onDeletehandler} onArchive={this.onArchivehandler} /> : <h1 className="notes-list__empty-message">Tidak ada Catatan</h1>}
                    <h2>Arsip</h2>
                    {actived.length > 0 ? <NoteItemList inputSearch={this.state.search} notes={actived} onDelete={this.onDeletehandler} onArchive={this.onArchivehandler} /> : <h1 className="notes-list__empty-message">Tidak ada Catatan</h1>}
                </div>
            </div>
        );
    }
}

export default NoteMain;