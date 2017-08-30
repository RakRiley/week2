import React from 'react';

class Calculator extends React.Component{
	constructor(){
		super();
		this.state={n1:"" , m1:""};
	}
	setage1(e){
    const age1 = e.target.value;
    this.setState({n1 : age1});
    }
	setage2(e){
    const age2 = e.target.value;
    this.setState({m1 : age2});
	}
	render(){
				return (
			<div>
			<h1>Test cccccccccc</h1>
			<h1>Test1 = {this.state.n1}</h1><input onChange={this.setage1.bind(this)}/>
			<h1>Test2 = {this.state.m1}</h1><input onChange={this.setage2.bind(this)}/>
			<h1>Test3 = {this.state.n1+this.state.m1}</h1>
			
			
			


			
			</div>
			);
	}
}
export default Calculator