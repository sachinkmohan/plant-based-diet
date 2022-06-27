import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CustomBtn from './components/CustomBtn';
import logo from './plant.svg';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});


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

          Prabha, are you interested? <br></br>
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
      <ThemeProvider theme={theme}>
        <CustomBtn txt='Do nothing button'/>
      </ThemeProvider>
    </div>
  );
}

export default App;
