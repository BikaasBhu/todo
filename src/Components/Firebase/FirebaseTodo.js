import React, { useState } from "react";
import './FirebaseTodo.css'
const FirebaseTodo = () => {
  const [img, setImg] = useState(null);

  const onImageChange = (e) => {
    setImg(URL.createObjectURL(e.target.file[0]));
  };

  return (
    <div>
      <input type="file" onChange={onImageChange} accept='image/*'/>
      <img src={img} alt='not' className='img' />
    </div>
  );
}
export default FirebaseTodo