import React from 'react'
import { View, Text, Pressable, ImageBackground, TextInput } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const Index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Home_Main.jpeg')}
        resizeMode='cover'
        style={styles.imageBackground}
      >
        <Text style={styles.mainText}>
          Help when you need it, at your fingertips
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor='#000'
            placeholder='What services do you need?'
          />
          <Ionicon name="search-outline" size={20} style={styles.searchIcon} />
        </View>
        <Pressable
          android_ripple={{ color: '#fff', radius: 100 }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#000' : '#292363',
            },
            styles.btn]}
        >
          <Text style={styles.btnContent}>
            Continue
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

export default Index