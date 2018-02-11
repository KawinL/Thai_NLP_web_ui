import React, { Component } from "react";
import '../index.css'

export default class ExplanationUI extends Component{
    render(){
        return (
            <div>
                <h1> {this.props.topic} </h1>
                <div className="explanation" >
                    {this.props.explanation}
                </div> 
            </div>
        )
    }
}