import React from 'react'

class Btn  extends React.Component{
    render(){
        return(
            <button id='btn' onClick={this.props.onClick}>{this.props.number}</button>
        )
    }
}
export default Btn