import { StyleSheet, Text, View } from "react-native"
import Color from "../../constant/Color";


const GuessLogItem = ({roundNumber,guess}) => {
  return (
  <View style={styles.listItems}>
    <Text style={styles.itemText}>#{roundNumber}</Text>
    <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
  </View>
  )
}

export default GuessLogItem;


const styles=StyleSheet.create({
    listItems:{
        padding:12,
        marginVertical:10,
        width:'100%',
        borderColor:Color.primary600,
        borderWidth:2,
        elevation:4,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:Color.accent500,
        borderRadius:40
    },
    itemText:{
        fontFamily:'open-sans'
    }
})
