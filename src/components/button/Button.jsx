import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


const Button = (props) => {

    const {title, navigateTo, className} = props;

    console.log(navigateTo)

    const navigate = useNavigate();

    return (
        <button className={`primary-button ${className}`} onClick={() => navigate(navigateTo)}>
            {title}
        </button>
    )
}

// ensure prop types
Button.propTypes = {
    title: PropTypes.string.isRequired,
    navigateTo: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
}

export default Button
