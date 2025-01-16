import "./Input.css";

const Input = (props) => {
    return (
        <input
            className="input-class"
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
        ></input>
    );
};

export default Input;
