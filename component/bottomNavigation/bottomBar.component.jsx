import React from 'react';
import { Ionicons,Feather,MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

import HomeScreen from '../../screen/home/home.screen';
import CartScreen from '../../screen/cart/cart.screen';
import GiftScreen from '../../screen/gift/gift.screen';
import StoreScreen from '../../screen/store/store.screen';
import OtherScreen from '../../screen/other/other.screen';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 55,
                    paddingLeft:5,
                    paddingRight:5,
                },
            }}>
            <Tab.Screen name="Trang chủ" component={HomeScreen} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center" }}>
                            <Ionicons style={{ color: focused ? '#E8630A' : '#686D76' }} name="home-outline" size={22} color="black" />
                            <Text style={{ color: focused ? '#E8630A' : '#686D76',fontSize:10,marginTop:3,fontWeight: "bold"}}>Trang chủ</Text>
                        </View>
                    ),
                    
                }}
                
            />
            <Tab.Screen name="Đặt hàng" component={CartScreen} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center" }}>
                        <Feather style={{ color: focused ? '#E8630A' : '#686D76' }} name="coffee" size={22} color="black" />
                        <Text style={{ color: focused ? '#E8630A' : '#686D76',fontSize:10,marginTop:3,fontWeight: "bold" }}>Đặt hàng</Text>
                    </View>
                ),
                
            }}/>
            <Tab.Screen name="Cửa hàng" component={StoreScreen} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center" }}>
                        <MaterialCommunityIcons  style={{ color: focused ? '#E8630A' : '#686D76' }} name="storefront-outline" size={22} color="black" />
                        <Text style={{ color: focused ? '#E8630A' : '#686D76',fontSize:10,marginTop:3,fontWeight: "bold" }}>Cửa hàng</Text>
                    </View>
                ),
                
            }}/>
            <Tab.Screen name="Tích điểm" component={GiftScreen} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center" }}>
                        <MaterialCommunityIcons style={{ color: focused ? '#E8630A' : '#686D76' }} name="ticket-percent-outline" size={22} color="black" />
                        <Text style={{ color: focused ? '#E8630A' : '#686D76',fontSize:10,marginTop:3,fontWeight: "bold"}}>Tích điểm</Text>
                    </View>
                ),
                
            }}/>
            <Tab.Screen name="Khác" component={OtherScreen} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center" }}>
                        <SimpleLineIcons style={{ color: focused ? '#E8630A' : '#686D76' }} name="menu" size={22} color="black" />
                        <Text style={{ color: focused ? '#E8630A' : '#686D76',fontSize:10,marginTop:3,fontWeight: "bold"}}>Khác</Text>
                    </View>
                ),
                
            }}/>
        </Tab.Navigator>
    )
}
export default Tabs;