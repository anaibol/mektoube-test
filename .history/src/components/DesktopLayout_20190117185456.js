import React from 'react'

const Columns = styled.div`

`

const Column = styled.div`

`


export default function MobileLayout() {
  return (
    <Router>
      <Columns path="*">
      </Columns>
    </Router>
  )
}