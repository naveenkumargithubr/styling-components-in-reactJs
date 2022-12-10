import styled from 'styled-components'

export const Heading = styled.h1`
  font-family : "Roboto"
  font-size: 16px;
  color: blue;
`

export const CustomButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;

  // here we wrote a call back funtion to the js based on the boolean value
  color: ${props => (props.outline ? '#0070c1' : '#ffffff')};
  border-radius: 4px;
  border: 2px solid #0070c1;

  // here we wrote a call back funtion to the js based on the boolean value
  background-color: ${props => (props.outline ? '#ffffff' : '#0070c1')};
`
