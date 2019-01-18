import React from 'react'

export default function Home({ user }) {
  console.log(user)
  return (
    <div>
      {JSON.stringify(user)}
    </div>
  )
}