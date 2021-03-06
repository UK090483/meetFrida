// import React from "react"
// // import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import styled from "styled-components"
// import { setMouse } from "../generic/Mouse/mouseRemote"
// function Button(props) {
//   const {
//     label,
//     // link,
//     // type = "link",
//     backgroundColor = "white",
//     color = "black",
//     // onClick = () => {},
//     testid = "",
//     children,
//     as,
//   } = props

//   // const inner = (
//   //   <Inner
//   //     data-testid={testid}
//   //     Sites
//   //     In
//   //     Menu
//   //     bgColor={backgroundColor}
//   //     color={color}
//   //     onMouseEnter={() => {
//   //       setMouse("link", true)
//   //     }}
//   //     onMouseLeave={() => {
//   //       setMouse("link", false)
//   //     }}
//   //   >
//   //     {label}
//   //   </Inner>
//   // )

//   return (
//     <StyledButton
//       role="button"
//       onMouseEnter={() => {
//         setMouse("link", true)
//       }}
//       onMouseLeave={() => {
//         setMouse("link", false)
//       }}
//       as={as}
//     >
//       {children}
//     </StyledButton>
//     // <React.Fragment>
//     //   {type === "link" && (
//     //     <Root as={Link} to={link}>
//     //       {inner}
//     //     </Root>
//     //   )}
//     //   {type === "externalLink" && (
//     //     <Root href={link} target="_blank" rel="noreferrer">
//     //       {inner}
//     //     </Root>
//     //   )}
//     //   {type === "clickButton" && (
//     //     <Root
//     //       as="div"
//     //       role="button"
//     //       onClick={onClick}
//     //       onMouseEnter={() => {
//     //         setMouse("link", true)
//     //       }}
//     //       onMouseLeave={() => {
//     //         setMouse("link", false)
//     //       }}
//     //     >
//     //       <Inner data-testid={testid} bgColor={backgroundColor} color={color}>
//     //         {label}
//     //       </Inner>
//     //     </Root>
//     //   )}
//     // </React.Fragment>
//   )
// }

// const StyledButton = styled.button`
//   font-weight: 800;

//   padding: 0.8rem 1.5rem;
//   border-color: ${({ theme, color }) => getColor(theme, color)};

//   -webkit-appearance: button;

//   color: ${({ theme, color }) => getColor(theme, color)};
//   font-size: 0.8rem;
//   background-color: transparent;
//   border-color: ${({ theme }) => theme.colors.black};
//   border-width: ${({ theme }) => theme.borderWidth};
//   border-style: solid;
//   border-radius: 50px;
//   text-rendering: auto;
//   color: buttontext;
//   letter-spacing: normal;
//   word-spacing: normal;
//   text-transform: none;
//   text-indent: 0px;
//   text-shadow: none;
//   display: inline-block;
//   text-align: center;
//   align-items: flex-start;
//   font: 800 13.3333px Arial;
//   cursor: default;

//   &:hover {
//     background-color: ${({ theme, color }) => getColor(theme, color)};
//     color: ${({ theme, bgColor }) => getColor(theme, bgColor)};
//   }

//   @media ${({ theme }) => theme.device.tablet} {
//     font-size: 1rem;
//     padding: 1.2rem 2rem;
//   }
// `

// const Root = styled.a`
//   font-weight: 800;
//   text-decoration: none;
//   cursor: none;
//   pointer-events: all;
//   font-size: 0.8rem;
//   @media ${({ theme }) => theme.device.tablet} {
//     font-size: 1rem;
//   }
// `

// const Inner = styled.div`
//   padding: 0.8rem 1.5rem;
//   @media ${({ theme }) => theme.device.tablet} {
//     padding: 1.2rem 2rem;
//   }
//   width: fit-content;
//   border: ${({ theme }) => theme.colors.black + " solid " + theme.borderWidth};
//   border-color: ${({ theme, color }) => getColor(theme, color)};
//   color: ${({ theme, color }) => getColor(theme, color)};
//   border-radius: 50px;
//   transition: background-color 0.4s, color 0.4s;
//   &:hover {
//     background-color: ${({ theme, color }) => getColor(theme, color)};
//     color: ${({ theme, bgColor }) => getColor(theme, bgColor)};
//   }
// `
// const getColor = (theme, c) => {
//   switch (c) {
//     case "black":
//       return theme.colors.black
//     case "white":
//       return theme.colors.white
//     case "lila":
//       return theme.colors.pink
//     case "red":
//       return theme.colors.red
//     default:
//       break
//   }
// }

// Button.propTypes = {
//   type: PropTypes.string,
//   link: PropTypes.string,
//   size: PropTypes.string,
//   children: PropTypes.node,
// }
// Button.defaultProps = {
//   theme: {
//     main: "palevioletred",
//   },
// }

// export default Button
