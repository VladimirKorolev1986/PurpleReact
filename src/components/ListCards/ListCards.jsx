import "./ListCards.css";
import MovieCard from "../MovieCard/MovieCard";

const CARD = {
    img: "public/cards/black-widow.png",
    title: "Black Widow",
    rating: 324,
};

function ListCards() {
    return (
        <div className="list-cards">
            <MovieCard card={CARD} />
            <MovieCard card={CARD} />
            <MovieCard card={CARD} />
            <MovieCard card={CARD} />
            <MovieCard card={CARD} />
        </div>
    );
}

export default ListCards;
