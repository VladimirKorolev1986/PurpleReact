import "./Paragraph.css";

function Paragraph({ text, fontSize }) {
    const style = { fontSize };

    return (
        <p className="paragraph" style={style}>
            {text}
        </p>
    );
}

export default Paragraph;
