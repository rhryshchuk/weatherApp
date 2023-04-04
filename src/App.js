import React, { useState } from 'react';
import Weather from './components/Weather';

const App = () => {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // handle form submission
  };

  const handleChange = (e) => {
    setCity(e.target.value)
  };

  return (
    <div>
      <div className='center'>
        <header><img src='/icons/Header-logo.png' alt='header-logo' /><span className='header'>Weather today</span></header>
        <form onSubmit={handleSubmit}>
          <input type="text" value={city} onChange={handleChange} />
        </form>
      </div>
      <Weather city={city} />
    </div>
  );
};

export default App;
