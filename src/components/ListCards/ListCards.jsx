import "./ListCards.css";
import MovieCard from "../MovieCard/MovieCard";
// import { useState } from "react";

const CARDS = [
    {
        id: 1,
        img: "public/cards/black-widow.png",
        title: "Black Widow",
        rating: 324,
    },
    {
        id: 2,
        img: "public/cards/ShangChi.png",
        title: "Shang Chi",
        rating: 124,
    },
    {
        id: 3,
        img: "public/cards/Loki.png",
        title: "Loki",
        rating: 235,
    },
    {
        id: 4,
        img: "public/cards/HowIMetYourMother.png",
        title: "How I Met Your Mother",
        rating: 123,
    },
    {
        id: 5,
        img: "public/cards/MoneyHeist.png",
        title: "Money Heist",
        rating: 8125,
    },
    {
        id: 6,
        img: "public/cards/Friends.png",
        title: "Friends",
        rating: 123,
    },
    {
        id: 7,
        img: "public/cards/TheBigBangTheory.png",
        title: "The Big Bang Theory",
        rating: 12,
    },
    {
        id: 8,
        img: "public/cards/TwoAndaHalfMen.png",
        title: "Two And a Half Men",
        rating: 456,
    },
];

function ListCards() {
    return (
        <div className="list-cards">
            {CARDS.map((el) => (
                <MovieCard key={el.id} card={el} />
            ))}
        </div>
    );
}

export default ListCards;
