import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import ResultApi from './components/ResultApi';

function App() {

  const [inputValue, setInputValue] = useState("");
  const [showResult, setShowResult] = useState(false);


  const handleShowResult = () => {
    setShowResult(true);
  }
  
  
  return (
      <main className="main-container">

        <Input inputValue={inputValue} setInputValue={setInputValue} handleShowResult={handleShowResult} />
    
        {showResult && <ResultApi inputValue={inputValue} />}
      </main>
  );
}

export default App;



