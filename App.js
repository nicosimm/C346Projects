import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {Text, View, TextInput, Alert, TouchableOpacity, Button} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {ToastAndroid} from "react-native";

const InputBox = ({label, onChangeText})=> {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
        </View>
    );
};

function App() {
    const [pw,SetPw]=useState(" ");
    const [name,SetName]=useState(" ");
    const [userType, SetUserType] = useState(" ");
  return (
    <View>
          <StatusBar hidden={true}/>
          <Text>User Type:</Text>
          <RNPickerSelect
              onValueChange={(value) => SetUserType(value)}
                items={[
                    { label: 'Admin', value: 'Admin' },
                    { label: 'Guest', value: 'Guest' },
                ]}
          />
          <InputBox label="User Name:" onChangeText={(text) => SetName(text)}/>
          <InputBox label="Password:" onChangeText={(text) => SetPw(text)}/>
          <Button title="Log In"  onPress={() => Alert.alert(`Welcome ${userType} ${name}`)}/>
          <TouchableOpacity onPress={() => ToastAndroid.show(`Welcome ${userType} ${name}`,ToastAndroid.SHORT)}><Text>LOG IN</Text></TouchableOpacity>
    </View>
  );
}

export default App;
