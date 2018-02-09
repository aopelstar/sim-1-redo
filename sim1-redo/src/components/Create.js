import React, { Component } from 'react';
import axios from 'axios';


export default class Create extends Component{
    constructor(){
        super();
        this.state={
            name: "",
            price: 0

        }
{/*37J */}     this.submit = this.submit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    

    submit(){
        let body ={
            name: this.state.name,
            price: this.state.price
        }
        let promise = axios.post("/api/whatevs", body)
        promise.then(this.props.history.push('/bin/'+this.props.match.params))

    }

    changeHandler(key, val){
        this.setState({
            [key]: val
        })
    }

    render(){
        return(
            <div>
       {/*36J */} <input onChange={(event)=> this.changeHandler("name", event.target.value, )}/>
                <input onChange={(event)=> this.changeHandler("price", event.target.value, )}/>
                <button onClick={ () => this.submit()}>submit</button>
            </div>
        )
    }
}