import React, {Component} from 'react';
import { Text, View, TextInput } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

state = { albums : []};

componentWillMount() {
  axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums : response.data}));
}
render () {
  console.log(this.state);
  return (
    <View>
      <Text>Album List!!!</Text>
      <TextInput
      secureTextEntry
      onChangeText={text => this.setState({ text })}
      style={{ width: 100, height: 40, backgroundColor: '#ededed'  }}
      />
    </View>
  );
};
};

export default AlbumList;
