import React, {Component} from "react";
import './_story_first_life.scss'
import story1 from '../../images/1_cell.jpg';
import story2 from '../../images/2_trilobite.jpg';
import story3 from '../../images/3_placoderm.jpg';
import story4 from '../../images/4_amphibian.jpg';
import story5 from '../../images/5_reptile.jpg';
import story6 from '../../images/7_dinosaur.jpg';

class Story_First_Life extends Component {
    componentDidMount() {
    }

    render() {
        return (
                <div className="story_first_life">
                    <div className="story1 story_style">
                        <img src={story1} alt="cell"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story2 story_style">
                        <img src={story2} alt="trilobyte"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story3 story_style">
                        <img src={story3} alt="placoderm"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story4 story_style">
                        <img src={story4} alt="amphibian"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story5 story_style">
                        <img src={story5} alt="reptile"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                    <div className="story6 story_style">
                        <img src={story6} alt="dinosaur"/>
                        <p className="locked">locked</p>
                        <p className="unlocked">unlocked</p>
                    </div>
                </div>
        )
    }
}

export default Story_First_Life;
