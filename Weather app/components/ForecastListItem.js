import {View, Text, StyleSheet, Image} from 'react-native';
import ForecastScreen from './ForecastScreen';
const ForecastListItem=({time, description, temperature, windspeed, icon})=>{

return(
   <View style = {{flexDirection: 'row'}} >
<View>
<Text>{time}</Text>
<Text>{temperature}</Text>
<Text>{description}</Text>
<Text>{windspeed}</Text>
<Text>  </Text>
</View>

<Image style ={ {width: 70,height: 70,marginLeft: 90,}}source={"https://openweathermap.org/img/w/" + icon + ".png"}/>
</View>
);
};

export default ForecastListItem;