import * as React from "react";
import * as ReactDOM from "react-dom";
import {questions} from "./components/questions";
import {answers} from "./components/answers";
import {Deck} from "./components/cards";

ReactDOM.render(
    <div>
        <Deck allCards={questions} className="question"/>
        <Deck allCards={answers} className="answer"/>
    </div>
    ,
    document.getElementById('content')
);
