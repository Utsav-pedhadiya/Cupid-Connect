import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    popup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1,
    },
    yesButton: {
        backgroundColor: 'green',
        borderColor: 'green',
        marginRight: 10,
    },
    cancelButton: {
        backgroundColor: 'red',
        borderColor: 'red',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default styles;
