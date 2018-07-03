import React, { Component } from 'react';
import './App.css';

class App extends Component{
    state = {
        name:'Tom'
    }
    changeName = (newName) => {
        this.setState({
            name:newName
        })
    }

    changeNameFromInput = (event) => {
        this.setState({
            name:event.target.value
        })
    }

    render(){
        return (
            <div className="App">
                <br/>
                <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
                <br/>
                <button onClick={()=>this.changeName('Jerry1')}>Change Using Bind</button>
                <br/><br/><br/>
                <div>{this.state.name}</div>
            </div>
        );
    }

}

export default App;