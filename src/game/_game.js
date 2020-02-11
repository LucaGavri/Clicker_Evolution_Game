import React, {Component} from "react";
import './_game.scss'
import Game_In from "../game_in/_game_in";

class Game extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className='game'>
                <Game_In/>
            </div>
        )
    }
}

export default Game;

