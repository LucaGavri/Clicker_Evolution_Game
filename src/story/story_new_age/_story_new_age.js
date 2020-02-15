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

        const story19 = document.querySelector('.story19');
        const story20 = document.querySelector('.story20');
        const story21 = document.querySelector('.story21');
        const story22 = document.querySelector('.story22');
        const story23 = document.querySelector('.story23');
        const story24 = document.querySelector('.story24');

        const counter_to_new_age_story = document.querySelector('.counter_input');

        //story19
        story19.addEventListener('click', function (e) {
            (e).preventDefault();
            if(counter_to_new_age_story.value >= 1300) {
                story20.style.visibility = "inherit";
                story19.querySelector('.locked').style.display = "none";
                story19.querySelector('.unlocked').style.display = "block";
            }
        });

        //story20
        story20.addEventListener('click', function (e) {
            (e).preventDefault();
            if(counter_to_new_age_story.value >= 1500) {
                story21.style.visibility = "inherit";
                story20.querySelector('.locked').style.display = "none";
                story20.querySelector('.unlocked').style.display = "block";
            }
        });

        //story21
        story21.addEventListener('click', function (e) {
            (e).preventDefault();
            if(counter_to_new_age_story.value >= 1700) {
                story22.style.visibility = "inherit";
                story21.querySelector('.locked').style.display = "none";
                story21.querySelector('.unlocked').style.display = "block";
            }
        });

        //story22
        story22.addEventListener('click', function (e) {
            (e).preventDefault();
            if(counter_to_new_age_story.value >= 1900) {
                story23.style.visibility = "inherit";
                story22.querySelector('.locked').style.display = "none";
                story22.querySelector('.unlocked').style.display = "block";
            }
        });

        //story23
        story23.addEventListener('click', function (e) {
            (e).preventDefault();
            if(counter_to_new_age_story.value >= 2100) {
                story24.style.visibility = "inherit";
                story23.querySelector('.locked').style.display = "none";
                story23.querySelector('.unlocked').style.display = "block";
            }
        });

        //story24
        story24.addEventListener('click', function (e) {
            (e).preventDefault();
            if(counter_to_new_age_story.value >= 2500) {
                story24.querySelector('.locked').style.display = "none";
                story24.querySelector('.unlocked').style.display = "block";
                document.querySelector('.story_new_age_next').style.display = "flex";
                document.querySelector('.new_age_switcher_normal').style.display = "none";
                document.querySelector('.new_age_switcher_finished').style.display = "flex";
                document.querySelector('.future_switcher_locked').style.display = "none";
                document.querySelector('.future_switcher_normal').style.display = "flex";
            }
        });
    }

    render() {
        return (
            <div className="story_new_age_all">
                <div className="story_new_age">
                    <div className="story19 story_style">
                        <img src={story19} alt="firstmachine"/>
                        <p className="locked">1300 pts</p>
                        <p className="unlocked">xix century</p>
                    </div>
                    <div className="story20 story_style">
                        <img src={story20} alt="now"/>
                        <p className="locked">1500 pts</p>
                        <p className="unlocked">nowadays</p>
                    </div>
                    <div className="story21 story_style">
                        <img src={story21} alt="moonstation"/>
                        <p className="locked">1700 pts</p>
                        <p className="unlocked">moon station</p>
                    </div>
                    <div className="story22 story_style">
                        <img src={story22} alt="marsstation"/>
                        <p className="locked">1900 pts</p>
                        <p className="unlocked">mars station</p>
                    </div>
                    <div className="story23 story_style">
                        <img src={story23} alt="venusstation"/>
                        <p className="locked">2100 pts</p>
                        <p className="unlocked">venus station</p>
                    </div>
                    <div className="story24 story_style">
                        <img src={story24} alt="solarsystem"/>
                        <p className="locked">2500 pts</p>
                        <p className="unlocked">solar system colony</p>
                    </div>
                </div>
                <div className="story_new_age_next">
                    <p>congrats! go to next era</p>
                </div>
            </div>
        )
    }
}

export default Story_New_Age;
