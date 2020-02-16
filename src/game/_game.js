import React, {Component} from "react";
import './_game.scss'
import Game_In from "../game_in/_game_in";
import rotate from "../images/phone_rotate.png"

class Game extends Component {
    componentDidMount() {

        const game_width = document.querySelector('.game').offsetWidth;
        const rotate = document.querySelector('.width_control');

        //restart
        document.querySelector('.restart').addEventListener('click', function () {
            window.location.reload()
        });

        //width control
        function control() {
            if(game_width < 450){
                rotate.style.visibility = 'visible'
            }
        }
        control()
    }

    render() {
        return (
            <div className='game'>
                <Game_In/>
                <div className="end">
                    <p>thanks for your time</p>
                    <button className="restart">restart</button>
                </div>
                <div className="width_control">
                <p>
                    rotate
                </p>
                    <img src={rotate} alt="rotate"/>
                </div>
            </div>
        )
    }
}

export default Game;

