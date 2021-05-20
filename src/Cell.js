import React from 'react'

class Cell extends React.Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    handleClick = (event) =>{
        this.setState( { color: "#333" })
    }

    render(){
            {console.log(this.props.vals)}
        return(
                <div style={{backgroundColor: this.state.color}} onClick={this.handleClick} key="color" className="cell">"sup"</div>
        )
    }
}

export default Cell
