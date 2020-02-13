import React, {Component} from "react";
import './_era_switcher.scss'


class Era_Switcher extends Component {
    componentDidMount() {

        //mammals
        document.querySelector('.mammals_switcher_normal').addEventListener('click', function (e) {
            (e).preventDefault();
            document.querySelector('.story_first_life_all').style.display = "none";
            document.querySelector('.story_mammals_all').style.display = "flex";
            document.querySelector('.tap_first_life').style.display = "none";
            document.querySelector('.tap_mammals').style.display = "flex";
            document.querySelector('.era_first_life').style.display = "none";
            document.querySelector('.era_mammals').style.display = "flex";
        });

        //old age
        document.querySelector('.old_age_switcher_normal').addEventListener('click', function (e) {
            (e).preventDefault();
            document.querySelector('.story_mammals_all').style.display = "none";
            document.querySelector('.story_old_age_all').style.display = "flex";
            document.querySelector('.tap_mammals').style.display = "none";
            document.querySelector('.tap_old_age').style.display = "flex";
            document.querySelector('.era_mammals').style.display = "none";
            document.querySelector('.era_old_age').style.display = "flex";
        });

        //new age
        document.querySelector('.new_age_switcher_normal').addEventListener('click', function (e) {
            (e).preventDefault();
            document.querySelector('.story_old_age_all').style.display = "none";
            document.querySelector('.story_new_age_all').style.display = "flex";
            document.querySelector('.tap_old_age').style.display = "none";
            document.querySelector('.tap_new_age').style.display = "flex";
            document.querySelector('.era_old_age').style.display = "none";
            document.querySelector('.era_new_age').style.display = "flex";
        });

        //future
        document.querySelector('.future_switcher_normal').addEventListener('click', function (e) {
            (e).preventDefault();
            document.querySelector('.story_new_age_all').style.display = "none";
            document.querySelector('.story_future_all').style.display = "flex";
            document.querySelector('.tap_new_age').style.display = "none";
            document.querySelector('.tap_future').style.display = "flex";
            document.querySelector('.era_new_age').style.display = "none";
            document.querySelector('.era_future').style.display = "flex";
        });
    }

    render() {
        return (
            <div className="era_switcher">

                <div className="first_life_switcher_normal">
                    <p>first life</p>
                </div>
                <div className="first_life_switcher_finished">
                    <p>finished</p>
                </div>

                <div className="mammals_switcher_locked">
                    <p>locked</p>
                </div>
                <div className="mammals_switcher_normal">
                    <p>mammals</p>
                </div>
                <div className="mammals_switcher_finished">
                    <p>finished</p>
                </div>

                <div className="old_age_switcher_locked">
                    <p>locked</p>
                </div>
                <div className="old_age_switcher_normal">
                    <p>old ages</p>
                </div>
                <div className="old_age_switcher_finished">
                    <p>finished</p>
                </div>

                <div className="new_age_switcher_locked">
                    <p>locked</p>
                </div>
                <div className="new_age_switcher_normal">
                    <p>new ages</p>
                </div>
                <div className="new_age_switcher_finished">
                    <p>finished</p>
                </div>

                <div className="future_switcher_locked">
                    <p>locked</p>
                </div>
                <div className="future_switcher_normal">
                    <p>future</p>
                </div>
                <div className="future_switcher_finished">
                    <p>finished</p>
                </div>

            </div>
        )
    }
}

export default Era_Switcher;

