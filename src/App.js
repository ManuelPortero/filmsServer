import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';


function App() {
  return (
    <div className="App">
      {/* Nav */}
       <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      
    </div>
  );
}

export default App;


// API key : 1c98a2fcd593668a5d62531a5d210bb2
// Ejemplo solicitud de la API : https://api.themoviedb.org/3/movie/550?api_key=1c98a2fcd593668a5d62531a5d210bb2