import React from 'react';


class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: this.props.value};


    } 

    handleClick = () => {
        let newColor = "#333"
        this.setState({
            color: newColor
        })
    }

    render() {
      return <div className = "cell" style={{backgroundColor: this.state.color}} onClick = {this.handleClick} >  </div>;
    }

}

export default Cell
  