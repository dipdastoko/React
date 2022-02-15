import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(55);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '3px solid blue',
    borderRadius: '10px'
  }
  return (
    <div className='product' style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  )
}

function User(props) {
  return (
    <div className='product'>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}


/* 
 const products = [
    { name: 'Mobile', price: 15000 },
    { name: 'Laptop', price: 150000 },
    { name: 'Camera', price: 50000 },
    { name: 'Watch', price: 5000 },
    { name: 'Shoe', price: 500 },
  ]
*/

/* 
{
  products.map(product => <Product name={product.name} price={product.price}></Product>)
}

<Product name="Mobile" price="12000"></Product>
<Product name="Laptop" price="120000"></Product>
<Product name="Camera" price="50000"></Product>
<Product name="Mobile" price="12000"></Product>
<Product name="Mobile" price="12000"></Product>
 */

export default App;
