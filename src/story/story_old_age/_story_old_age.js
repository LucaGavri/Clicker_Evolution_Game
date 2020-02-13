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

        const story13 = document.querySelector('.story13');
        const story14 = document.querySelector('.story14');
        const story15 = document.querySelector('.story15');
        const story16 = document.querySelector('.story16');
        const story17 = document.querySelector('.story17');
        const story18 = document.querySelector('.story18');

        //story13
        story13.addEventListener('click', function (e) {
            (e).preventDefault();
            story14.style.visibility = "inherit";
            story13.querySelector('.locked').style.display = "none";
            story13.querySelector('.unlocked').style.display = "block";
        });

        //story14
        story14.addEventListener('click', function (e) {
            (e).preventDefault();
            story15.style.visibility = "inherit";
            story14.querySelector('.locked').style.display = "none";
            story14.querySelector('.unlocked').style.display = "block";
        });

        //story15
        story15.addEventListener('click', function (e) {
            (e).preventDefault();
            story16.style.visibility = "inherit";
            story15.querySelector('.locked').style.display = "none";
            story15.querySelector('.unlocked').style.display = "block";
        });

        //story16
        story16.addEventListener('click', function (e) {
            (e).preventDefault();
            story17.style.visibility = "inherit";
            story16.querySelector('.locked').style.display = "none";
            story16.querySelector('.unlocked').style.display = "block";
        });

        //story17
        story17.addEventListener('click', function (e) {
            (e).preventDefault();
            story18.style.visibility = "inherit";
            story17.querySelector('.locked').style.display = "none";
            story17.querySelector('.unlocked').style.display = "block";
        });

        //story18
        story18.addEventListener('click', function (e) {
            (e).preventDefault();
            story18.querySelector('.locked').style.display = "none";
            story18.querySelector('.unlocked').style.display = "block";
            document.querySelector('.story_old_age_next').style.display = "flex";
            document.querySelector('.old_age_switcher_normal').style.display = "none";
            document.querySelector('.old_age_switcher_finished').style.display = "flex";
            document.querySelector('.new_age_switcher_locked').style.display = "none";
            document.querySelector('.new_age_switcher_normal').style.display = "flex";
        });

    }

    render() {
        return (
            <div className="story_old_age_all">
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
                <div className="story_old_age_next">
                    <p>congrats! go to next era</p>
                </div>
            </div>
        )
    }
}

export default Story_Old_Age;
