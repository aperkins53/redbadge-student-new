//Create a class component based on the functionalProps.jsx file
//Keep the usage of destructuring props in this challenge.

import React, { Component } from 'react';
import { Alert, Container } from 'reactstrap';

class ClassComponentProps extends Component {
    displayAlerts(){
    const { numbers } = this.props;
    return numbers.map((num, index)=> 
    <Alert key={index} color={num % 2 === 0 ? "success" : "danger"}>
                The number is {num}{' '}
            </Alert>
        );
    }
        
    render(){
        return(
            <Container>
                <h3>From the Function Component</h3>
                {this.displayAlerts()}
            </Container>
        )
    }
}

export default ClassComponentProps;