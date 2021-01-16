import React , {useState} from 'react';
import { FlatList , SafeAreaView, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants'
import Screen from '../components/Screen';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const InitialMessages = [
{
    id : 1,
    title : "Rahul Singh",
    description : "D1",
    image : require('../assets/rahulProfile.jpg')
},
{
    id : 2,
    title : "Rahul Singh",
    description : "D1",
    image : require('../assets/rahulProfile.jpg')
}

]

function MessageScreen(props) {

    const [messages , setMessages] = useState(InitialMessages)
    const [refresh , setRefresh ] = useState(false)

    const handleDelete = message => {
         setMessages(messages.filter(m => m.id !== message.id))  
    }

    return (
        <Screen >
            <FlatList 
              data = {messages}
              keyExtractor = {messages => messages.id.toString()}
              renderItem = {( {item} )=> 
              <View style = { styles.listContainer}>
                  <ListItem 
                    title = {item.title}
                    subtitle = {item.description}
                    image = {item.image}
                    onPress = {()=>console.log("Message seleced",item)}
                    renderRightActions = {() => <ListItemDeleteAction
                    onPress = {()=> handleDelete(item)}
                    >

                    </ListItemDeleteAction>}
                  ></ListItem>
              </View>}
              ItemSeparatorComponent = {ListItemSeperator}
              refreshing = {refresh}
              onRefresh = {() =>
                setMessages([{
                    id : 2,
                    title : "Rahul Singh",
                    description : "D1",
                    image : require('../assets/rahulProfile.jpg')
                }])
              }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    listContainer : {
        padding : 10,
        
    },
    screen : {
        padding : Constants.statusBarHeight
    }
})

export default MessageScreen;