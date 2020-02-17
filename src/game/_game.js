import React, {Component} from "react";
import './_game.scss'
import Game_In from "../game_in/_game_in";
import rotate from "../images/phone_rotate.png"

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
                    <p className="end_txt">thanks for your time</p>
                    <button className="restart">restart</button>
                    <p className="footer">&copy;2020, Made by <a href="mailto:lukaszgawrys13@gmail.com">LucaGavri</a>.</p>
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

