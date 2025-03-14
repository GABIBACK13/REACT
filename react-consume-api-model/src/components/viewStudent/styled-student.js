import styled from "styled-components";
import colors from "../../config/colors";

export const Profile = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 96px;
`;

export const ProfileImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  width: 130px;
  border-radius: 50%;
  border: 3px solid ${colors.primary};
  box-shadow: 0px 0px 5px ${colors.shadow};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: 50%;
  }
`;

export const ProfileHeader = styled.div`
  h1 {
    font-size: 2.8rem;
    font-weight: 600;
  }
  h2 {
    font-size: 2rem;
    font-weight: 400;
  }
  padding: 1rem;
  border-bottom: 5px solid ${colors.primary};
`;

export const ProfileBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.5rem;
  padding: 1.5rem;
  text-align: left;
  font-size: 1.2rem;
  div::before {
    content: "--  ";
    color: ${colors.background};
    font-weight: 600;
  }
`;

export const Edit = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: -12%;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 2px solid ${colors.primary};
  box-shadow: 0px 0px 5px ${colors.shadow};
  border-radius: 50%;
  background-color: ${colors.background};
`;
