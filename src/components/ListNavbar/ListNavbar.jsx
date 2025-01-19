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
            <div className="nav-item">
                <a href="#">Поиск фильмов</a>
            </div>
            <div className="nav-item">
                <a href="#">Мои фильмы</a>
            </div>
            <div className="nav-item enter">
                <a href="#">Войти</a>
                <img src="/public/Broken/Arrows Action/Login 3.svg" alt="" />
            </div>
        </div>
    );
}

export default ListNavbar;
