import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
export default class App extends Component{
  render(){
    return(
      <ScrollView style = {styles.container}>
        <View style = {styles.postContainer}>
          <Text style = {styles.postTitle}>
            Estudando React Native
          </Text>
          <Text style = {styles.postDescription}>Salve Salve</Text>
        </View>
        <View style = {styles.postContainer}>
          <Text style = {styles.postTitle}>
            Estudando React Native
          </Text>
          <Text style = {styles.postDescription}>Salve Salve</Text>
        </View>
        <View style = {styles.postContainer}>
          <Text style = {styles.postTitle}>
            Estudando React Native
          </Text>
          <Text style = {styles.postDescription}>Salve Salve</Text>
        </View>
        <View style = {styles.postContainer}>
          <Text style = {styles.postTitle}>
            Estudando React Native
          </Text>
          <Text style = {styles.postDescription}>Salve Salve</Text>
        </View>
        <View style = {styles.postContainer}>
          <Text style = {styles.postTitle}>
            Estudando React Native
          </Text>
          <Text style = {styles.postDescription}>Salve Salve</Text>
        </View>
        <View style = {styles.postContainer}>
          <Text style = {styles.postTitle}>
            Estudando React Native
          </Text>
          <Text style = {styles.postDescription}>Salve Salve</Text>
        </View>
        <View style = {styles.postContainer}>
          <Text style = {styles.postTitle}>
            Estudando React Native
          </Text>
          <Text style = {styles.postDescription}>Salve Salve</Text>
        </View>
        <View style = {styles.postContainer}>
          <Text style = {styles.postTitle}>
            Estudando React Native
          </Text>
          <Text style = {styles.postDescription}>Salve Salve</Text>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  postDescription: {
    color: "#666",
  },
});
