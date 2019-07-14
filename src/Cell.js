class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  cell = () => {
    const newColor = "#333"
    this.setState({
      color: newColor
    })
  }

  render () {
    return (
      <div class="cell" onClick={this.cell}></div>
      // style={{backgroundColor: newColor}}
    )
  }

}
