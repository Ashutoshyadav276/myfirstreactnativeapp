import { StyleSheet, Text, View } from 'react-native';
import CustomComponent from './src/screens/CustomComponent';

export default function App() {
  const myname = "Ashutosh kumar";
  const myelement = <Text>Hello this is Ashutosh kumar</Text>
  const getFullName = (firstName,secondName,thirdName) =>{
    return `My name is ${firstName} ${secondName} ${thirdName}`
  }
 return(
  <View style={styles.container}>
    <Text>Hi , {getFullName("vinod", "bahadur", "thapa")}</Text>
    <CustomComponent />
    {myelement}
  </View>
 )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  }
})
