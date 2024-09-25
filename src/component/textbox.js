import React, { Component } from 'react'
import './Comp.css'
import  Btn from './btn'
import {evaluate} from 'mathjs'
import Heading from './heading';

 class Textbox extends Component {
    constructor(props) {
      super(props)
        this.Inputref=React.createRef();
      this.state = {
         input:''
      }
    }
    inputbtn =(n) =>{
        this.setState((prevSate)=>({input:prevSate.input+n}))
    }
    calculate =()=>{
        const result =evaluate(this.state.input)
        this.setState(()=>({
            input:result.toString()
        }))
    }
  render() {
    return (
      <div className="cal">
         <Heading/>
        <input type="text" value={this.state.input} id='inputbox' readOnly/>
        < Btn number='1'onClick={()=>{this.inputbtn('1')}}/>
    < Btn number='2' onClick={()=>{this.inputbtn('2')}}/>
    < Btn number='3' onClick={()=>{this.inputbtn('3')}}/>
    < Btn number='4'onClick={()=>{this.inputbtn('4')}}/>
    < Btn number='5' onClick={()=>{this.inputbtn('5')}}/>
    < Btn number='6' onClick={()=>{this.inputbtn('6')}}/>
    < Btn number='7' onClick={()=>{this.inputbtn('7')}}/>
    < Btn number='8' onClick={()=>{this.inputbtn('8')}}/>
    < Btn number='9' onClick={()=>{this.inputbtn('9')}}/>
    < Btn number='0'onClick={()=>{this.inputbtn('0')}}/>
    < Btn number='+' onClick={()=>{this.inputbtn('+')}}/>
    < Btn number='-'onClick={()=>{this.inputbtn('-')}} />
    < Btn number='*' onClick={()=>{this.inputbtn('*')}}/>
    < Btn number='/' onClick={()=>{this.inputbtn('/')}}/>
    < Btn number='=' onClick={()=>{ this.calculate()}}/>
      </div>
    )
  }
}

export default Textbox