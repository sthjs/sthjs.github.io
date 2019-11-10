import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class StartButton extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            prizeDoor: this.props.prizeDoor,
            id: '1',
            content: ''
        }

        this.state = this.initialState
    }

    handleClick = () => {
        if (Math.random() < 0.33) {
            console.log("Started1")
            this.setState({prizeDoor: 1})
        } else if (Math.random() < 0.66) {
            console.log("Started2")
            this.setState({prizeDoor: 2})
        } else {
            console.log("Started3")
            this.setState({prizeDoor: 3})
        }
        console.log('this is:', this, this.prizeDoor);
      }
    
      render() {
        return (
          <Button variant="contained" color="primary" onClick={this.handleClick}>
            Click me
          </Button>
        );
      }
}

export default StartButton;