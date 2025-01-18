import "./ListNavbar.css";

function ListNavbar() {
    // return (
    // <ul className="navbar">
    //     <li>
    //         <a href="#">Поиск фильмов</a>
    //     </li>
    //     <li>
    //         <a href="#">Мои фильмы</a>
    //     </li>
    //     <li>
    //         <a href="#">Войти</a>
    //     </li>
    // </ul>
    // );

    return (
        <div className="navbar">
            <div className="search-films">
                <a href="#">Поиск фильмов</a>
            </div>
            <div className="my-films">
                <a href="#">Мои фильмы</a>
            </div>
            <div className="enter">
                <a href="#">Войти</a>
            </div>
        </div>
    );
}

export default ListNavbar;
