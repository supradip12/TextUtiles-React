import React,{ useState } from 'react';

export default function Textform(props) {
 const [text, setText] = useState('');

 const handelOnChange = (e)=>{
  console.log("On Change");
  setText(e.target.value)
  
 }

 const handelUpClick = ()=>{
  // console.log("Uppercase was Clicked " + {text});
  let newtext = text.toUpperCase();
  setText(newtext);
  props.showAlert("HandelUp ho gaya","Success");
}

const handeldownClick = ()=>{
  let newtext = text.toLowerCase();
  setText(newtext);
  props.showAlert("Handeldown ho gaya","Success");
 }

 const copy = ()=>{

  let newtext=navigator.clipboard.writeText(text);
  console.log(newtext);
  alert("text copied successfully");
  props.showAlert("Copy ho gaya","Success");

 }

 const fupper = ()=>{
    let newtext = text.split(" ").map(loda=>{
      return loda[0].toUpperCase() + loda.slice(1);
     
    });

    setText(newtext.join(" "))
    props.showAlert("Fupper ho gaya","Success")
 }

 return (
   <>
  <div className='container'>
  <h1>{props.heading}</h1>
<div className="mb-3">
    <textarea className="form-control" value={text} onChange={handelOnChange}  style={{backgroundColor:props.mode === 'dark'?'grey':'white'}} id="mybox" rows="8"></textarea>
</div>

<button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to uppercase</button>

<button className="btn btn-primary mx-2" onClick={handeldownClick}>Convert to lowercase</button>

<button className="btn btn-primary mx-2" onClick={copy}>Copy Text</button>

<button className="btn btn-primary mx-2" onClick={fupper}>first letter uppercase</button>
  </div>

  <div className="container my-3">
    <h1>Your text Summerry</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>

    <p>{0.008 * text.split(" ").length } minutes of read</p>
  </div>
  <h2>Preview</h2>

  <p>{text.length>0?text:"Enter your Text"}</p>

 
  
   </>
 )
}