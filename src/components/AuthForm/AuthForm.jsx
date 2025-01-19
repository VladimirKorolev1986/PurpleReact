import "./AuthForm.css";
import { useState } from "react";
import Button from "../Button/Button";

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
            <input
                className="input-auth"
                name="login"
                type="text"
                value={data}
                onChange={inputChange}
                placeholder={"Ваше имя"}
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
