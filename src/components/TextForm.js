import React,{useState} from 'react'

export default function TextForm(props) {


    const handleUpClick = () =>{
        console.log("UpperClick was Clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleUpToggle = () => {
        let characters = text.split('');
    
        // Toggling the case of each character
        let toggledCharacters = characters.map(char => {
            if (char === char.toUpperCase()) {
                return char.toLowerCase();
            } else {
                return char.toUpperCase();
            }
        });

        let toggledText = toggledCharacters.join('');
        setText(toggledText);
    }
    
    const Clear =() => {
        setText("");
    }
    const handleDownClick = () =>{
        console.log("LowerClick was Clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) =>{
        console.log("Change");
        setText(event.target.value);

    }

    const [text, setText] = useState('');
    // text used as an variable 
    // setText("New text");
  return (
    <>
    <div>
    <div className="container" style={{color : props.mode=== 'light' ? 'black' : 'white'}}>
    <h2>{props.heading}</h2> 
    <div className="mb-3">
    <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor : props.mode=== 'light' ? 'white' : 'rgb(14, 38, 72)' , color : props.mode=== 'light' ? 'black' : 'white'}}  onChange={handleOnChange}value={text} placeHolder="Enter text here" rows="8"></textarea>
    </div> 
    <button className="btn btn-success" onClick={handleUpClick}>
        Convert to UpperCase
    </button>
    <button className="btn btn-success mx-3" onClick={handleUpToggle}>
        tOGGLE cASE
    </button>
    <button className="btn btn-success mx-3" onClick={handleDownClick}>
        Convert to LowerCase
    </button>
    <button className="btn btn-success " onClick={Clear}>
        Clear
    </button>
</div>

<div className="container my-3"  style={{color : props.mode=== 'light' ? 'black' : 'white'}}>
    <h1>Your text summary</h1>
    <p>{text.length} Characters  and {text.split(" ").length-1} Words </p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    <p>{text.split(".").length-1} Sentences</p>

    <h2>Preview</h2>
    <p>{text.length>0? text : "Enter Something in textbox above yo preview it"}</p>
    

</div>
</div>
</>  )
}
