import React, { useState } from "react";

const App = () => {
  const [inputImage, setInputImage] = useState();
  const [inputImageBase64, setInputImageBase64] = useState("");
  const [outputResult, setOutputResult] = useState("");

  // People array for dynamic image grid
  const people = [
    { id: 1, label: "Lionel Messi", image: "/lm1.jpeg" },
    { id: 2, label: "Maria Sharapova", image: "/ms1.jpg" },
    { id: 3, label: "Roger Federer", image: "/rf1.jpg" },
    { id: 4, label: "Serena Williams", image: "/sw1.webp" },
    { id: 5, label: "Virat Kohli", image: "/vk1.jpg" },
  ];
  

  const base64 = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e);
    reader.onload = function () {
      setInputImageBase64(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const fetchData = async () => {
    try {
      await fetch("http://localhost:5000/classify_image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ b64Data: inputImageBase64 }),
      }).then(async (response) => {
        setOutputResult(await response.json());
        console.log(outputResult);
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header Section with Dynamic Grid */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {people.map((person) => (
          <div key={person.id} className="flex flex-col items-center">
            <img
              src={person.image}
              alt={person.label}
              className="w-24 h-24 rounded-full object-cover"
            />
            <span className="mt-2 text-sm">{person.label}</span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex gap-16">
        {/* Upload Section */}
        <div className="border-2 border-dashed border-gray-400 p-6 rounded-lg w-80 flex flex-col items-center">
          <input
            type="file"
            className="mb-4"
            onChange={(e) => {
              base64(e.target.files[0]);
              setInputImage(URL.createObjectURL(e.target.files[0]));
            }}
          />
          {inputImage && (
            <img
              src={inputImage}
              alt="Uploaded"
              className="w-full h-auto rounded-lg mb-4"
            />
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => {
              if (inputImageBase64 !== "") fetchData();
            }}
          >
            Upload Image
          </button>
        </div>

        {/* Output Section */}
        <div className="border-2 border-gray-400 p-6 rounded-lg w-80 flex items-center justify-center">
          {outputResult ? (
            <span>{outputResult}</span>
          ) : (
            <span className="text-gray-500">Output Person</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
