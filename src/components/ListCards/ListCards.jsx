import styles from "./ListCards.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { CARDS } from "../../data/movies-data.jsx";

function ListCards() {
    return (
        <div className={styles["list-cards"]}>
            {CARDS.map((el) => (
                <MovieCard key={el.id} card={el} />
            ))}
        </div>
    );
}

export default ListCards;
