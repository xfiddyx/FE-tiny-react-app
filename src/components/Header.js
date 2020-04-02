import React from 'react';

const Header = props => {
  return (
    <header>
      <h1 key={props.name}>{`${props.name}'s to do list`}</h1>
    </header>
  );
};

export default Header;
