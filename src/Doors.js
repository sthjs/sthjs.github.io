import React, { Component } from 'react'

class Doors extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            id: '1',
            content: ''
        }

        this.state = this.initialState
    }

    render() {
        const { id, content } = this.state

        return (
            <tbody>
                <tr>
                    <td><Door id="1" /></td>
                    <td><Door id="2" /></td>
                    <td><Door id="3" /></td>
                </tr>
            </tbody>
        )
    }
}

const Door = props => {
    const doorStyle = {
            borderRadius: "10px",
            height: 50,
            width: 50,
            color: "white",
            backgroundColor: "blue",
            border: "2px solid white",
            padding: "10px",
            textAlign: "center"
    }

    return <div style={doorStyle}>{props.id}</div>
}

export default Doors;