import styled from "styled-components";
import colors from "../../config/colors";
export const FormPicture = styled.form`
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: min(40vw, 350px);
    height: min(40vw, 350px);
    margin: 2rem auto;
    border-radius: 50%;
    border: 5px dashed ${colors.primary};
    background-color: ${colors.intermediate};
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    &:hover {
      border: 4px solid ${colors.intermediate};
      background-color: ${colors.secondary};
      color: ${colors.primary};
      transform: scale(1.05);
      text-decoration: underline;
      cursor: pointer;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  input {
    display: none;
  }
`;
