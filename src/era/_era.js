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
                <div className="era_old_era">
                    old era
                </div>
                <div className="era_new_era">
                    new era
                </div>
                <div className="era_future">
                    future
                </div>
            </div>

        )
    }
}

export default Era;

