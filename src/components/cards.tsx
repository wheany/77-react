import * as React from "react";
import * as _ from "lodash";

interface CardFrontProps {
    card: string,
    className: string
}

class CardFront extends React.Component<CardFrontProps, {}> {
    render() {
        return (
            <div className={this.props.className + " card"}>
                <img src={"img/hearts-" + this.props.className + ".svg"} className="heart"/>
                <img src={"img/clubs-" + this.props.className + ".svg"} className="club"/>
                {this.props.card}
                <img src={"img/spades-" + this.props.className + ".svg"} className="spade"/>
                <img src={"img/diamonds-" + this.props.className + ".svg"} className="diamond"/>
            </div>
        );
    }
}
interface CardBackProps {
    cardCount: number
    onShuffle(): void,
    onNext(): void
}
class CardBack extends React.Component<CardBackProps, {}> {
    render() {
        return (
            <div className="card-back">
                <span className="count">Kortteja jäljellä:{this.props.cardCount}</span>
                <span className="shuffle" onClick={this.props.onShuffle}>Sekoita kortit</span>
                <span className="next" onClick={this.props.onNext}>Seuraava kortti</span>
            </div>
        );
    }
}

interface DeckProps {
    allCards: string[]
    className: string
}
interface DeckState {
    currentDeck: string[]
    currentCard: string
}

export class Deck extends React.Component<DeckProps, DeckState> {
    constructor(props: DeckProps, context: any) {
        super(props, context);
        this.state = {
            currentDeck: [],
            currentCard: ""
        };
    }

    componentDidMount() {
        this.shuffle();
    }

    render() {
        return (
            <div className="deck">
                <CardFront className={this.props.className} card={this.state.currentCard}/><CardBack
                cardCount={this.state.currentDeck.length} onNext={this.nextCard} onShuffle={this.shuffle}/>
            </div>
        );
    }

    private nextCard = () => {
        const newDeck = this.state.currentDeck.slice(0);
        const newCard = newDeck.shift();

        this.setState({
            currentDeck: newDeck,
            currentCard: newCard
        });
    };
    private shuffle = () => {
        const newDeck = _.shuffle(this.props.allCards);
        const newCard = newDeck.shift();

        this.setState({
            currentDeck: newDeck,
            currentCard: newCard
        });
    }
}
