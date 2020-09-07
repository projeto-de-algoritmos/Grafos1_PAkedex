import styled from 'styled-components';

export const Container = styled.div`
  font-family: sans-serif;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const CicleGraph = styled.div`
  & {
    position: relative;
    width: 400px;
    height: 400px;
    margin: calc(60px / 2 + 0px);
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid teal;
    width: calc(100% - 2px * 2);
    height: calc(100% - 2px * 2);
    border-radius: 50%;
  }
`;

interface CircleProps {
  image: string;
}

export const CicleImg = styled.img.attrs((props: CircleProps) => ({
  src: props.image,
}))<CircleProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90px;
  height: 90px;
  margin: calc(-90px / 2);
  background: ${(props) => props.image};
  border-radius: 50%;
`;

export const Cicle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  margin: calc(-60px / 2);
  background: red;
  border-radius: 50%;
`;
