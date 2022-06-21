import logo from './plant.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the plant based diet website!! <br></br>

          <br></br>
          Inspired by Game Changers documentary on Netflix!
          <br></br><br></br>
          This website is an initiative by Sachin, RK and Asmita!!  <br></br>
          <br></br>

          We are looking for contributors. <br></br>

          Ankit, are you interested? <br></br>
          Sid, are you interested? <br></br>
          Shilpa, are you interested? <br></br>
        </p>
        <a
          className="App-link"
          href="https://gamechangersmovie.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow this link to enlightenment..
        </a>
      </header>
    </div>
  );
}

export default App;
