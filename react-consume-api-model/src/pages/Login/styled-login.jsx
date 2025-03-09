import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ $colors }) => $colors.base};
`;

export const Paragraph = styled.p`
  text-align: center;
  color: ${({ $colors }) => $colors.base};
`;

export const Form = styled.form`
  background-color: ${({ $colors }) => $colors.intermediate};
`;
