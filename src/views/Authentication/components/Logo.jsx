import React from 'react'
import { View, Image, Text, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Logo = () => {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <>
            <View
                style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, marginBottom: 50 }}
            >
                <Image
                    source={require('../../../assets/img/chat.png')}
                    style={{ width: 200, height: 200, marginTop: 100, marginBottom: 15 }}
                />
                <Text
                    style={{ fontSize: 50, fontWeight: "500", color: isDarkMode ? 'white' : '#5b5b5b' }}
                >
                    <Text
                        style={{ color: '#fb7598' }}
                    >
                        Our
                    </Text>
                    chat
                </Text>

            </View>
        </>
    )
}

export default Logo