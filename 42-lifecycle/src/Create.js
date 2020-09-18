import React from 'react'

class Create extends React.Component {
    state = {
        name: "",
        img: "",
        favorite: false,
        num_of_clicks: 0
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({
            name: "",
            img: "",
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
                <input type="text" name="img" value={this.state.img} onChange={this.changeHandler} />
                <button>Submit</button>
            </form>
        )
    }
}

export default Create