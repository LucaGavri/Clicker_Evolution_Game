import React, {Component} from "react";
import './_story_future.scss'
import story25 from '../../images/28_firstcontact.jpg'
import story26 from '../../images/29_milkyway.jpg'
import story27 from '../../images/30_galacticgroup.jpg'
import story28 from '../../images/31_virgo.jpg'
import story29 from '../../images/32_universe.jpg'



class Story_Future extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="story_future">
                <div className="story25 story_style">
                    <img src={story25} alt="firstcontact"/>
                    <p className="locked">locked</p>
                    <p className="unlocked">unlocked</p>
                </div>
                <div className="story26 story_style">
                    <img src={story26} alt="milkyway"/>
                    <p className="locked">locked</p>
                    <p className="unlocked">unlocked</p>
                </div>
                <div className="story27 story_style">
                    <img src={story27} alt="galacticgroup"/>
                    <p className="locked">locked</p>
                    <p className="unlocked">unlocked</p>
                </div>
                <div className="story28 story_style">
                    <img src={story28} alt="virgo"/>
                    <p className="locked">locked</p>
                    <p className="unlocked">unlocked</p>
                </div>
                <div className="story29 story_style">
                    <img src={story29} alt="universe"/>
                    <p className="locked">locked</p>
                    <p className="unlocked">unlocked</p>
                </div>
                <div className="story30 story_style">
                    <img src={story29} alt="multiverse"/>
                    <p className="locked">locked</p>
                    <p className="unlocked">unlocked</p>
                </div>
            </div>
        )
    }
}

export default Story_Future;
