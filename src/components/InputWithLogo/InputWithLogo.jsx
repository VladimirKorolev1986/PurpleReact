import "./InputWithLogo.css";
import Input from "../Input/Input";

const InputWithLogo = (props) => {
    return (
        <div className="input-search">
            <img
                className="icon-search"
                src="/search-normal.svg"
                alt="Search icon"
            />
            <Input {...props} />
        </div>
    );
};

export default InputWithLogo;
