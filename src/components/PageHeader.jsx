import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

const PageHeader = () => {
  return (
    <>
      <Segment>
        <Header as='h1'>
          <img src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"
          />
        </Header>
      </Segment>
    </>
  )
}

export default PageHeader

