import React, { Component } from "react";


export default class ExplanationUI extends Component{
    render(){
        return (
            <div>
                <h1> {this.props.topic} </h1>
                <p> {this.props.model_description} </p>
                <div className="explanation" >
                    {this.props.explanation}
                </div> 
            </div>
        )
    }
}