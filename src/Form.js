import React, { Component } from 'react'



class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            iterations: 0,
            tactics: 'vaihda'
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const { value } = event.target
        this.setState({
            iterations: value
        })
    }

    selectChange = event => {
        const {value} = event.target
        this.setState({
            tactics: value
        })

    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { toistot } = this.state

        return (
            <form>
                <label>Toistojen lukumäärä:</label>
                <input 
                  type='text'
                  name='iterations'
                  value={toistot}
                  onChange={this.handleChange} />
                <label>Taktiikka:</label>
                <select name="tactics" onChange={this.selectChange}>
                    <option value="vaihda">Vaihda aina</option>
                    <option value="pysy">Älä koskaan vaihda</option>
                </select>
                <input type='button' value='Vahvista' onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form