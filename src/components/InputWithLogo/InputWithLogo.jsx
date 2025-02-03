import styles from "./InputWithLogo.module.css";
import Input from "../Input/Input";

const InputWithLogo = ({ showLogo = true, ...props }) => {
    return (
        <div className={styles["input-search"]}>
            {showLogo && (
                <img
                    className={styles["icon-search"]}
                    src="/search-normal.svg"
                    alt="Search icon"
                />
            )}
            <Input {...props} />
        </div>
    );
};

export default InputWithLogo;
