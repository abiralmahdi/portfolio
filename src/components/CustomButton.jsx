import "./CustomButton.css";
import { Link } from "react-router-dom";

function CustomButton(props){
    return (
        <>
            <Link className="transparent-btn mt-2 me-2" to={props.href}>
                <i class={props.iconClass}></i>
                {props.title}
            </Link>
        </>
    )
}

export default CustomButton;