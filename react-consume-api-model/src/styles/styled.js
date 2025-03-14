import styled from "styled-components";
import colors from "../config/colors";
export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 2rem;

  label {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${colors.background};
    min-height: 100px;
  }

  input {
    padding: 1rem 0.5rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 3px;
    outline: none;
    width: 88%;
    &:focus {
      border: 2px solid ${colors.primary};
    }
    ::placeholder {
      color: ${colors.intermediate};
    }
  }

  select {
    width: 88%;
    padding: 1rem 0.5rem;
    margin-bottom: calc(1rem + 12px);
    border: none;
    border-radius: 3px;
    outline: none;
    text-align: center;
    font: normal 700 1.15rem sans-serif;

    &:focus {
      border: 2px solid ${colors.primary};
    }
    ::placeholder {
      color: ${colors.intermediate};
    }
  }

  option: {
    background: ${colors.base};
    color: ${colors.background};
    border: none;
  }
`;
