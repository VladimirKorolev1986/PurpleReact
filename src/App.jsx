import "./App.css";
import Button from "./components/Button/Button";
import Heading from "./components/Heading/Heading";
import Paragraph from "./components/Paragraph/Paragraph";
import FormInput from "./components/FormInput/FormInput";

function App() {
    return (
        <>
            <Heading text="Поиск"></Heading>
            <Button name={"Искать"} />
            <Paragraph
                text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
                fontSize={16}
            ></Paragraph>
            <Paragraph
                text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
                fontSize={20}
            ></Paragraph>
            <FormInput></FormInput>
        </>
    );
}

export default App;
