import React from 'react-native';
import { Text, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

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

export default Movie;
