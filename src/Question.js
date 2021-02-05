import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import questions from './data';
const Question = ({ id, title, info }) => {

  const [showInfo, setshowInfo] = useState(false);

  const toggleInfo = () => {
    setshowInfo(!showInfo);
  }

  return <article className='question'>
    <header>
      <h3>{title}</h3>
      <button className="btn" onClick={toggleInfo}>
        {showInfo ? <MdExpandLess /> : <MdExpandMore />}
      </button>
    </header>
    {showInfo && <p>{info}</p>}
  </article>;
};

export default Question;
