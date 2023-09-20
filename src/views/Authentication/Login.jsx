import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon from 'react-native-vector-icons/FontAwesome5'
import Logo from "./components/Logo";
import Input from "../../assets/components/Input";
import ActionButton from "../../assets/components/ActionButton";

const Login = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark'
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isVisible, setIsVisible] = useState(true)

    const toggleVisible = () => setIsVisible(!isVisible)

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: isDarkMode ? Colors.darker : Colors.lighter }}
        >
            <ScrollView>
                <StatusBar style={{ backgroundColor: isDarkMode ? Colors.darker : Colors.lighter }} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

                <Logo />

                <Input 
                    value={username}
                    setValue={value => setUsername(value)}
                    placeholder={"Masukkan Username Anda"}
                />

                <Input 
                    value={password}
                    setValue={value => setPassword(value)}
                    icon={isVisible ? 'eye-slash' : 'eye'}
                    secure={true}
                    onPressIcon={toggleVisible}
                    placeholder={"Masukkan Password Anda"}
                />

                <ActionButton 
                    text={"Login"}
                    onPress={() => navigation.navigate('Home')}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login