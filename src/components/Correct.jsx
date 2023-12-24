import React from 'react'

const Correct = () => {
  return (
    <div style={{
        display: "flex",
        flexDirection: 'column', // 子要素を縦方向に並べる
        height: '852px',
        width: '393px',
        backgroundColor: "white"
    }}>
        <div style={{
            height: '60px',
            width: '393px',
            backgroundColor: "#FFD700",
            color: "white",
            fontSize: "70px"
        }}>
            <div style={{margin: "-16px 10px"}}>Quiz</div>
        </div>

        <div style={{display: "flex",justifyContent: "center", flexDirection: 'column'}}>
            <div style={{marginTop: "150px", textAlign: "center", fontSize: "50px", color: "#FFD700"}}>せいかい！</div>
            <div style={{
                marginTop: "30px",
                height: "200px",
                width: "300px",
                borderWidth: "3px",
                borderStyle: "solid",  /* ボーダースタイルを追加 */
                borderColor: "#FFD700",
                color: "black"
            }}>
                実はオクラは英語!!
            </div>
        </div>
    </div>
  )
}

export default Correct