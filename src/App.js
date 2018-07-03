// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Users from './users/Users';
//
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello World
//                     <Users title="Users List"/>
//                 </h1>
//
//             </div>
//         );
//     }
// }
//
// export default App;

// import React, { Component } from 'react';
// import './App.css';
//
// class App extends Component{
//     state = {
//         name:'Tom'
//     }
//     changeName = (newName) => {
//         this.setState({
//             name:newName
//         })
//     }
//
//     changeNameFromInput = (event) => {
//         this.setState({
//             name:event.target.value
//         })
//     }
//
//     render(){
//         return (
//             <div className="App">
//                 <br/>
//                 <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
//                 <br/>
//                 <button onClick={()=>this.changeName('Jerry1')}>Change Using Bind</button>
//                 <br/><br/><br/>
//                 <div>{this.state.name}</div>
//             </div>
//         );
//     }
//
// }
//
// export default App;

import React, { Component, PureComponent } from 'react';
import './App.css';

const Temp = (props) => {
    console.log('render Temp');
    return (<div>{props.val}</div>)
}

class App extends PureComponent{
    state = {
        val: 1
    }

    componentDidMount(){
        setInterval(() => {
            this.setState(() => {
                return { val: Math.random() }
            });
        }, 2000)
    }

    render(){
        console.log('render App');
        return (
            <div>
                <Temp val={ this.state.val }/>
            </div>
        );
    }

}

export default App;
