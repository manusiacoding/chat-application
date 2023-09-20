import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

const Input = ({ value, setValue, icon = null, onPressIcon, secure = false, placeholder }) => {
    return (
        <>
            <View
                style={{ marginBottom: 15, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginHorizontal: 20, borderRadius: 10, borderColor: '#ededed', elevation: 2 }}
            >
                <TextInput
                    style={{ padding: 12, color: '#000', flex: 1 }}
                    value={value}
                    placeholder={placeholder}
                    secureTextEntry={secure}
                    onChangeText={setValue}
                />
                {icon !== null ? (
                    <TouchableOpacity
                    onPress={onPressIcon}
                    style={{ marginRight: 15 }}
                >
                    <Icon
                        name={icon}
                        size={20}
                        color='gray'
                    />
                </TouchableOpacity>
                ) : null}
            </View>
        </>
    )
}

export default Input