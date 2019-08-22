import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { isFunctionExpression, functionExpression } from '@babel/types';
export default class App extends Component{
  render(){
    return(
      <>
      <View style = {styles.Header}>
        <Text style = {styles.HeaderText}>App bom!!!</Text>
      </View>
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
      </>
    );
  }
}


const styles = StyleSheet.create({
  Header: {
    
    backgroundColor:  "#999",
    margin: 0,
    padding: 15,
    
  },
  HeaderText:{
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
  },
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
