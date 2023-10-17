import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { css } from './assets/css/Css';
import Page from './node_modules/views/Page';

export default function App() {
  /*Spread*/
  const props={
    empresa: 'Webdesign em Foco',
    name: 'Thiago'
  };

  return (
    <View style={css.container}>
      <Text style={css.textPage}>Open up App.js to start working on your app!</Text>      
      <Page {...props} />
      {/*<Page empresa='Webdesign' name='Thiago'/>*/}
      {/*<Page empresa='Programação'/>
      <Page empresa='Devs'/>
  <StatusBar style="auto" />*/}
    </View>
  );
}


