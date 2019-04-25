import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Image,TextInput,Button } from 'react-native';



 class Bananas extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}


class Greeting extends Component {
  render() {
    return (
      <View style={ {alignItems: 'center',width: 450, height: 250, backgroundColor: 'powderblue'}}>
        <Text>Hello {this.props.name}!</Text>
        <Blink text="asdsasasd"></Blink>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
      </View>
    );
  }
}





 class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      //<View style={{flex: 1, flexDirection: 'row'}}>
     <View style={{
      flex: 1,
        flexDirection: 'row'

      }}>

        <View style={{ flex: 1,backgroundColor: 'powderblue'}}>
      {/*<Bananas></Bananas> */}
        </View>
        <View style={{flex: 1, backgroundColor: 'skyblue'}} >
        <PizzaTranslator></PizzaTranslator>
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}}>

        </View>
      </View>
    );
  }
};

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => '🍉🍎🍊🍒🍉').join(' ')}
        </Text>
      </View>
    );
  }
}



const stylesbutton = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

 class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={stylesbutton.container}>
        <View style={stylesbutton.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={stylesbutton.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={stylesbutton.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}


export default class App0 extends React.Component {
  render() {
    return (

      <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>


          <View>
              <ButtonBasics></ButtonBasics>
          </View>



       {/*
      <FlexDirectionBasics></FlexDirectionBasics>
       <Greeting name="Rexxar"></Greeting>
        <Greeting name="Rexxar"></Greeting>
        <Greeting name="Rexxar"></Greeting>
        <Greeting name="Rexxar"></Greeting>
      */}

      </View>
    );
  }
}




const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

