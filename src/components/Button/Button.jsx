import "./Button.css";

function Button({ text, onClick, width }) {
    const buttonStyle = {
        width: width || "119px",
    };

    return (
        <button className="button-style" style={buttonStyle} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
