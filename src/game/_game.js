import React, {Component} from "react";
import './_game.scss'
import Game_In from "../game_in/_game_in";

class Game extends Component {
    componentDidMount() {

        //restart
        document.querySelector('.restart').addEventListener('click', function () {
            window.location.reload()
        });

    }

    render() {
        return (
            <div className='game'>
                <Game_In/>
                <div className="end">
                    <p>thanks for your time</p>
                    <button className="restart">restart</button>
                </div>
            </div>
        )
    }
}

export default Game;

