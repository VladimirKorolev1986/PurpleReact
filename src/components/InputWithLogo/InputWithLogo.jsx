import "./InputWithLogo.css";
import Input from "../Input/Input";

const InputWithLogo = () => {
    return (
        <div className="input-search">
            <img className="icon-search" src="/search-normal.svg" alt="" />
            <Input />
        </div>
    );
};

export default InputWithLogo;
