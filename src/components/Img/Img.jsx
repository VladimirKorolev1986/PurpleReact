import styles from "./Img.module.css";

function Img() {
    return (
        <div className={styles["logo"]}>
            <img src="public/logo.svg" alt="логотип" />
        </div>
    );
}

export default Img;
