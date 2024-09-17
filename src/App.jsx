import React from 'react';
import './App.module.scss';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { Wallpaper } from './Components/Wallpaper/Wallpaper';
import { Weather } from './Components/Weather/Weather';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SearchBar/>
        <Container>
            <Wallpaper/>
            
            <Weather/>
        </Container>
      </Provider>   
    </div>
  );
}

export default App;
