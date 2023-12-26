import React from 'react'

const Correct = ({propsChangeState1}) => {
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
            <div style={{marginTop: "150px", textAlign: "center", fontSize: "65px", fontWeight: "bold", color: "#FFD700"}}>せいかい！</div>
            <div style={{
                margin: "25px 23px",
                height: "270px",
                width: "335px",
                borderWidth: "6px",
                borderStyle: "solid",  /* ボーダースタイルを追加 */
                borderColor: "#FFD700",
                borderRadius: "30px",
                // ここからは中のtextについて 
                display: "flex",
                flexDirection: "column",
                fontSize: "18px"
            }}>
                <div style={{margin: "30px 41px"}}>
                    <div>実はオクラは英語!!</div>
                    <div>英語圏ではそのまま</div>
                    <div>「オクラ」と言えば通じます。</div>
                    <div>ちなみに日本では</div>
                    <div>陸蓮根 (おかれんこん) という</div>
                    <div>別名があるのですが、</div>
                    <div>この呼び方は</div>
                    <div>あまり浸透していません。</div>
                </div>
            </div>
        </div>

        <div style={{display: "flex", margin:"130px 25px", justifyContent: "flex-end"}}>
            <img src="/direct.png" alt="矢印" style={{marginRight: "10px"}}/>
            <button onClick={propsChangeState1}
                style={{
                height: "40px",
                width: "180px",
                backgroundColor: "white",
                borderStyle: "solid",
                borderWidth: "5px",
                borderColor: "#FFD700",
                borderRadius: "15px",}}>
                    <div style={{fontSize: "18px"}}>Topに戻る</div>
            </button>
        </div>
    </div >
  )
}

export default Correct;