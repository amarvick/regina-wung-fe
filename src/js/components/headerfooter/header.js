import React from 'react';
import './Header.scss';

function Header() {   
  const parallaxStyling = {
    backgroundImage: `url('${require('../../../images/ReginaBooks.jpeg')}')`,
    height: '500px',
    opacity: '0.5',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'center',
    textAlign: 'center',
  };

  return (
    <div id="header" style={{backgroundColor: '#344A53'}}>
      <div style={parallaxStyling}>
        <h1 id="header-name">Regina Wung</h1>
      </div>
    </div>
  );
}

export default Header;
