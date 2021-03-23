import React, { Component } from 'react';

class PropsMapping extends Component {
    render(){
        const visitedPlaces = () => this.props.visited.map(place => <li>{place}</li>)
        return <div>{visitedPlaces()}</div>
    }
}

export default PropsMapping;