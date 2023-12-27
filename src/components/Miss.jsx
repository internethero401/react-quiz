import React from 'react'
import { Link } from "react-router-dom";

const Miss = () => {
    return (
    <div style={{
        display: "flex",
        flexDirection: 'column', // 子要素を縦方向に並べる
        height: '852px',
        width: '393px',
        backgroundColor: "white"
    }}>
        <div style={{
            height: '80px',
            width: '393px',
            backgroundColor: "#FFD700",
            color: "white",
            fontSize: "80px"
        }}>
            <div style={{margin: "-8px 10px"}}>Quiz</div>
        </div>

        <div style={{display: "flex", flexDirection: 'column'}}>
            <div style={{marginTop: "150px", textAlign: "center", fontSize: "68px", fontWeight: "bold", color: "#FFD700"}}>ざんねん...</div>
            <div style={{
                margin: "35px 23px",
                height: "90px",
                width: "335px",
                borderWidth: "6px",
                borderStyle: "solid",  /* ボーダースタイルを追加 */
                borderColor: "#FFD700",
                borderRadius: "30px",
                // ここからは中のtextについて 
                display: "flex",
                flexDirection: 'column',
                alignItems: "center",  /* 横方向の中央揃えを追加 */
                justifyContent: "center"  /* 縦方向の中央揃えを追加 */
            }}>
                <div style={{}}>
                    <div style={{fontSize: "25px"}}>もう一度挑戦してみよう! !</div>
                </div>
                
            </div>
        </div>

        <div style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: "center", // 横方向の中央揃えを追加
        }}>
            <button style={{
                height: "70px",
                width: "240px",
                color: "white",
                backgroundColor: "#FFD700",
                border: "none",
                borderRadius: "15px",
                cursor: 'pointer'}}>
                    <div style={{fontSize: "48px"}}>Replay</div>
            </button>
            <Link to={"/"}>
                <button style={{
                    marginTop: "30px",
                    height: "40px",
                    width: "160px",
                    fontWeight: "bold",
                    color: "#FFD700",
                    backgroundColor: "white",
                    borderStyle: "solid",
                    borderWidth: "5px",
                    borderColor: "#FFD700",
                    borderRadius: "15px",
                    cursor: 'pointer'}}>
                        <div style={{fontSize: "18px"}}>Topに戻る</div>
                </button>
            </Link>
        </div>
    </div >
  )
}

export default Miss;