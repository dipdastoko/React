import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyComponent name='Microsoft' price='50000'></MyComponent>
      <MyComponent name='Apple' price='60000'></MyComponent>
      <MyComponent name='Google' price='0000'></MyComponent>

    </div>
  );
}

function MyComponent(props) {
  const myStyle = {
    backgroundColor: 'lightblue',
    border: '3px solid blue',
    margin: '20px',
    padding: '10px',
    borderRadius: '10px'
  }
  const handleAddPoints = () => {
    console.log('clicked');
  }
  return (
    <div style={myStyle}>
      <h1>Yo Yo mamma! {props.name}</h1>
      <h3>Asking Money, {props.price}</h3>
      <button onClick={handleAddPoints}>Add Points</button>
      <p style={{
        color: 'magenta',
        fontWeight: 'bold'
      }}>I can write my own component</p>
    </div>
  )
}

export default App;
