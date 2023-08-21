import React, { useEffect, useState } from 'react';

const bgimg = require('./../../images/background/bg-boxed.jpg');

const Switcher = () => {
  const [stylePath, setStylePath] = useState('./assets/css/skin/skin-1.css');

  useEffect(() => {
    const homepage3 = /\/homepage3/i;

    if (homepage3.test(window.location.href)) {
      document.body.classList.add('boxed');
      document.body.classList.add('bg-repeat');
      document.body.id = 'bg';
      document.body.style.backgroundImage = `url(${bgimg})`;
    } else {
      document.body.classList.remove('boxed');
      document.body.classList.remove('bg-repeat');
      document.body.id = '';
      document.body.style.backgroundImage = '';
    }

    setStylePath('./assets/css/skin/skin-1.css');
  }, []);

  return (
    <>
      <link rel="stylesheet" type="text/css" href={stylePath} />
    </>
  );
};

export default Switcher;
