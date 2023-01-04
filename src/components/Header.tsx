import React from 'react';
import { Wrapper } from './Header.styles';

const Header: React.FC = () => (
  <Wrapper>
    <h1>Let's Play</h1>
    <div className="text">
      Invite your friend's to a battle of wits. The smartest wins!
    </div>
  </Wrapper>
);

export default Header;
