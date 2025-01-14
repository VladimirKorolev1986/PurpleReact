import "./FormInput.css";
import { useState } from "react";

function FormInput() {
    const [inputData, setInputData] = useState("");

    const handleChange = (e) => {
        setInputData(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted: ", inputData);
    };

    return (
        <form className="form-input" onSubmit={handleSubmit}>
            <input type="text" value={inputData} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormInput;
