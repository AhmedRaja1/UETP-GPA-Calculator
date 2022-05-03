import React, { Fragment } from 'react';
import Emoji from './Emoji';

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <a href="https://ahmedrajaspeaks.com">Made with <Emoji label="heart" symbol="❤️"/> by Raja Ahmed</a>
      </div>
      <footer className="text-center text-dark mt-3 my-2 p-2 ">
        <a href="https://ahmedrajaspeaks.com">Developed by a plebeian <span></span> CGPA Human <Emoji label="monkey" symbol="🙈"/> </a>
      </footer>
    </Fragment>
  )
}

export default Footer
