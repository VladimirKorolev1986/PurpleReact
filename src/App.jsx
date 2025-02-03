import styles from "./App.module.css";
import Heading from "./components/Heading/Heading";
import Paragraph from "./components/Paragraph/Paragraph";
import FormInput from "./components/FormInput/FormInput";
import ListNavbar from "./components/ListNavbar/ListNavbar";
import Header from "./layouts/Header/Header";
import Img from "./components/Img/Img";
import ListCards from "./components/ListCards/ListCards";

function App() {
    return (
        <>
            <Header>
                <Img />
                <ListNavbar />
            </Header>
            <div className={styles["frame3"]}>
                <Heading text="Поиск"></Heading>

                <Paragraph
                    text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
                    fontSize={16}
                ></Paragraph>
                <FormInput></FormInput>
                <ListCards />
            </div>
        </>
    );
}

export default App;
