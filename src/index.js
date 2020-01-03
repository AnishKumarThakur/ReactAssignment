import React from 'react';
import ReactDOM from 'react-dom';

const text = ' set ';
const element = <h1>This is how {text} is displayed in my content.</h1>

ReactDOM.render(element, document.getElementById('head'));


function Button(properties){
    return <button type="submit">{properties.label}</button>
}

ReactDOM.render(<Button label="Insert" />, document.getElementById('binsert'));

ReactDOM.render(<Button label="Delete" />,document.getElementById('bdelete'));

ReactDOM.render(<Button label="Update" />,document.getElementById('bupdate'));