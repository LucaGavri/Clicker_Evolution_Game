import React, {Component} from "react";
import './_story_future.scss'
import story25 from '../../images/28_firstcontact.jpg'
import story26 from '../../images/29_milkyway.jpg'
import story27 from '../../images/30_galacticgroup.jpg'
import story28 from '../../images/31_virgo.jpg'
import story29 from '../../images/32_universe.jpg'


class Story_Future extends Component {
    componentDidMount() {

        const story25 = document.querySelector('.story25');
        const story26 = document.querySelector('.story26');
        const story27 = document.querySelector('.story27');
        const story28 = document.querySelector('.story28');
        const story29 = document.querySelector('.story29');
        const story30 = document.querySelector('.story30');

        //story25
        story25.addEventListener('click', function (e) {
            (e).preventDefault();
            story26.style.visibility = "inherit";
            story25.querySelector('.locked').style.display = "none";
            story25.querySelector('.unlocked').style.display = "block";
        });

        //story26
        story26.addEventListener('click', function (e) {
            (e).preventDefault();
            story27.style.visibility = "inherit";
            story26.querySelector('.locked').style.display = "none";
            story26.querySelector('.unlocked').style.display = "block";
        });

        //story27
        story27.addEventListener('click', function (e) {
            (e).preventDefault();
            story28.style.visibility = "inherit";
            story27.querySelector('.locked').style.display = "none";
            story27.querySelector('.unlocked').style.display = "block";
        });

        //story28
        story28.addEventListener('click', function (e) {
            (e).preventDefault();
            story29.style.visibility = "inherit";
            story28.querySelector('.locked').style.display = "none";
            story28.querySelector('.unlocked').style.display = "block";
        });

        //story29
        story29.addEventListener('click', function (e) {
            (e).preventDefault();
            story30.style.visibility = "inherit";
            story29.querySelector('.locked').style.display = "none";
            story29.querySelector('.unlocked').style.display = "block";
        });

        //story30
        story30.addEventListener('click', function (e) {
            (e).preventDefault();
            story30.querySelector('.locked').style.display = "none";
            story30.querySelector('.unlocked').style.display = "block";
            document.querySelector('.story_future_next').style.display = "flex";
            document.querySelector('.future_switcher_normal').style.display = "none";
            document.querySelector('.future_switcher_finished').style.display = "flex";
        });

        //restart
        document.querySelector('.restart').addEventListener('click', function (e) {
            window.location.reload()
        });

    }

    render() {
        return (
            <div className="story_future_all">
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
                <div className="story_future_next">
                    <p>congratulations! you won!</p>
                    <button className="restart">restart</button>
                </div>
            </div>
        )
    }
}

export default Story_Future;
