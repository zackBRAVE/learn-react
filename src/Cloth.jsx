import { useState } from 'react'
import MyButton from './MyButton'
import Profile from './Profile'
import './Cloth.css'
import './MyButton.css'

let user = {
  name: 'John',
  age: 18,
}

// let content = ''
// if (true) {
//   content = <Profile />
// }

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
]

function Product() {
  const listItems = products.map(product => <li key={product.id}>{product.title}</li>)

  return <ul>{listItems}</ul>
}

function ShoppingList() {
  const listItems = products.map(product => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen',
      }}
    >
      {product.title}
    </li>
  ))

  return <ul>{listItems}</ul>
}

function SharedButton({ count, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      Shared clicked {count} times
    </button>
  )
}

export default function Cloth() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <h1 className="welcome">
        Welcome {user.name} to <br /> React
      </h1>
      <MyButton />
      <MyButton />
      <SharedButton count={count} onClick={handleClick} />
      <SharedButton count={count} onClick={handleClick} />
      {/* {content} */}
      {false ? <Profile /> : null}
      {true && <Profile />}
      <Product />
      <ShoppingList />
    </>
  )
}
