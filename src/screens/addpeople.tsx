import React, {useState} from 'react'
import { StyleSheet,View,Text,TextInput, TouchableOpacity,Alert} from 'react-native'
import { PeopleData } from '../Supabase_Service/supabaseservice';

function AddPeople() {

const [name , setName] = useState('');
const [email , setEmail] = useState('');
const [mobile_no , setMobileNo] = useState('');
const [area_no , setAreaNo] = useState('');

  const handleDataSave = async () => {
  if (!name || !email || !mobile_no || !area_no) {
    Alert.alert("Required Fields", "Please fill all fields");
    return;
  }

  try {
    await PeopleData({
      name,
      email,
      mobile_no,
      area_no,
    });

    Alert.alert("Success", "Data saved successfully");

    setName('');
    setEmail('');
    setMobileNo('');
    setAreaNo('');
  } catch (error: any) {
    Alert.alert("Error", error.message);
  }
};


  return (
   <View style = {styles.container}>
    <Text style = {styles.title}>Add People Data </Text>

    <TextInput
      placeholder='Full Name'
      placeholderTextColor={'#524c4c'}
      value= {name}
      onChangeText={setName}
      style = {styles.input}
    />

    <TextInput
    placeholder='Email Address'
    placeholderTextColor={'#524c4c'}
    value= {email}
    onChangeText={setEmail}
    style = {styles.input}
    />

    <TextInput
    placeholder='Mobile Number'
    placeholderTextColor={'#524c4c'}
    value= {mobile_no}
    onChangeText={setMobileNo}
    style = {styles.input}
    />

    <TextInput
    placeholder='Area Number'
    placeholderTextColor={'#524c4c'}
    value= {area_no}
    onChangeText={setAreaNo}
    style = {styles.input}
    />

    <TouchableOpacity style = {styles.button} onPress={handleDataSave}>
       <Text style = {styles.buttonText}>Add People</Text>
    </TouchableOpacity>
   </View>
  )
}

export default AddPeople

const styles = StyleSheet.create({

    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#f2f2f2'
    },

    title : {

        fontSize : 32,
        fontWeight : 'bold',
        marginBottom : 20,
        textAlign : 'center'
  },

  input: {
    borderWidth: 1,
    width: '90%',
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },

   button: {
        height: 50,
        width: '90%',
        backgroundColor: '#4A6CF7',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '600',
    },
})