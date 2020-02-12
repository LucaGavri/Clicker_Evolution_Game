import React, {Component} from "react";
import './_story_new_age.scss'
import story19 from '../../images/21_firstmachine.jpg'
import story20 from '../../images/23_now.jpg'
import story21 from '../../images/24_moonstation.jpg'
import story22 from '../../images/25_marsstation.jpg'
import story23 from '../../images/26_venusstation.png'
import story24 from '../../images/27_solarsystem.jpg'


class Story_New_Age extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="story_new_age_all">
                <div className="story_new_age_not">
                    <p>you must unlock previous stages</p>
                </div>
                <div className="story_new_age">
                    <div className="story19 story_style">
                        <img src={story19} alt="firstmachine"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story20 story_style">
                        <img src={story20} alt="now"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story21 story_style">
                        <img src={story21} alt="moonstation"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story22 story_style">
                        <img src={story22} alt="marsstation"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story23 story_style">
                        <img src={story23} alt="venusstation"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story24 story_style">
                        <img src={story24} alt="solarsystem"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Story_New_Age;
