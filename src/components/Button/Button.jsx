import "./Button.css";

function Button({ text, onClick }) {
    return (
        <button className="button-style" onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
