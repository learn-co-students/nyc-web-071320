import React from 'react'
import Note from './Note'
class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    notes = () => {
        return this.apiResponse().map(element => <Note key={element} content={element} />)
    }

    render() {
        console.log("Notes Container function: ", this.apiResponse())
        let notes = this.apiResponse().map(element => <Note key={element} content={element} />)
        return (
            <ul> {notes} </ul >
        )
    }

}



export default NotesContainer
