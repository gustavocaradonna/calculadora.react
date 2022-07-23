import styled from "styled-components";

export const Cuadrado = styled.div`
  width: 70px;
  height: 70px;
  background-color: pink;

  &:hover {
    background-color: blue;
  }
`;

export const Rectangulo = styled(Cuadrado)`
  width: 150px;
  background-color: green;
`;

const desktopStartwidth = 800;

const desktop = `@media (min-width: ${desktopStartwidth}px)`;
const mobile = `@media (min-width: ${desktopStartwidth}px)`;
