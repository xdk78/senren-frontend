import React from 'react'
import styled, { css } from 'utils/styled-components'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'

type StyledButtonIconProps = {
  award?: boolean
}

type ButtonIconProps = {
  award?: boolean
  children?: JSX.Element
  text?: string
  onClick?: () => void
}

const StyledButtonIcon = styled(motion.a)<StyledButtonIconProps>`
  color: ${({ theme }) => theme.nav.link};
  display: grid;
  grid-template-columns: 25px 1fr;
  margin: 35px 0px;
  font-weight: 600;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.nav.activeLink};
  }
  ${({ award }) =>
    award &&
    css`
      color: ${({ theme }) => theme.buttonFont};
    `}
`

const WrapButton = (Icon: IconType) => (props: ButtonIconProps) => (
  <StyledButtonIcon
    onClick={props.onClick}
    whileHover={{ scale: 1.1 }}
    award={props.award}
  >
    <Icon {...props} />
    {props.text}
  </StyledButtonIcon>
)

export default WrapButton
