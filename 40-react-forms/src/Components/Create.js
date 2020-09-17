import React from 'react'

class Create extends React.Component {

    state = {
        id: 20,
        name: "",
        img: "",
        breed: ""
    }

    changeHandler = (e) => {
        e.persist()
        // functional setState
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
        // this.setState({ [e.target.name]: e.target.value })
    }


    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({
            name: "",
            img: "",
            breed: ""
        })
    }
    render() {
        return (

            <form onSubmit={this.submitHandler}>
                <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
                <input type="text" name="img" value={this.state.img} onChange={this.changeHandler} />
                <input type="text" name="breed" value={this.state.breed} onChange={this.changeHandler} />
                <button>Submit</button>
            </form>
        )
    }
}

export default Create