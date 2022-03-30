import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {vibrate} from './utils'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      count: 0,
      count2:30,
      isbreak : false,
      defaultmin: 0,
      defaultsec: 30,
      bdefaultmin : 0,
      bdefaultsec : 10,
      changedefaultmin: 0,
      changedefaultsec: 30,
      changebdefaultmin : 0,
      changebdefaultsec : 10,
      text : "Work Timer",
      on : true,
      buttontext: "stop",
    }
  }
  decrease = () =>{
    if (this.state.count2 === 0){
      this.setState(prevState =>({
        count: prevState.count - 1 
      }))
    }
    this.setState(prevState =>({
      count2: (prevState.count2 - 1 + 60) % 60,
      }))
  }

  componentDidUpdate(){
    if(this.state.count === 0 && this.state.count2 === 0) vibrate()
    if (this.state.count === -1){
      if(!this.state.isbreak){
        this.setState({isbreak: true, count: this.state.bdefaultmin, count2: this.state.bdefaultsec, text: "Break timer"})
      }
      if(this.state.isbreak){
        this.setState({isbreak: false, count: this.state.defaultmin, count2: this.state.defaultsec, text: "Work Timer"})
      }
    }
  }

  start = () => {
    this.setState(prevState => ({
      on : !prevState.on,
    }))
    if (this.state.buttontext === "stop") this.setState({buttontext : "start"})
    else this.setState({buttontext : "stop"}) 
  }

  reset = () => { 
    if (this.state.isbreak) this.setState({count : this.state.bdefaultmin, count2: this.state.bdefaultsec})
    else this.setState({count : this.state.defaultmin, count2: this.state.defaultsec})
  }
  change = () => { 
    this.setState({ bdefaultmin: this.state.changebdefaultmin, bdefaultsec: this.state.changebdefaultsec,  defaultmin : this.state.changedefaultmin, defaultsec: this.state.changedefaultsec})
    if (this.state.isbreak) this.setState({count : this.state.changebdefaultmin, count2: this.state.changebdefaultsec})
    else this.setState({count : this.state.changedefaultmin, count2: this.state.changedefaultsec})
  }

  componentDidMount(){
    this.interval = setInterval(() =>
    {
      if(this.state.on === true) this.decrease()
    } , 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  handleminChange = changedefaultmin => {
    this.setState({changedefaultmin})
  }

  handlesecChange = changedefaultsec => {
    this.setState({changedefaultsec})
  }
  handlebminChange = changebdefaultmin => {
    this.setState({changebdefaultmin})
  }

  handlebsecChange = changebdefaultsec => {
    this.setState({changebdefaultsec})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.count}>{this.state.text}</Text>
        <Text style = {styles.count}>{this.state.count}: {this.state.count2}</Text>
        <View style ={styles.btncontainer}>
          <Button style = {styles.btnsize} onPress={this.start} title= {this.state.buttontext}color="#841584"/>
          <Button style = {styles.btnsize} onPress={this.reset} title="Reset" color="#841584"/>
        </View>
        <View style = {styles.rowContainer}>
        <Text >Work mins</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={this.state.changedefaultmin.toString()}
            onChangeText={this.handleminChange}
            placeholder="work mins"
          />
        <Text>Work secs</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={this.state.changedefaultsec.toString()}
            onChangeText={this.handlesecChange}
            placeholder="work secs"
          />
        </View> 
        <View style = {styles.rowContainer}> 
        <Text >Break mins</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              value={this.state.changebdefaultmin.toString()}
              onChangeText={this.handlebminChange}
              placeholder="break mins"
            />
          <Text >Break secs</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              value={this.state.changebdefaultsec.toString()}
              onChangeText={this.handlebsecChange}
              placeholder="break secs"
          />
        </View> 
        <Button style = {styles.btnsize} onPress={this.change} title="change" color="#841584"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  count:{
    fontSize : 48,
    color : "red"
  },
  rowContainer: {
    flexDirection: 'row'
  },

  btncontainer:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  btnsize:{
    width:"100%"
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 50,
    marginTop: 5,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 3,
  },
});
