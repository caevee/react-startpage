import React from 'react'
import Clock from "./Clock";
import LinkContainer from "./LinkContainer";
import Header from "./Header";

export default function App() {
  return (
    <div>
      <Clock />
      <div className="container">
        <Header />
        <LinkContainer />
      </div>
    </div>
  )
}
