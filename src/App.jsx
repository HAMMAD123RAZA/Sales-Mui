import React from 'react'
import Nav from './nav/Nav'
import Mid from './nav/Mid'
import Hero from './hero/Hero'
import Product from './products/List'
import Compo from './products/Compo'
import Center from './center/Center'
import Module from './module/Module'
import Card from './paper/Content'
import Paper from './paper/Paper'
import Page from './trial/page'
import Color from './assets/dark mode/Color'

const App = () => {
  return (
    <>
      <Nav />
      {/* <Color /> */}

      <Hero />
      <Compo />
      <Center />
      <Module />
      <Paper />
      <Page />
    </>
  )
}

export default App
