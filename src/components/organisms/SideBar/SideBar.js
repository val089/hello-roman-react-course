import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, StyledLogo, StyledTitle, NavStyled } from './SideBar.styled';

const SideBar = () => {
  return (
    <Wrapper>
      <StyledLogo>
        <StyledTitle>Study Buddy</StyledTitle>
      </StyledLogo>
      <NavStyled>
        <Link to="/add-user">Add User</Link>
        <Link to="/">Users List</Link>
      </NavStyled>
    </Wrapper>
  );
};

export default SideBar;
