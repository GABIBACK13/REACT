import styled from 'styled-components';

export const Title = styled.h1`
  background-color: blue;
  color: ${(props) => {
    let color = (props.isRed ? 'red' : undefined);
    if (!color) {
      color = (props.isGreen ? 'green' : 'rgba(255,255,255,0.8)');
    }
    return color;
  }};
  padding: 20px;
  text-align: center;
  border-radius: 7px;
  border: 20px solid rgba(15, 63, 255, 0.75);
  box-shadow: 0px 0px 50px rgb(15, 63, 255);
`;

export const Box = styled.div`
background-color: black;
  width:${props => {
    if(props.isRetangle) return '300px';
    if(props.isSquare) return '200px';
    return '100px';
  }};
  height: 200px;
`;