import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  colorSubNav: "#707070",
  btnBackground: "#fff",
  activeBtn: "#e4e4e4",
  cardBackGround: "#f7f7f7",
  cardInnerBack: "#ffffff",
  noteBackground: "#ffeed0",
};
export const darkColor = {
  body: "#000",
  fontColor: "#fff",
  colorSubNav: "#fff",
  btnBackground: "#a7a7a7",
  activeBtn: "#393c3c",
  cardBackGround: "#1c1c1c",
  cardInnerBack: "#000",
  noteBackground: "#1c1c1c",
};

export const ClobalStyles = createGlobalStyle`
body {
    background-color:${(props) => props.theme.body} ;
}
.sub-nav {
  color:${(props) => props.theme.colorSubNav};
  font-size: 16px;
}
.btn-outline {
  background-color: ${(props) => props.theme.btnBackground};
  color:${(props) => props.theme.fontColor};

}
.btn-outline-active {
  background-color: ${(props) => props.theme.activeBtn};
}
.card {
  background-color: ${(props) => props.theme.cardBackGround};
  color:${(props) => props.theme.fontColor};
}
.card-inner {
  background-color:${(props) => props.theme.cardInnerBack};
  border-radius: 4%;
}
.note{
  background-color:${(props) => props.theme.noteBackground};

}
.list-group-item{
    background-color:${(props) => props.theme.noteBackground} ;

}
`;
