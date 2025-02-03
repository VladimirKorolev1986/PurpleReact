import styles from "./AuthForm.module.css";
import { useState } from "react";
import Button from "../Button/Button";
import InputWithLogo from "../InputWithLogo/InputWithLogo";

function AuthForm() {
    const [data, setData] = useState("");
    const inputChange = (event) => {
        setData(event.target.value);
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);
    };
    return (
        <form className={styles["form-auth"]} onSubmit={HandleSubmit}>
            <InputWithLogo
                type={"search"}
                value={data}
                onChange={inputChange}
                placeholder={"Ваше имя"}
                showLogo={false}
                name="username"
            />
            <Button
                className={styles["button-auth"]}
                text={"Войти в профиль"}
                type="submit"
                width="201px"
            ></Button>
            ;
        </form>
    );
}

export default AuthForm;
