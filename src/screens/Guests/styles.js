import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    row: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',     
    },
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    age: {
        fontWeight: 'bold',
    },
    askAge: {
        color: '#8d8d8d',
    },
    counters: {
        flexDirection: 'row', alignItems: 'center',
    },
    signs: {
        fontsize: 20, color: '#474747',
    },
    numbers: {
        marginHorizontal: 20, fontSize: 16,
    },
});

export default styles;