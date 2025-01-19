import "./AuthForm.css";
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
    };
    return (
        <form className="form-auth" onSubmit={HandleSubmit}>
            <InputWithLogo
                type={"search"}
                value={data}
                onChange={inputChange}
                placeholder={"Ваше имя"}
                showLogo={false}
            />
            <Button
                className="button-auth"
                text={"Войти в профиль"}
                type="submit"
                width="201px"
            ></Button>
            ;
        </form>
    );
}

export default AuthForm;
