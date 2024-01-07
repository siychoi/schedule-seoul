import PropTypes from "prop-types";
import buttonstyles from "./Button.module.css";

function Button({text}) {
    return <button className={buttonstyles.btn}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}
export default Button;