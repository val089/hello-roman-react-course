import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 110px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const StyledLogo = styled.div`
  margin-top: 19px;
  width: 100%;
  background: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  text-align: right;
`;

export const StyledTitle = styled.h1`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.mm};
  padding: 13px 15px 13px 44px;
`;

export const NavStyled = styled.nav`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  text-align: right;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: bold;
    margin: 10px;
    padding: 10px;
    position: relative;

    :hover::after {
      position: absolute;
      content: '';
      top: 50%;
      right: -12%;
      height: 2px;
      width: 15px;
      background: ${({ theme }) => theme.colors.grey};
    }
  }
`;
