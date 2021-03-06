import { createGlobalStyle } from "styled-components"
import { fluidFont } from "./theme"

const Global = createGlobalStyle`

body {
  font-family: "Montserrat", sans-serif;
  color: #000000;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 800;
  line-height: 1.1;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}



h1 {
  font-family: "Montserrat", sans-serif;
  ${fluidFont(30, 100, 320, 1920)}
}
h2 {
  font-family: "Montserrat", sans-serif;
  ${fluidFont(29, 80, 320, 1920)}
}
h3 {
  font-family: "Montserrat", sans-serif;
  ${fluidFont(24, 60, 320, 1920)}
}
h4 {
  font-family: "Montserrat", sans-serif;
  ${fluidFont(20, 50, 320, 1920)}
}
h5 {
  font-family: "Montserrat", sans-serif;
  ${fluidFont(16, 40, 320, 1920)}
}
h6 {
  font-family: "Montserrat", sans-serif;
  ${fluidFont(15, 30, 320, 1920)}
}

p,input,button,
li {
  font-weight: 500;
  font-family: "Montserrat", sans-serif;


  
    
  font-size:calc(.9375rem + 15.6*(100vw - 20rem)/1280);

  @media screen and (min-width: 1600px)
 {
    font-size: 1.9125rem;
}

 
  line-height: 1.3em;
  padding-bottom: 20px;
}



body::-webkit-scrollbar {
  display: none;
}

a {
  color: #fa464c;
}

.page-layout {
  transition: opacity 1s;
  opacity: 1;
}


@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}
html {
  /* font: 112.5%/1.45em georgia, serif; */
  box-sizing: border-box;
  overflow-y: scroll;
}
* {
  box-sizing: border-box;
  -ms-user-select: None;
 -moz-user-select: None;
 -webkit-user-select: None;
 user-select: None;
}

html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media ${({ theme }) => theme.device.tablet} {
  .frida_mouse_active {
  cursor: none;
}
  
}

.snipcart-cart--opened {
  .page-layout {
    transition: opacity 1s;
    opacity: 0;
  }
  .frida_mouse_active {
    cursor: auto;
    #mouse{
      display:none;
    }
  }
}

.snipcart-item-line__container {
  margin-bottom: 10px !important;
}
.snipcart-layout {
  font-family: "Montserrat", sans-serif !important;
  font-weight: 500;
}
.snipcart-item-quantity__quantity,
.snipcart-item-quantity__label {
  opacity: 0;
}


.Frida_ReactModalPortal{
  .ReactModal__Overlay {
    z-index:3000;
    transform:translate3d(100%,0,0);
    opacity:0;
    transition: transform 300ms ease-in-out, opacity 300ms;
}

.ReactModal__Overlay--after-open{
  transform:translate3d(0,0,0);
  opacity:1;
  
    
}

.ReactModal__Overlay--before-close{
  transform:translate3d(100%,0,0);
  opacity:0;
}
  .ReactModal__Overlay{
  
  .ReactModal__Content{
    left:0 !important;
    right:0 !important;
    top:0 !important;
    bottom:0 !important;
    border-width:0 !important;
    padding:0 !important;
   
  }
}
}

.Frida_no_scroll{
  overflow: hidden ;
}


`
export default Global
