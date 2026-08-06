import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import {car, CarManufacature} from './Car'
import {createRoot} from 'react-dom/client'
// import {carManufacture} from './Car'

// hello=function(){
//   return "Hello World";
// }
// const hello = ()=> "Hello World!";
var hello = ()=>{
 return "Hello World!"
};

function Call(){
  var carObj = {
    brand: "Ford",
    model: "Mustang",
    year: 1964,
    color: "red",
    fullDetails: function() {
      return this.brand + " " + this.model + " (" + this.year + ") - " + this.color;
    }
  }
return (
  <div>
    <h1>Call Method:</h1>
    <p>{carObj.fullDetails()}</p>
  </div>
);
}
function Counter({initialCount = 0}) {
  const [count, setCount] = useState(initialCount);
  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      </button>
      );
}

function GetName({name, setName}){
  return (
    <div>
      <h1>Get Name</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Your car name is: {name}</p>
    </div>
  );
}
function CarAlert() {
  const style={
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold"
  }
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button style={style} className='btn-primary' onClick={myfunc}>Click me</button>
  );
}

function MyFormContent(){
  const [input,  setInput] = useState({
    Name:'kaveen',
    Age: 25,
    Qualification: 'BSc',
    country: 'Sri Lanka',
    state: 'Western Province'
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput1) => ({
      ...prevInput1,
      [name]: value
    }));
  };
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    alert(`Name: ${input.Name}, Age: ${input.Age}, Qualification: ${input.Qualification}, Country: ${input.country}, State: ${input.state}`);
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>Name:</label><input type="text" name="Name" value={input.Name} onChange={handleChange} />
      <p>Your name is: {input.Name}</p> 
      <label>Age:</label><input type="text" name="Age" value={input.Age} onChange={handleChange} />
      <p>Your age is: {input.Age}</p>
      <label>Qualification:</label><input type="text" name="Qualification" value={input.Qualification} onChange={handleChange} />
      <p>Your qualification is: {input.Qualification}</p>
      <label>Country:</label><input type="text" name="country" value={input.country} onChange={handleChange} />
      <p>Your country is: {input.country}</p>
      <label>State:</label><input type="text" name="state" value={input.state} onChange={handleChange} />
      <p>Your state is: {input.state}</p>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  )
}
function MyformTextArea(){
  const [text, setText1] = useState('');
  const handlechange =(e)=>{
    setText1(e.target.value);
  }
  return(
    <div> TextArea:
      <textarea value={text} onChange={handlechange} />
      <p>Your text is: {text}</p>
    </div>
  );
}

function App() {
  
  const [count, setCount] = useState(0)
    const [name, setName] = useState("");
    
    
    const element = <h1>Hello, world!</h1>;
const model =["BMW", "Volvo", "Saab", "Ford"];
var [s,...specificModel] = model;
console.log("model: ", s, ", specificModel: ", specificModel);
  const c= new car(name || "BMW", "2014");
  // const hello = ()=> "Hello World!";
  window.addEventListener("load", c.changeColor);
  const  carName = [
      {id: 1, name: "BMW", year: 2014},
      {id: 2, name: "Volvo", year: 2015},
      {id: 3, name: "Saab", year: 2001},
      {id: 4, name: "Ford", year: 2010}
  ];
  return (
  <>
 <Call> sales car</Call> {/*-- call method deesn't work in input element text given in the elements */}
    <div>
      <h1>Welcome to Website</h1>
      <h2>{c.display()}</h2>
      <h3>{hello()}</h3>
    </div>
    <div id="demo" style={{ color: "blue" }}>Hi </div>
    {/* {c.MyList({values: ["BMW", "Volvo", "Saab", "Ford"]})} */}
    <c.MyList values={["BMW", "Volvo", "Saab", "Ford"]} />
    <Counter initialCount={11} />
    <GetName name={name} setName={setName} />
    {element}
    <CarAlert />
    
    <h1>Car List:</h1>
    <ul>
      {carName.map((car) => (
        <li key={car.id}>{car.name} - {car.year}</li>
      ))}
    </ul>
    <MyFormContent />
    <MyformTextArea />
  </>
    /*
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>*/
  )
}

export default App
