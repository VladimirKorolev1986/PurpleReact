import "./InputWithLogo.css";
import Input from "../Input/Input";

const InputWithLogo = ({ showLogo = true, ...props }) => {
    return (
        <div className="input-search">
            {showLogo && (
                <img
                    className="icon-search"
                    src="/search-normal.svg"
                    alt="Search icon"
                />
            )}
            <Input {...props} />
        </div>
    );
};

export default InputWithLogo;
