import React, { useState } from 'react';

export default function About(props) {
  // ✅ FIX: Use array destructuring
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  //let myStyle ={
  //  color:props.mode ==='dark'?'white':'black',
   // backgroundColor:'dark'?'black':'white'
 // }
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
      });
      setBtnText("Enable Light Mode");
    }
  };
      
  return (
    <div className="container my-4" style={myStyle}>
      <div>
        <h2><strong> About Us</strong></h2>
      </div>
      <p>
        Welcome to our application! This tool allows users to manipulate and analyze text quickly and easily.
        You can convert text to uppercase or lowercase, count words and characters, and even hear the text spoken aloud.
      </p>
      <p>
        This project is built using React and Bootstrap, focusing on a responsive and user-friendly interface.
        It demonstrates the use of React hooks, components, and props for interactive UI building.
      </p>
      <p>
        Future updates may include more advanced text analysis, theme toggles, and improved user customization.
        Thank you for using our app!
      </p>
      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-success mx-2 my-2">
          {btnText}
        </button>
      </div>
    </div>
  );
}
