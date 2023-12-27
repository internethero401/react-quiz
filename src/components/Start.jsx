import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div id="while" style={{height: "100vh", width: "100%", backgroundColor: "silver"}}>
      <div id='while' style={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', // 水平方向に中央揃え
        height: '852px', 
        width: '393px', 
        backgroundColor: "#FFD700" // 背景色
      }}>
        <div id='element1_1' style={{
          marginTop: '160px', 
          height: '200px', 
          width: '360px', 
          borderRadius: "25px",
          backgroundColor: "white",
          display: 'flex', 
          justifyContent: 'center', // 中央揃え
          alignItems: 'center' 
        }}>
          <span style={{marginTop: '-20px', fontSize: "200px", color: "#FFD700"}}>Quiz</span>
        </div>

        <p style={{
          marginTop: '0px', 
          color: "white", 
          fontSize: "40px", 
          textAlign: 'center' 
        }}> 
          <p>4択を選んで</p>
          <p style={{marginTop: "-40px"}}>正解に辿り着こう</p>
        </p>

        <Link to={"/question"}>
          <button style={{
            marginTop: '-50px', 
            height: '120px',
            width: '300px',
            fontSize: '70px', 
            fontWeight: 'bold', // フォントの太さを太く
            color: '#FFD700',
            backgroundColor: 'white',
            border: 'none', 
            borderRadius: '20px',
            padding: '10px 40px', 
            cursor: 'pointer', 
          }}>
            START
          </button>
        </Link>
      </div>
    </ div>
  );
};

export default Start;
