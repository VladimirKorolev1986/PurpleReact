import "./MovieCard.css";

function MovieCard({ card }) {
    return (
        <div className="card">
            <div className="poster">
                <img className="poster-image" src={card.img} alt="Постер" />
                <div className="rating">
                    <span className="rating-icon">⭐</span>
                    <span className="rating-value">{card.rating}</span>
                </div>
            </div>
            <div className="details">
                <div className="movie-title">{card.title}</div>
                <div className="favorite">
                    <span className="favorite-icon">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.47998 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.35003 19.58 9.35003H15.58C14.98 9.35003 14.48 8.85003 14.58 8.15003L15.08 4.95003C15.28 4.05003 14.68 3.05003 13.78 2.75003C12.98 2.45003 11.98 2.85003 11.58 3.45003L7.47998 9.55003"
                                stroke="#7B6EF6"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                            />
                            <path
                                d="M2.38 18.35V8.55002C2.38 7.15002 2.98 6.65002 4.38 6.65002H5.38C6.78 6.65002 7.38 7.15002 7.38 8.55002V18.35C7.38 19.75 6.78 20.25 5.38 20.25H4.38C2.98 20.25 2.38 19.75 2.38 18.35Z"
                                stroke="#7B6EF6"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <span className="favorite-text">В избранное</span>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
