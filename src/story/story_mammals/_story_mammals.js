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
        const story7 = document.querySelector('.story7');
        const story8 = document.querySelector('.story8');
        const story9 = document.querySelector('.story9');
        const story10 = document.querySelector('.story10');
        const story11 = document.querySelector('.story11');
        const story12 = document.querySelector('.story12');


        //story7
        story7.addEventListener('click', function (e) {
            (e).preventDefault();
            story8.style.visibility = "inherit";
            story7.querySelector('.locked').style.display = "none";
            story7.querySelector('.unlocked').style.display = "block";
        });

        //story8
        story8.addEventListener('click', function (e) {
            (e).preventDefault();
            story9.style.visibility = "inherit";
            story8.querySelector('.locked').style.display = "none";
            story8.querySelector('.unlocked').style.display = "block";
        });

        //story9
        story9.addEventListener('click', function (e) {
            (e).preventDefault();
            story10.style.visibility = "inherit";
            story9.querySelector('.locked').style.display = "none";
            story9.querySelector('.unlocked').style.display = "block";
        });

        //story10
        story10.addEventListener('click', function (e) {
            (e).preventDefault();
            story11.style.visibility = "inherit";
            story10.querySelector('.locked').style.display = "none";
            story10.querySelector('.unlocked').style.display = "block";
        });

        //story11
        story11.addEventListener('click', function (e) {
            (e).preventDefault();
            story12.style.visibility = "inherit";
            story11.querySelector('.locked').style.display = "none";
            story11.querySelector('.unlocked').style.display = "block";
        });

        //story12
        story12.addEventListener('click', function (e) {
            (e).preventDefault();
            story12.querySelector('.locked').style.display = "none";
            story12.querySelector('.unlocked').style.display = "block";
            document.querySelector('.story_mammals_next').style.display = "flex";
            document.querySelector('.mammals_switcher_normal').style.display = "none";
            document.querySelector('.mammals_switcher_finished').style.display = "flex";
            document.querySelector('.old_age_switcher_locked').style.display = "none";
            document.querySelector('.old_age_switcher_normal').style.display = "flex";
        });

    }

    render() {
        return (
            <div className="story_mammals_all">
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
                <div className="story_mammals_next">
                    <p>congrats! go to next era</p>
                </div>
            </div>
        )
    }
}

export default Story_Mammals;
