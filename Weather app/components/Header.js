import {View, Text, StyleSheet} from 'react-native'
const Header = ({headerText}) =>{

  return(
    <View style={styles.helloText}>
    <Text style={styles.header}>{headerText}</Text>
   </View>
  );
};

const styles = StyleSheet.create(
  {
    helloText:{
      fontSize:30, 
      color: 'blue',
      textAlign: 'center',
      backgroundColor: 'lightgreen'
    },
    header:{
      height: 30,
      color: 'black',
      fontSize: 30,
    },
  });
  export default Header;