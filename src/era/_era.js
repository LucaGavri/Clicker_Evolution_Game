import React, {Component} from "react";
import './_era.scss'


class Era extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="era">
                <div className="era_first_life">
                    first life
                </div>
                <div className="era_mammals">
                    mammals era
                </div>
                <div className="era_old_age">
                    old ages
                </div>
                <div className="era_new_age">
                    new ages
                </div>
                <div className="era_future">
                    future
                </div>
            </div>

        )
    }
}

export default Era;

