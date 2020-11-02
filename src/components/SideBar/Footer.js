import React from 'react';
import {
  SideFoot, MiddleFoot, Credits,
} from '../../styles/StyledComponents';
import Twitter from '../../assets/icons/twitter.png';
import Facebook from '../../assets/icons/facebook.webp';
import footerHelper from '../../helpers/FooterHelper';

const Footer = () => {
  const icons = [
    Twitter,
    Facebook,

  ];

  return (
    <SideFoot>
      <MiddleFoot>
        {icons.map(icon => footerHelper(icon))}
      </MiddleFoot>
      <MiddleFoot>
        <Credits>2020 Original design by Luzaks.</Credits>
      </MiddleFoot>
    </SideFoot>

  );
};

export default Footer;