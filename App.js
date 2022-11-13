import axios from 'axios';
import {useState, useEffect, useCallback, useTheme} from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import BotaoMain from './components/BotaoMain/BotaoMain';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  ActivityIndicator,
  Button,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  image: {
    flex: 1,
    flexDirection: 'column',
  },

  textInput: {
    borderBottomWidth: 3,
    padding: 5,
    paddingVertical: 20,
    marginVertical: 100,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 19,
    borderRadius: 16,
    borderBottomColor: '#262424',
    textAlign: 'center',
  },

  infoView: {
    alignItems: 'center',
  },

  cityCountryText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },

  dateText: {
    color: '#fff',
    fontSize: 22,
    marginVertical: 10,
  },

  tempText: {
    fontSize: 45,
    color: '#fff',
    marginVertical: 10,
  },

  minMaxText: {
    fontSize: 22,
    color: '#fff',
    marginVertical: 10,
    fontWeight: 'bold',
  },

  BotaoMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTopic: 450,
  }
});

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDataHandler = useEffect(() => {
    setLoading(true);
    axios
      .get('https://meowfacts.herokuapp.com')
      .then((res) => {
        setData(res.data.data);
        
      })
    .finally(() => setLoading(false));
    
})


  return (
    <PaperProvider>
    <View style={styles.root}>
    
      <ImageBackground
        source={require('./assets/images/background.jpg')}
        resizeMode="cover"
        style={styles.image}>


      {loading && (
        <View>
          <Button onClick={fetchDataHandler} title="resda">

          </Button>
        </View>
        )}

        {data && (
          <View style={styles.infoView}>
            <Text>{data}</Text>
          </View>
        )}
      </ImageBackground>
      
    </View>
    </PaperProvider>
  );
}
