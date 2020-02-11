import React, {Component} from "react";
import './_era_switcher.scss'


class Era_Switcher extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="era_switcher">
                <div className="first_life_switch switch_style">
                    <p>first life</p>
                </div>
                <div className="mammals_switch switch_style">
                    <p>mammals</p>
                </div>
                <div className="old_era_switch switch_style">
                    <p>old era</p>
                </div>
                <div className="new_era_switch switch_style">
                    <p>new era</p>
                </div>
                <div className="future_switch switch_style">
                    <p>future</p>
                </div>
            </div>
        )
    }
}

export default Era_Switcher;

