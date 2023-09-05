import React from 'react';
import './App.css';

function App() {
  const handleOnclick = (e: React.MouseEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.dataset.x);
    console.log(e.currentTarget.dataset.y);
  };

  return (
    <div className="App">
      <input type="button" readOnly value={'÷'} data-x={'/'} data-y={'data-*だからなんでもいけるよ'} onClick={handleOnclick} />
    </div>
  );
}

export default App;
