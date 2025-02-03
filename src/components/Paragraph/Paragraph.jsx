import styles from "./Paragraph.module.css";

function Paragraph({ text, fontSize }) {
    const style = { fontSize };

    return (
        <p className={styles["paragraph"]} style={style}>
            {text}
        </p>
    );
}

export default Paragraph;
