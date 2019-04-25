import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

import ChatBot from 'react-native-chatbot';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

  steps=[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
  ];



    return(
      <View style={{flex: 1, paddingTop:20}}>
        <ChatBot  headerTitle="Speech Recognition"
  speechSynthesis={{ enable: true, lang: 'en' }} steps={steps} />
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text> {item.id} {item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}
