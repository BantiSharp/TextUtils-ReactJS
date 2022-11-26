import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=> {
        console.log("Uppercase" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = ()=> {
      console.log("Lowercase" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearText = ()=> {
      // console.log("Lowercase" + text);
      let newText = '';
      setText(newText)
      props.showAlert("Converted to Clear Text", "success");
  }
      const speak = () => {
        let msg = new SpeechSynthesisUtterance();
          msg.text = text;
            window.speechSynthesis.speak(msg);
            props.showAlert("Converted to Speak", "success");
        }

        const downloadTxtFile = () => {
          const element = document.createElement("a");
          const file = new Blob([text], {
            type: "text/plain"
          });
          element.href = URL.createObjectURL(file);
          element.download = "myFile.txt";
          element.click();
          props.showAlert(" Text Download successfully", "success");
          }

          const CapFClick = () =>{
            let CapitalizeWords = text[0].toUpperCase();  
            for (let i = 1; i <= text.length - 1; i++) {  
                let currentCharacter,  previousCharacter = text[i - 1];  
                if (previousCharacter && previousCharacter === ' ') {  
                    currentCharacter = text[i].toUpperCase();  
                } else {  
                    currentCharacter = text[i];  
                }  
                CapitalizeWords = CapitalizeWords + currentCharacter;  
            }  
            setText(CapitalizeWords);
        }
        
    const handleOnChange = (event)=> {
        console.log("OnChange");
        setText(event.target.value);
    }
  const [text, setText] = useState('Enter Text Here');
  return (
    <>
    <div className="container">
        <h1 className="mb-4">{props.heading}</h1>   
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={speak}> Speak </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={downloadTxtFile}> Download Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={CapFClick}> CapF Click</button>
           
  </div>
  <div className="container my-3" >
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length}words and {text.length} char</p>
    <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minute read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview!"}</p>
  </div>
  </>
  )
}
