import styles from "./Input.module.css";

const Input = (props) => {
    return (
        <input
            className={styles["input-class"]}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            name={props.name}
        ></input>
    );
};

export default Input;
