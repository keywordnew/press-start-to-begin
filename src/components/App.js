import React from 'react'
import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'

const App = () => {
  return (
    <div className="press-start-to-begin">
      <Header subject="computer science" emoji="💻" emojiNoun="laptop" />
      <TodoList />
      <Footer />
    </div>
  )
}

export default App