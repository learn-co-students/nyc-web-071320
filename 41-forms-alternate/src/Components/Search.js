import React from 'react'

class Search extends React.Component {

    state = {
        searchTerm: "",
        filterType: "name"
    }

    changeHandler = (e) => {
        e.persist()
        this.setState(() => ({
            searchTerm: e.target.value
        }))
    }

    selectChangeHandler = (e) => {
        this.setState({ filterType: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    // renderOptions=()=>{
    //  return typesArray.map(el => <option value={el}>Search by {el}</option>)
    // }
    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" value={this.state.searchTerm} onChange={this.changeHandler} />
                <select onChange={this.selectChangeHandler}>
                    {/* {this.renderOptions()} */}
                    <option value="name">Search by Name</option>
                    <option value="breed">Search by Breed</option>
                </select>
                <button>Submit</button>
            </form>
        )
    }
}

export default Search