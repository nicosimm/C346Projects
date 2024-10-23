import React from 'react-native';
import { ScrollView, Text, StatusBar } from 'react-native';
import Movie from './components/Movie.js'

function App() {
  return (
        <ScrollView>
            <StatusBar hidden={true}/>
            <Movie
                title="Doctor Sleep"
                year="2019"
                icon_name="baby"
                poster={require('./img/doctor-sleep.jpg')}  // Pass the movie poster as a prop
            />
            <Movie
                title="Midway"
                year="2020"
                icon_name="person-rifle"
                poster={require('./img/midway.jpg')} // Path to the image
            />
        </ScrollView>
  );
}

export default App;
