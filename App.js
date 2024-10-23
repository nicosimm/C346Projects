import React from 'react-native';
import { ScrollView, Text, View, StatusBar, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

function App() {
  return (
    <View>
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
    </View>
  );
}

const Movie= ({title, year, icon_name, poster}) => {
  return (
      <View>
          <Image
              source={poster}
              style={{ width: 400, height: 500 }} // Setting width and height
          />
          <Icon name={icon_name} size={20}/>
          <Text>{title} {year}</Text>
      </View>
  )
}

export default App;
