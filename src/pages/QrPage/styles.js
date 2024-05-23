import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  qrContainer: {
    alignItems: 'center',
    backgroundColor: '#CCE0D6',
    flex: 1,
    justifyContent: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    marginTop: 10,
    width: '100%',
  },
  downloadButton: {
    alignItems: 'center',
    backgroundColor: '#4797E8',
    borderRadius: 10,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    width: '60%'
  },
  shareButton: {
    alignItems: 'center',
    backgroundColor: '#4797E8',
    borderRadius: 10,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    marginTop: 10,
    width: '60%'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5
  }
})

export default styles