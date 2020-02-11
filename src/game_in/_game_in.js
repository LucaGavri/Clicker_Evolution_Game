import React, {Component} from "react";
import './_game_in.scss'
import Story from '../story/_story';
import Era from '../era/_era';
import Counter from '../counter/_counter';
import Tap from '../tap/_tap';

class Game_In extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className='game_in'>
                <div className="title_story">
                    <div className="title">
                        Evolution Game
                    </div>
                    <Story/>
                </div>
                <div className="era_counter_tap">
                    <div className="era_counter">
                        <Era/>
                        <Counter/>
                    </div>
                    <Tap/>
                </div>
            </div>
        )
    }
}

export default Game_In;

