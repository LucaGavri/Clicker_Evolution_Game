import React, {Component} from "react";
import './_game_in.scss'
import Story from '../story/_story';
import Era from '../era/_era';
import Counter from '../counter/_counter';
import Tap from '../tap/_tap';
import Era_Switcher from '../era_switcher/_era_switcher'

class Game_In extends Component {
    componentDidMount() {

        document.querySelector('.instructions_left_next').addEventListener('click', function (e) {
            (e).preventDefault();
            document.querySelector('.instructions_left').style.display = 'none';
            document.querySelector('.instructions_right').style.display = 'flex';
        });


    }

    render() {
        return (
            <div className="game_out">
                <div className='game_in'>
                    <div className="instructions_left">
                        <p>
                            Tap on IMAGE to make POINTS
                        </p>
                        <div className="instructions_left_next">
                            next >>
                        </div>
                    </div>
                    <div className="instructions_right">
                        <div className="instructions_right_story">
                            <div className="instructions_right_story_txt">
                                <i className="fas fa-arrow-left"></i>
                                <p>
                                    When you collect enough points - you can unlock next element in story
                                </p>
                            </div>
                            <div className="instructions_right_story_next">
                                next >>
                            </div>
                        </div>
                        <div className="instructions_right_era">
                            <div className="instructions_right_era_txt">
                                <i className="fas fa-arrow-left"></i>
                                <p>
                                    When you unlock all story's elements - you can unlock next era
                                </p>
                            </div>
                            <div className="instructions_right_era_next">
                                play
                            </div>
                        </div>
                    </div>
                    <div className="title_story">
                        <div className="title">
                            <p className="title_main">Evolution Game</p>
                            <p className="title_foot">&copy; 2020, Made by <a
                                href="mailto:lukaszgawrys13@gmail.com">LucaGavri</a></p>
                        </div>
                        <Era_Switcher/>
                        <Story/>
                    </div>
                    <div className="era_counter_tap">
                        <Counter/>
                        <Era/>
                        <Tap/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game_In;

