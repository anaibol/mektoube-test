import React from 'react'

export default function MobileLayout() {
  return (
    <Router>
      <Tabs path="*">
        <Tab to="/home">Home</Tab>
        <Tab to="/encounters">Encounters</Tab>
        <Tab to="/chat">Chat</Tab>
      </Tabs>
      <Home path="/" />
      <Encounters path="/" />
      <Login path="/" />
      <Chat path="/" />
    </Router>

  )
}