import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { setMouse } from "../../../generic/Mouse/mouseRemote"

function ArtworkContainer({ children, onClick, loaded, artwork }) {
  return (
    <Root
      data-testid={"artwork-prev"}
      role="button"
      loaded={loaded}
      onClick={() => onClick(artwork)}
      onMouseEnter={() => {
        setMouse("link", true)
      }}
      onMouseLeave={() => {
        setMouse("link", false)
      }}
    >
      {children}
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  background-clip: padding-box;
  margin-bottom: 80px;
`

ArtworkContainer.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  loaded: PropTypes.bool,
}

export default ArtworkContainer