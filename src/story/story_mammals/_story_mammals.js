import React, {Component} from "react";
import './_story_mammals.scss'
import story7 from '../../images/8_mousy.jpg';
import story8 from '../../images/9_australosfenid.jpg';
import story9 from '../../images/10_rhino.jpg';
import story10 from '../../images/11_chimpaneze.jpg';
import story11 from '../../images/12_australopithecus.jpg';
import story12 from '../../images/13_prehuman.jpg';

class Story_Mammals extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="story_mammals_all">
                <div className="story_mammals_not">
                    <p>you must unlock previous stages</p>
                </div>
                <div className="story_mammals">
                    <div className="story7 story_style">
                        <img src={story7} alt="mousy"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story8 story_style">
                        <img src={story8} alt="australosfenid"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story9 story_style">
                        <img src={story9} alt="rhino"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story10 story_style">
                        <img src={story10} alt="chimpaneze"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story11 story_style">
                        <img src={story11} alt="australopithecus"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story12 story_style">
                        <img src={story12} alt="prehuman"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Story_Mammals;
