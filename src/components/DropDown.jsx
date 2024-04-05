import {React, useState} from 'react';
import { DiAptana,DiAtom,DiApple,DiAndroid,DiCoda } from "react-icons/di";
import './DropDown.css';

const DropDown = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
      setIsOpen(!isOpen)
    }

  return (
    <div className='dropDown'>
        <div className={`list ${isOpen ? 'is-active' : ''}`}>
            <span className={`btn-style ${isOpen ? 'span-active' : ''}`}><DiApple /></span>
            <span className={`btn-style ${isOpen ? 'span-active' : ''}`}><DiAndroid /></span>
            <span className={`btn-style ${isOpen ? 'span-active' : ''}`}><DiAtom /></span>
            <span className={`btn-style ${isOpen ? 'span-active' : ''}`}><DiCoda /></span>
        </div>
        <span className='btn-style' onClick={handleMenu}><DiAptana /></span>
    </div>
  )
};

export default DropDown;