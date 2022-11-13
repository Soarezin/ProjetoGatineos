import axios from 'axios';
import {useState, useEffect, useCallback, useTheme, useMemo} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Button, Appbar} from 'react-native-paper';

import {Text, StyleSheet, View, ImageBackground, Linking} from 'react-native';
import {position} from 'native-base/lib/typescript/theme/styled-system';
import {white} from 'react-native-paper/lib/typescript/styles/colors';
import { Center } from 'native-base';

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

  BotaoMain: {
    padding: 5,
    margin: 5,
    marginTop: 550,
    position: 'absolute',
    alignContent: 'center',
    alignSelf: 'center',
  },

  BotaoMain2: {
    padding: 5,
    margin: 5,
    marginTop: 600,
    position: 'absolute',
    alignContent: 'center',
    alignSelf: 'center',
  },

  botaomesmo1: {
    width: 250,
    height: 45,
    alignContent: 'center',
    justifyContent: 'center',
  },

  botaomesmo2: {
    width: 250,
    height: 45,
    alignContent: 'center',
    justifyContent: 'center',
  },

  FactText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 60,
  },

  viewTexto: {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 200,
  },

  Header: {
    justifyContent: 'center',
  }
});

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const PuxaFato = useCallback(() => {
    axios.get('https://meowfacts.herokuapp.com/').then(res => {
      setData(res.data.data);
      setLoading(false);
    });
  });

  return (
    <PaperProvider>
      <View style={styles.root}>
        <ImageBackground
          source={require('./assets/images/background.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <Appbar.Header>
          <Appbar.Content title="Um fato aleatorio sobre gato" />
          </Appbar.Header>


          {data && (
            <View style={styles.viewTexto}>
              <Text variant="headlineSmall" style={styles.FactText}>
                {data}
              </Text>
            </View>
          )}

          <View style={styles.BotaoMain}>
            <Button
              onPress={PuxaFato}
              mode="contained"
              style={styles.botaomesmo1}>
              Aperta ai amor
            </Button>
          </View>
          <View style={styles.BotaoMain2}>
            <Button
              mode="contained"
              style={styles.botaomesmo2}
              onPress={() => {
                Linking.openURL(
                  'https://api.whatsapp.com/send/?phone=5551997252771&text=OIIII%20AMOOOOOOOOOOOOOOOOOOR&type=phone_number&app_absent=0',
                );
              }}>
              SOS AMOR
            </Button>
          </View>
          
        </ImageBackground>
      </View>
    </PaperProvider>
  );
}
