function MovieCard({ card }) {
    return (
        <div className="movie-card">
            <div className="movie-image">
                <img src={card.img} alt={card.title} />
                <div className="movie-rating">⭐ {card.rating}</div>
            </div>
            <h3 className="movie-title"></h3>
        </div>
    );
}

export default MovieCard;
