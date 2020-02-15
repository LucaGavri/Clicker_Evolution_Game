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
                    <input className="counter_input" type="number" value="0"/>
                     points !
                </p>
            </div>
        )
    }
}

export default Counter;

