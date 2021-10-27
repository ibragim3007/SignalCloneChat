import { StyleSheet } from 'react-native'


const marginHorizontalButtons = 15
const paddingButtons = 10
const borderRaduisButtons = 15
const marginVerticalButtons = 5

export const buttonsAuthStyle = StyleSheet.create({
    sign: {
        backgroundColor: 'rgba(52, 152, 219, 1)',
        alignItems: 'center',
        padding: paddingButtons,
        marginHorizontal: marginHorizontalButtons,
        borderRadius: borderRaduisButtons,
        marginVertical: marginVerticalButtons,

    },
    register: {
        backgroundColor: 'rgba(169, 204, 227, 1)',
        alignItems: 'center',
        padding: paddingButtons,
        marginHorizontal: marginHorizontalButtons,
        borderRadius: borderRaduisButtons,
        marginVertical: marginVerticalButtons,
    },
    textInButtons: {
        fontSize: 16
    }
});