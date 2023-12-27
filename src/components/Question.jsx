import React from 'react';

const Start = () => {
  return (
    <div id='while' style={{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', // 水平方向に中央揃え
      height: '852px', 
      width: '393px', 
      backgroundColor: "#FFD700" // 背景色
    }}>
      <div id='element1_1' style={{
        marginTop: '0px', 
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
    </div>
  );
};

export default Question;
