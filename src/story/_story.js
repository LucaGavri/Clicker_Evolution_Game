import React, {Component} from "react";
import './_story.scss'
import Story_First_Life from "./story_first_life/_story_first_life";
import Story_Mammals from "./story_mammals/_story_mammals";
import Story_Old_Age from "./story_old_age/_story_old_age";
import Story_New_Age from "./story_new_age/_story_new_age";
import Story_Future from "./story_future/_story_future";

class Story extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className='story'>
                <Story_First_Life/>
                <Story_Mammals/>
                <Story_Old_Age/>
                <Story_New_Age/>
                <Story_Future/>
            </div>
        )
    }
}

export default Story;
