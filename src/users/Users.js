import React, { Component } from 'react';
import User from './User';

class Users extends Component{
    state = {
        users: [
            {name:"Tom",age: 20},
            {name:"Jerry", age: 30}
        ],
        title:"User List"
    }
    changeAge = () =>{
        const newState = this.state.users.map((user)=>{
            const tempUser = user;
            tempUser.age -= 10;
            return tempUser;
        });
        this.setState({
            newState
        });
    }

    render(){
        return(<div>
            <button onClick={this.changeAge}> Make Us 10 years younger</button>
            <br/>
            <h1>{this.state.title}</h1>
            {
                this.state.users.map((user)=>{
                    return <User name = {user.name} age={user.age}> {user.age} </User>
                })
            }
        </div>)
    }
}

export default Users;