import React from 'react';
import img from '../images/Lable.png';

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-5 xl:flex-row xl:justify-between">
      <div className="flex items-center">
        <img className=" w-40 h-40 ml-5 -mt-9 border-2" src={img} alt="Label" />
      </div>
      {/* The rest of your code for buttons or other elements */}
    </header>
  );
}
