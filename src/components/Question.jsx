import React from 'react';
import QuestionButton from './QuestionButton';
import { Link } from 'react-router-dom';

const Question = () => {
  return (
    <div id="while" style={{height: "100vh", width: "100%", backgroundColor: "silver"}}>
        <div style={{
            display: "flex",
            flexDirection: 'column', // 子要素を縦方向に並べる
            height: '852px',
            width: '393px',
            backgroundColor: "white",
        }}>
            <div style={{
                height: '65px',
                width: '393px',
                backgroundColor: "#FFD700",
                color: "white",
                fontSize: "80px"
            }}>
                <div style={{margin: "-16px 10px"}}>Quiz</div>
            </div>

            <div style={{display: "flex", flexDirection: "column", alignItems: 'center', textAlign: "center"}}>
                <div style={{
                    marginTop: "90px",
                    marginBottom: "40px",
                    height: "240px",
                    width: "350px",
                    borderStyle: "solid", 
                    borderColor: "#FFD700",
                    borderRadius: "30px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    backgroundColor: "white",
                    fontSize: "30px",
                }}>
                    <div>次のやさいのうち1つは</div>
                    <div>日本語ではありません。</div>
                    <div>それはどれでしょうか？</div>
                </div>
                
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Link to={"/miss"}><QuestionButton content={"シイタケ"}/></Link>
                    <Link to={"/miss"}><QuestionButton content={"レンコン"}/></Link>
                    <Link to={"/correct"}><QuestionButton content={"オクラ"}/></Link>
                    <Link to={"/miss"}><QuestionButton content={"ダイコン"}/></Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Question;
