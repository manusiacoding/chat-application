import React from "react";
import { TouchableOpacity, Text } from "react-native";

const ActionButton = ({ text, onPress }) => {
    return (
        <>
            <TouchableOpacity
                style={{ backgroundColor: '#fb7598', marginHorizontal: 20, paddingVertical: 15, borderRadius: 10, elevation: 1 }}
                onPress={onPress}
            >
                <Text
                    style={{ color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: '500' }}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default ActionButton