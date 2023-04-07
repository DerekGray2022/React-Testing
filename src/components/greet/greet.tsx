import {Greetprops} from "./greet.types";

const Greet = (props: Greetprops) => {
    return (
        <div>Hello, { props.name ? props.name : "Guest"}</div>
    );
};

export default Greet;
