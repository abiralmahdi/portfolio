import "./CustomButton.css";

function CustomButton(props){
    return (
        <>
            <a className="transparent-btn mt-2 me-2" href={props.href}>
                <i class={props.iconClass}></i>
                {props.title}
            </a>
        </>
    )
}

export default CustomButton;