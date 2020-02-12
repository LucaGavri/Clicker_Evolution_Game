import React, {Component} from "react";
import './_counter.scss'


class Counter extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="counter">
                <p className="counter_txt">
                    you have
                    <input className="counter_input" type="text" value="100" readonly/>
                     points !
                </p>
            </div>
        )
    }
}

export default Counter;

