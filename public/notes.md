Tests Passed (10):

  <Matrix />
    ✓ uses a default 'values' prop of an array with 10 items
    ✓ each sub-array of the default 'values' prop is an array
    ✓ each sub-array of the default values prop is filled with 10 hex color string equal to: '#F00'

  <Cell />
    ✓ is a correctly defined and exported React component which renders a <div> with a className of 'cell'
    ✓ has a state key of 'color'
    ✓ state.color is initially set to the 'value' prop passed from Matrix
    ✓ has an event listener for clicks on the <div> (don't forget: 'onClick' in React!)
    ✓ has an event listener that, when clicked, calls this.setState() once (make sure you aren't setting state directly, but instead using the component's 'setState' method)
    ✓ has an event listener that, when clicked, sets state's 'color' key to a value of '#333'
    ✓ sets the <div>'s inline style attribute to 'style={{backgroundColor: this.state.color}}'
 
*Goals*:
    -render a matrix/grid. 
    -Each square will have a background color. 
    -the square will change color when clicked.
    
    Our component tree:
    -a Matrix which renders many Cells/squares. 
    -finish implementing Matrix so that it renders the appropriate amount of cells, with the appropriate amount of values.

*Deliverables*:
*Matrix*:
Expectations:
    -Matrix should use its prop, values, to determine its cell colors. 
    -This is a 10 x 10 array (10 rows, with 10 values in each row). 
    -Because we are responsible React developers, have a default grid in case no values prop is passed.

1) Make a default values prop for Matrix, which is a 10x10 array filled with the values '#F00' (red). 
For inspiration, take a look at src/data.js.

2) Replace the return value in genRow's map to: <Cell value={val} />. 
    Here we are specifying our Cell component should have a value prop.

*Cell*:
1) Create a new component in src/ called Cell. 
    -The Cell component will give us our first chance to use state. 
    -We want each Cell to keep track of a single state value: color, (which will be a 3 digit hex value i.e. '#FFF').

2) Define a constructor method in Cell, which sets an initial state key of color to the value prop which is passed from its parent component. 
    -Remember to call super() on the first line of the constructor (this is required in React components if we are to use this.state in the constructor). 
    -Ultimately, our constructor should look something like this:

            constructor(props) {
              super()
              this.state = {} // ...define initial state with a key of 'color' set to the 'value' prop
            }

3) Cell should render a single <div> with a className of cell

4) In render, the cell should set the background color in-line for the <div> by adding the following attribute: style={{backgroundColor: '#FFF'}} ('#FFF' is just used as an example value here - the value should be state's color)

5) Create a click listener which, when activated, updates the state to the following hex value: '#333'

6) Once Finished
    -npm start and assert the following:
        -The application displays 100 cells in a 10x10 format
        -If no values prop is passed to Matrix in src/index.js, then all the cells are red
        -If pattern1 is passed to Matrix in src/index.js, then the cells are alternating red-blue
        -When you click on any given cell, that cell's color changes to dark gray