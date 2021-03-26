import React, { Component } from 'react';
import { isThisTypeNode } from 'typescript';

class ClassDeckFetch extends Component {
    constructor(props){
        super(props);
        this.state = { deckID: '', image: '', secondImage: ''}
    }

    fetchDeck = () => {
        const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({deckID: json.deck_id}));
    }

    fetchCard = () => {
        const url =  `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=2`;

        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({image: json.cards[0].image}));

        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({secondImage: json.cards[1].image}));
    }

    componentDidMount() {
        this.fetchDeck();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.deckID !== this.state.deckID){
            this.fetchCard();
        }
    }

    render(){
        return(
            <div>
                Hello from ClassDeckFetch
                <br />
                <img src={this.state.image}></img>
                <img src={this.state.secondImage}></img>
            </div>
        )
    }
}

export default ClassDeckFetch;