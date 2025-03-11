import styled from "styled-components";
import colors from "../../config/colors";

export const Img = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Table = styled.table`
  width: min(95vw, 900px);
  margin-top: 128px;
  text-align: center;
  border-collapse: separate;
  border-spacing: 0;
  background-color: ${colors.base};
  color: ${colors.background};
  border: 4px solid ${colors.intermediate};
  border-top: none;
`;

export const Thead = styled.thead`
  position: sticky;
  top: 95px;
  z-index: 10;
  background-color: ${colors.primary};
  color: ${colors.base};
`;

export const Tr = styled.tr`
  td + td {
    border-top: 1px solid ${colors.intermediate};
  }
`;

export const Tbody = styled.tbody`
  tr:nth-child(odd) {
    background-color: ${colors.secondary};
  }
  tr:nth-child(even) {
    background-color: ${colors.base};
  }
`;

export const Th = styled.th`
  padding: 1rem;
  border: 3px solid ${colors.intermediate};
  border-top: 4px solid ${colors.intermediate};
`;

export const Td = styled.td`
  padding: 0.5rem;
`;

export const Caption = styled.caption`
  font-size: 1.5rem;
  color: ${colors.base};
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

export const Block = styled.span`
  display: inline-block;
  padding: 1px;
  margin: 2px;
`;
