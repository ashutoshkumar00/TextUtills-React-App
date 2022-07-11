import React, {useState} from 'react'


export default function TextForm(props) {

    const toupper = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const tolower = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleclear = ()=>{ 
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

   

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>

        <div className="container" style={{color:props.mode==='light'?'#617588':'white'}}> 
            <h1>{props.title}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" style={{color:props.mode==='light'?'#617588':'white', backgroundColor:props.mode==='dark'?'#617588':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={toupper}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={tolower}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleclear}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>

        <div className="container" style={{color:props.mode==='light'?'#617588':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in above box to preview."}</p>
        </div>

        {/* <button className="btn btn-primary mx-1 my-1" onClick={handlemode}>{modeText}</button> */}

        </>
    )
}