import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Bins extends Component{
    constructor(){
        super();
        this.state= {
            bin1: "",
            bin2: "",
            bin3: "",
            bin4: "",
            bin5: "",


        }
    }

/*44E */ componentDidMount(){
    /*44C*/ let promise = axios.get('/api/music')
    /*44D */ promise.then(response => {
    /*36D */  this.setState({  
                bin1: response.data.bin1,
                bin2: response.data.bin2,
                bin3: response.data.bin3,
                bin4: response.data.bin4,
                bin5: response.data.bin5,


            })
        })
    }



    render(){
        return(
            <div>{!this.state.bin1 ? <Link to = '/create/a1' ><div>+ Add inventory to bin</div></Link>
                    : <Link to = '/bin/a1'><div>Bin 1</div></Link>}
                <Link to = '/bin/a2' ><div>+ Add inventory to bin</div></Link>
                <Link to = '/bin/a3' ><div>+ Add inventory to bin</div></Link>
                <Link to = '/bin/a4' ><div>+ Add inventory to bin</div></Link>
                <Link to = '/bin/a5' ><div>+ Add inventory to bin</div></Link>
                </div>
        )
    }
}