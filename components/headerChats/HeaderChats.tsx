import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Icon } from 'react-native-vector-icons/Icon'



const avatarImg = 'https://sun9-67.userapi.com/impg/pvQLlVKXH5-s1w7GaKCBBgMwG7ubTnT4MDlA9w/sE6O7VJ4ZdM.jpg?size=2560x1440&quality=95&sign=54583f12ee6ccec054f1fab552c8dc5c&type=album'


const HeaderChats:React.FC = () => {

    const [statusSearch, setStatusSearch] = useState(false)

    const startSearch = () => {
        if(statusSearch) console.log("Search Allready")
        else {
            setStatusSearch(true)
            console.log("Search...")
        }
    }

    return(
        <View style={styles.header}>
            <View style={styles.profile}>
                <Image style={styles.image} source={{uri: avatarImg}}/>
                <Text style={styles.profleLogin}>Ibragim</Text>
            </View>
            <View style={styles.settings}>
                <TouchableOpacity onPress={startSearch}>
                    <Icon
                        name='search'
                        color='#111' 
                        size={22}
                        style={styles.icons} 
                    />
                </TouchableOpacity>  
                <TouchableOpacity>  
                    <Icon 
                        name='dehaze'
                        color='#111'
                        size={22}
                        style={styles.icons} 
                    />
                </TouchableOpacity> 
            </View>
        </View>
    )
}

const imageSize = 30
const styles = StyleSheet.create({
    header: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
        marginLeft: 9,
    },
    profleLogin: {
        fontSize: 16,
        marginLeft: 10
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    settings: {
        flexDirection: 'row',
        padding: 5,
    },
    icons: {
        paddingHorizontal: 6,
    }
  });

export default HeaderChats