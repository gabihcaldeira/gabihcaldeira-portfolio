import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
	border: 0;
	font-size: 16px;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Quicksand';
}

body{
 overflow-x: hidden;
 background-color: var(--gray-4);
}
 
::-webkit-scrollbar {
  border: none;
  display: none;
}

::-webkit-scrollbar-thumb {
  display: none;
}

button{
  cursor: pointer;
}

a{
  cursor: pointer;
  text-decoration: none;
}

ul,li{
 list-style: none;
 
}
`;
