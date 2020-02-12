import React, {Component} from "react";
import './_story_old_age.scss'
import story13 from '../../images/15_mesopotamia.jpg'
import story14 from '../../images/16_egypt.jpg'
import story15 from '../../images/17_greece.jpg'
import story16 from '../../images/18_rome.jpg'
import story17 from '../../images/19_middleages.jpg'
import story18 from '../../images/20_newages.jpeg'


class Story_Old_Age extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="story_old_age_all">
                <div className="story_old_age_not">
                    <p>you must unlock previous stages</p>
                </div>
                <div className="story_old_age">
                    <div className="story13 story_style">
                        <img src={story13} alt="mesopotamia"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story14 story_style">
                        <img src={story14} alt="egypt"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story15 story_style">
                        <img src={story15} alt="greece"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story16 story_style">
                        <img src={story16} alt="rome"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story17 story_style">
                        <img src={story17} alt="middleages"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story18 story_style">
                        <img src={story18} alt="newages"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Story_Old_Age;
