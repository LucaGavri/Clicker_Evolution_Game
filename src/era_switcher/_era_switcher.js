import React, {Component} from "react";
import './_era_switcher.scss'


class Era_Switcher extends Component {
    componentDidMount() {

        //mammals
        document.querySelector('.mammals_switcher_normal').addEventListener('click', function (e) {
            (e).preventDefault();
            document.querySelector('.story_first_life_all').style.display = "none";
            document.querySelector('.story_mammals_all').style.display = "flex";
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

                <div className="old_era_switcher_locked">
                    <p>locked</p>
                </div>
                <div className="old_era_switcher_normal">
                    <p>old era</p>
                </div>
                <div className="old_era_switcher_finished">
                    <p>finished</p>
                </div>

                <div className="new_era_switcher_locked">
                    <p>locked</p>
                </div>
                <div className="new_era_switcher_normal">
                    <p>new era</p>
                </div>
                <div className="new_era_switcher_finished">
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

