import { styled } from 'styled-components'
import { breakPoints, colors } from '../../styles'

type InputGroupProps = {
  $maxwidth?: string
}

type RowProps = {
  $margintop?: string
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${(props) => props.$margintop || 'auto'};

  @media (max-width: ${breakPoints.tablet}) {
    display: block;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  max-width: ${(props) => props.$maxwidth || 'auto'};
  flex: auto;
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.error {
      border: 1px solid red;
    }
  }

  @media (max-width: ${breakPoints.tablet}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${colors.black};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  &.active {
    background-color: ${colors.green};
  }

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    margin-top: 8px;
    width: 100%;
  }
`
