import React, {useState} from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {Text, View, Alert, Button, Image} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/FontAwesome6";

const questions = [
    {
        question: "Whos that pokemon!",
        image: require('./img/squirtle.jpg'),
        options: ['Seattle', 'Squirtle', 'Squirrel'],
        answer: 'Squirtle',
    },
    {
        question: "Whos that pokemon!",
        image: require('./img/jigglypuff.jpg'),
        options: ['Jigglypuff', 'Kirby', 'Puffie'],
        answer: 'Jigglypuff',
    },
    {
        question: "Whos that pokemon!",
        image: require('./img/gengar.jpg'),
        options: ['Haunter', 'Granger', 'Gengar'],
        answer: 'Gengar',
    },
];

const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(""));

const handlePickerChange = (value, index) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = value;
    setSelectedAnswers(newAnswers);
};

const submitAnswers = () => {
    const score = selectedAnswers.reduce((count, answer, index) => {
        return answer === questions[index].answer ? count + 1 : count;
    }, 0);
    Alert.alert(`You have ${score} correct answers!`);
};


function App() {
    return (
        <ScrollView style={{ padding: 20 }}>
            <Icon name={"apple-whole"} size={20} color={'#808080'}><Text>Nico's Quiz</Text></Icon>
            <StatusBar hidden={true} />
            {questions.map((q, index) => (
                <View key={index} style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 18 }}>{q.question}</Text>
                    <Image source={q.image} style={{ width: 350, height: 350 }} />
                    <RNPickerSelect
                        onValueChange={(value) => handlePickerChange(value, index)}
                        items={q.options.map(option => ({ label: option, value: option }))}
                    />
                </View>
            ))}
            <Button title="SUBMIT ANSWERS" onPress={submitAnswers} />
        </ScrollView>
    );
}

export default App;
