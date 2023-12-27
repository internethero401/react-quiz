const QuestionButton= (props) => {
    return(
        <div>
            <button style={{
                marginTop: "6px", marginBottom: "6px",
                height: "80px",
                width: "350px",
                backgroundColor: "white",
                borderWidth: "4px",
                borderStyle: "solid", 
                borderColor: "#FFD700",
                borderRadius: "30px",
                cursor: "pointer"
            }}>
                <div style={{fontSize: "30px",}}>{props.content}</div>
            </button>
        </div>
    )
}
export default QuestionButton