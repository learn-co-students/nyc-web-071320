import React from 'react'

function Search(props) {
    return (
        <div>
            <input type="text" value={props.value} onChange={props.changeHandler} />
        </div>
    )
}

export default Search