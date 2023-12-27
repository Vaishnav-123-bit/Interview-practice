import { useState } from "react";
import "./App.css";

function App() {
  const [bgcolor, setBgcolor] = useState("red");

  function handleColorChange(color) {
    setBgcolor(color);
  }

  return (
    <>
      
          <div className='h-full ' style={{backgroundColor:bgcolor}}>
            <button onClick={() => handleColorChange('green')} className="p-5 border m-5 bg-black text-white rounded-lg">Black</button>
            <button onClick={() => handleColorChange('green')} className="p-5 border m-5">Green</button>
            <button onClick={() => handleColorChange('red')} className="p-5 border m-5">Red</button>
          </div>
        
    </>
  );
}

export default App;
