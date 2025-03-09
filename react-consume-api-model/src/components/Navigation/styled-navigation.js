import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4rem;
  margin-right: min(5vw, 100px);
  padding: 1rem;
  list-style: none;
  background-color: ${({ $colors }) => $colors.primary};
  color: ${({ $colors }) => $colors.base};
`;

export const NavItem = styled.li`
`;