/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components'
import Styles from '../../assets/Styles'

const radius = css`${props => {
  switch (props.type) {
    case 'round':
      return Styles.shape.roundCorner
    default:
      return 10
    }
  }
}`

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 45px;
  border-radius: ${radius}px;
  margin: 10px 0px;
  padding: 0px 30px;
  shadow-color: black;
  shadow-0ffset: {
    y: 5;
  }
  shadow-opacity: 0.1;
  shadow-radius: 6px;
`
