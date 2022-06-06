import React from 'react';
import { Ionicons, Feather, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import styles from './idCard.style';
//import LinearGradient from 'react-native-linear-gradient';
import { Text, View, Image } from 'react-native';

function IdCard() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.textname}>Phương Trịnh</Text>
                <Text style={styles.textbean}>0 BEAN - Mới</Text>
                <View style={styles.cardlinecode}>
                    <Image source={require('../../../assets/image12.png')} style={{ width: '76%', height: '80%', marginLeft: '12%', marginTop: '3%' }}></Image>
                </View>
            </View>
        </View>
    )
}
export default IdCard;