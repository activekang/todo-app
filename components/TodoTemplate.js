import React from 'react';
import './TodoTemplate.css';
import mImg from '../images/m3.png';
import {AiOutlineTwitter, AiOutlineInstagram, AiFillGithub} from 'react-icons/ai';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리앱
      <img className='imwidth' src={mImg} alt='memo'/>
      </div>
      <div className="content">{children}</div>
    
      <div className="app-footer">일정관리앱v1.0 - 개발:강병권
       <span>&nbsp;</span>
       <AiOutlineTwitter/> <AiOutlineInstagram/> <AiFillGithub/>
      </div>

    </div>
  );
};

export default TodoTemplate;
