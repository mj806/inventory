import React from 'react'
import { ErrorCss } from './Styles/Error.styled'

function Error() {
  return (
    <ErrorCss>
    <h1>404... Unknown Page</h1>
    <br/>
    <p>I'm Sorry, but this page does not exist...</p>
    </ErrorCss>
  )
}

export default Error