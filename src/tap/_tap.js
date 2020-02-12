import React, {Component} from "react";
import './_tap.scss'
import firstLifeImg from '../images/1firstlife.jpg';
import mammalsImg from '../images/2mammals.jpg';
import ancientToNowImg from '../images/3ancienttonow.jpg';
import nowToSpaceImg from '../images/4nowtospace.jpg';
import humanFutureImg from '../images/5humanfuture.jpg';

class Tap extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="tap">
                <div className="tap_first_life">
                    <img className="tap_first_life_img" src={firstLifeImg} alt="firstLife"/>
                </div>
                <div className="tap_mammals">
                    <img className="tap_mammals_img" src={mammalsImg} alt="mammals"/>
                </div>
                <div className="tap_ancient_to_now">
                    <img className="tap_ancient_to_now_img" src={ancientToNowImg} alt="ancientToNow"/>
                </div>
                <div className="tap_now_to_space">
                    <img className="tap_now_to_space_img" src={nowToSpaceImg} alt="nowToSpace"/>
                </div>
                <div className="tap_human_future">
                    <img className="tap_human_future_img" src={humanFutureImg} alt="humanFuture"/>
                </div>
            </div>
        )
    }
}

export default Tap;

