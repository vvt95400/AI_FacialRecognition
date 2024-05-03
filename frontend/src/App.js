import React, { useState } from "react"

const App = () => {
  //const [message, setMessage] = useState('');
  const [inputImage, setInputImage] = useState();
  const [inputImageBase64, setInputImageBase64] = useState("");
  const [outputResult, setOutputResult] = useState("");
  

  const base64 = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e);
    reader.onload = function () {
      setInputImageBase64(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  /* useEffect(() => {
    fetchData();
  }, [message]);
  */
  const fetchData = async () => {
    try {
      await fetch("http://localhost:5000/classify_image", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ b64Data: inputImageBase64 })
      }).then(async response => {
        setOutputResult(await response.json())
        console.log(outputResult);
      })
    }
    catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div style={{ height: "100vh", width: "100%" }} className="bg-pink-200 flex justify-center items-center gap-32">
        <div className="border-2 border-black w-1/4 h-1/3 justify-center flex flex-col">
          <input type="file" alt="" className="self-center" onChange={e => {
            base64(e.target.files[0]);
            setInputImage(URL.createObjectURL(e.target.files[0]))
          }} />
          <img className="h-fit w-fit" src={inputImage} alt="" />
          <button type="submit" className="justify-self-end" onClick={() => { if (inputImageBase64 !== "") fetchData() }}>Submit</button>
        </div>
        <div className="border-2 border-black w-1/4 h-1/3 flex items-self">
          {outputResult}
        </div>
      </div>
    </div>
  );
}

export default App