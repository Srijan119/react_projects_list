import React,{ Component } from 'react'

export class Welcome extends Component{
    render(){
        
        const{name,alias}=this.props
        return(
        <div>
        <h1>welcome  mr {name} and your alias is {alias} </h1></div>

        )
    }
}

export default Welcome