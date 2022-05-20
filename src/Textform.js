import React, { useState } from 'react'

export default function Textform(props) {
  const [count, setCount] = useState('');

  function toUppercase() {
    console.log("uppercase was clicked");
    props.showAlert("Converted to Uppercase","success");
    const newCount=count.toUpperCase();
    setCount(newCount);
  }

  function toLowercase() {
    console.log("lowercase was clicked");
    props.showAlert("Converted to Lowercase","success");
    const newCount=count.toLowerCase();
    setCount(newCount);
  }

  function copyText() {
    console.log("text copied");
    props.showAlert("Text Copied","success");
    var text=document.getElementById('Textarea')
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  function removeSpaces() {
    console.log("spaces removed");
    props.showAlert("Extra Spaces Removed","success");
    let newText =count.split(/[ ]+/);
    setCount(newText.join(" "));
  }

  function resetText() {
    console.log("text cleared");
    props.showAlert("Text cleared","success");
    const newCount="";
    setCount(newCount);
  }

  function handleOnChange(event) {
    console.log("Onchanged  was clicked");
    setCount(event.target.value);
  }


  return (
    <>
    <div className='container mt-2'  style={{color: props.mode==='light'?'black':'white'}}>
      <form>
        <div className="form-group">
          <h2 className='font-weight-bold '>{props.heading}</h2>
          <textarea className="form-control" id="Textarea" style={{backgroundColor: props.mode==='dark'?'rgb(77, 110, 140)':'white',color: props.mode==='light'?'black':'white'}} rows="8" value={count} onChange={handleOnChange}></textarea>

          <button type="button" className="btn btn-primary mx-1 my-1" onClick={toUppercase}>Convert To Uppercase</button>
          <button type="button" className="btn btn-primary mx-1 my-1" onClick={toLowercase}>Convert To Lowercase</button>
          <button type="button" className="btn btn-primary mx-1 my-1" onClick={removeSpaces}>Remove ExtraSpaces</button>
          <button type="button" className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
          <button type="button" className="btn btn-primary mx-1 my-1" onClick={resetText}>Clear Text</button>
        </div>
      </form>
    </div>
    <div className='container my-2'  style={{color: props.mode==='light'?'black':'white'}}>
    <h3>Text Summary Here</h3>
    <p>{count.split(" ").filter((element)=>{return element.length!==0}).length} words  and {count.length} characters</p>
    <p>{0.008*count.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
    <h3>Preview</h3>
    <p>{count.length>0?count:"Enter something to preview"}</p>
    </div>
    </>
  )
}
