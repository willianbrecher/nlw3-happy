import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    showCancel?: boolean;
}

export default function Header({ title, showCancel = true }: HeaderProps) {
    const navegation = useNavigation();

    function handleGoBackToAppHomePage() {
        navegation.navigate('OrphanageMap');
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navegation.goBack}>
                <Feather name="arrow-left" size={24} color="#15b6d6" />
            </BorderlessButton>
            <Text style={styles.text}>{title}</Text>

            {showCancel ? (
                <BorderlessButton onPress={handleGoBackToAppHomePage}>
                    <Feather name="x" size={24} color="#ff669d" />
                </BorderlessButton>
            ) : (<View />)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#8fa7b3',
        fontSize: 16
    }
});