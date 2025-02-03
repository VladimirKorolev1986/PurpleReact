import styles from "./Button.module.css";

function Button({ text, onClick, width }) {
    const buttonStyle = {
        width: width || "119px",
    };

    return (
        <button
            className={styles["button-style"]}
            style={buttonStyle}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;
