import styled from "styled-components";

export const HeaderContent = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  background-color: ${({ $colors }) => $colors.primary};
  box-shadow: 0 0 1rem ${({ $colors }) => $colors.shadow};
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ $colors }) => $colors.base};
`;
