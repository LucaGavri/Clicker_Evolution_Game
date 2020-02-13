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
        const story1 = document.querySelector('.story1');
        const story2 = document.querySelector('.story2');
        const story3 = document.querySelector('.story3');
        const story4 = document.querySelector('.story4');
        const story5 = document.querySelector('.story5');
        const story6 = document.querySelector('.story6');

        //story1
        story1.addEventListener('click', function (e) {
            (e).preventDefault();
            story2.style.visibility = "inherit";
            story1.querySelector('.locked').style.display = "none";
            story1.querySelector('.unlocked').style.display = "block";
        });

        //story2
        story2.addEventListener('click', function (e) {
            (e).preventDefault();
            story3.style.visibility = "inherit";
            story2.querySelector('.locked').style.display = "none";
            story2.querySelector('.unlocked').style.display = "block";
        });

        //story3
        story3.addEventListener('click', function (e) {
            (e).preventDefault();
            story4.style.visibility = "inherit";
            story3.querySelector('.locked').style.display = "none";
            story3.querySelector('.unlocked').style.display = "block";
        });

        //story4
        story4.addEventListener('click', function (e) {
            (e).preventDefault();
            story5.style.visibility = "inherit";
            story4.querySelector('.locked').style.display = "none";
            story4.querySelector('.unlocked').style.display = "block";
        });

        //story5
        story5.addEventListener('click', function (e) {
            (e).preventDefault();
            story6.style.visibility = "inherit";
            story5.querySelector('.locked').style.display = "none";
            story5.querySelector('.unlocked').style.display = "block";
        });

        //story6
        story6.addEventListener('click', function (e) {
            (e).preventDefault();
            // story7.style.visibility="inherit";
            story6.querySelector('.locked').style.display = "none";
            story6.querySelector('.unlocked').style.display = "block";
            document.querySelector('.story_first_life_next').style.display = "flex";
            document.querySelector('.first_life_switcher_normal').style.display = "none";
            document.querySelector('.first_life_switcher_finished').style.display = "flex";
            document.querySelector('.mammals_switcher_locked').style.display = "none";
            document.querySelector('.mammals_switcher_normal').style.display = "flex";
        })
    }

    render() {
        return (
            <div className="story_first_life_all">
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
                <div className="story_first_life_next">
                    <p>congrats! go to next era</p>
                </div>
            </div>
        )
    }
}

export default Story_First_Life;
