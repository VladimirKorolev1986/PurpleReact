import Button from "../Button/Button";
import Input from "../Input/Input";
import "./FormInput.css";
import { useState } from "react";

function FormInput() {
    const [inputData, setInputData] = useState("");

    const handleChange = (event) => {
        setInputData(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = formData.fromEntries(formData);
        console.log(formProps);
    };

    return (
        <div className="form">
            <form className="form-input" onSubmit={handleSubmit}>
                <Input
                    type={"text"}
                    value={inputData}
                    onChange={handleChange}
                    placeholder={"Введите название"}
                />
                <Button
                    text={"Сохранить"}
                    onClick={() => {
                        console.log("Нажали");
                    }}
                />
            </form>
        </div>
    );
}

export default FormInput;
