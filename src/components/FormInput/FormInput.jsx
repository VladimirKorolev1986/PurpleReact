import Button from "../Button/Button";
// import Input from "../Input/Input";
import "./FormInput.css";
import { useState } from "react";
import InputWithLogo from "../InputWithLogo/InputWithLogo";

function FormInput() {
    const [inputData, setInputData] = useState("");

    const handleChange = (event) => {
        setInputData(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);
    };

    return (
        <form className="form-input" onSubmit={handleSubmit}>
            <div className="form-block">
                <InputWithLogo
                    showLogo={true}
                    type={"search"}
                    value={inputData}
                    onChange={handleChange}
                    placeholder={"Введите название"}
                    name="title"
                />
                <Button text={"Сохранить"} type="submit" />
            </div>
        </form>
    );
}

export default FormInput;
