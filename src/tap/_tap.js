import React, {Component} from "react";
import './_tap.scss'
import firstLifeImg from '../images/1firstlife.jpg';
import mammalsImg from '../images/2mammals.jpg';
import ancientToNowImg from '../images/3ancienttonow.jpg';
import nowToSpaceImg from '../images/4nowtospace.jpg';
import humanFutureImg from '../images/5humanfuture.jpg';

class Tap extends Component {
    componentDidMount() {

        const tap_first_life = document.querySelector('.tap_first_life_img');
        const tap_mammals = document.querySelector('.tap_mammals_img');
        const tap_old_age = document.querySelector('.tap_old_age_img');
        const tap_new_age = document.querySelector('.tap_new_age_img');
        const tap_future = document.querySelector('.tap_future_img');

        const counter_to_tap = document.querySelector('.counter_input');



        tap_first_life.addEventListener('click', function (e) {
            (e).preventDefault();
            counter_to_tap.stepUp(1);
        });

        tap_mammals.addEventListener('click', function (e) {
            (e).preventDefault();
            counter_to_tap.stepUp(2);
        });

        tap_old_age.addEventListener('click', function (e) {
            (e).preventDefault();
            counter_to_tap.stepUp(3);
        });

        tap_new_age.addEventListener('click', function (e) {
            (e).preventDefault();
            counter_to_tap.stepUp(5);
        });

        tap_future.addEventListener('click', function (e) {
            (e).preventDefault();
            counter_to_tap.stepUp(10);
        });
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
                <div className="tap_old_age">
                    <img className="tap_old_age_img" src={ancientToNowImg} alt="oldAge"/>
                </div>
                <div className="tap_new_age">
                    <img className="tap_new_age_img" src={nowToSpaceImg} alt="newAge"/>
                </div>
                <div className="tap_future">
                    <img className="tap_future_img" src={humanFutureImg} alt="future"/>
                </div>
            </div>
        )
    }
}

export default Tap;

