import styled from "styled-components";
import colors from "../../config/colors.js";

export const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const MainHeader = styled.div`
  margin-bottom: 2rem;
`;

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 1rem;
  list-style: none;
  width: min(90%, 900px);
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: min(280px, 38vw);
  height: min(240px, 31vw);
  cursor: pointer;
  border: 4px solid ${colors.intermediate};
  border-radius: 12px;
  background-color: ${colors.base};
  box-shadow: 2px 2px 0px rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 3px solid ${colors.primary};
    background-color: ${colors.secondary};
    box-shadow: 5px 4px 0px rgba(255, 255, 255, 0.4);
    transform: translate(-3px, -2px);
  }
`;

export const Text = styled.span`
  display: block;
  text-align: center;
  color: ${colors.background};
  font-weight: bolder;
  font-size: 1.4rem;
`;
