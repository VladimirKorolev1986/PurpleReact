import styles from "./ListNavbar.module.css";
import classNames from "classnames";

function ListNavbar() {
    return (
        <div className={styles["navbar"]}>
            <div className={styles["nav-item"]}>
                <a href="#">Поиск фильмов</a>
            </div>
            <div className={styles["nav-item"]}>
                <a href="#">Мои фильмы</a>
            </div>
            <div className={classNames(styles["nav-item"], styles["enter"])}>
                <a href="#">Войти</a>
                <img
                    src="/public/Broken/Arrows Action/Login 3.svg"
                    alt="логотип значка войти"
                />
            </div>
        </div>
    );
}

export default ListNavbar;
