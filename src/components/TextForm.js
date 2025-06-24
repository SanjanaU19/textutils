import React ,{useState} from 'react'

export default function TextForm(props) {
    //upper case text
    const HandleUpClick=()=> {
        let newText =text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    //change
    const HandleOnChange=(event)=> {
        setText(event.target.value);
    }
    //lower case
    const HandleLoClick=()=> {
        let newText =text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    //speak
    const speak =() => {
        let msg= new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking the written Word","success")
    }
    //clear text
    const HandleClearClick=()=> {
        let newText =' ';
        setText(newText)
        props.showAlert("Clean the Dashboard","success")

    }
    //copy text
    const handleCopy = () => {
  navigator.clipboard.writeText(text);
  document.getSelection().removeAllRanges()
  props.showAlert("Text copied to clipboard!","success")
};
//remove extra space
const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove the Extra Space from the Word","success")
}

//declear new state variable
const[text,setText] = useState('');
//text="new text"; //wrong way to change the state
//setText("new text")  //correct way to change the text
 return (
  <>
   <div className={`container ${props.mode === '#042743' ? 'text-light' : 'text-dark'}`}>

      <h3 style={{ color: props.textColor }}>{props.heading}</h3>
      <div className="mb-3">
        <textarea 
  className="form-control" 
  value={text} 
  onChange={HandleOnChange} 
  style={{
    backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
    color: props.mode === '#042743' ? 'white' : 'black'
  }} 
  id="myBox" 
  rows="8"
></textarea>

      </div>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={HandleUpClick}> Convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={HandleLoClick}> Convert to lowercase</button>
      <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-success mx-2 my-2">Speak</button>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-2 " onClick={handleCopy}>Copy to Clipboard</button>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>  
      <button disabled={text.length===0} className="btn btn-success mx-2" onClick={HandleClearClick}> Clear Text</button>

    </div>
    <div className={`container my-3 ${props.mode === 'dark' ? 'white': '#042743'}`}>
      <h3>Your text summary</h3>
      <p>{text.split(/\s+/).filter((elemnet)=>{return elemnet.length!==0}).length} words and {text.length} character</p>
      <p> {0.008 * text.split(" ").filter((elemnet)=>{return elemnet.length!==0}).length} Minutes read </p>  {/*time to read worlds in minutes */}
      <h2>
        Preview
      </h2>
      <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
  </>
);

}
