// now importing the Heading component where we are wrote the css in js component

import {Heading, CustomButton} from './styledComponents'

import './App.css'

// now directly call the Heading component
const App = () => (
  <>
    <div>
      <Heading>Hello World</Heading>
      <CustomButton type="button">Click</CustomButton>
      <CustomButton type="button" outline>
        {' '}
        {/* if its true show the outline button */}
        Click
      </CustomButton>
    </div>
  </>
)

export default App
