import {StyleSheet, Dimensions} from 'react-native';
const height = Dimensions.get('screen').height * 0.75;
export default StyleSheet.create({
  container: {
    // backgroundColor: '#E5E5E5',
  },
  brandName: {
    marginBottom: 50,
    color: '#6379F4',
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 26,
    fontWeight: 'bold',
  },
  brandNameSuccess: {
    position: 'absolute',
    marginBottom: 50,
    color: '#6379F4',
    alignSelf: 'center',
    marginTop: 80,
    fontSize: 26,
    fontWeight: 'bold',
  },
  brandNameSignup: {
    marginBottom: 50,
    color: '#6379F4',
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 26,
    fontWeight: 'bold',
  },
  content: {
    height,
    padding: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  contentSignup: {
    paddingBottom: 30,
    padding: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  descript: {
    marginTop: 30,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subHeader: {
    fontSize: 16,
    color: '#878787',
  },
  form: {
    marginTop: 10,
  },
  forgot: {
    alignSelf: 'flex-end',
    paddingRight: 15,
    top: -8,
  },
  loginBtn: {
    width: '90%',
    backgroundColor: '#DADADA',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
  },
  loginBtnActive: {
    width: '90%',
    backgroundColor: '#6379F4',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
  },
  loginText: {
    fontWeight: 'bold',
    color: '#88888F',
    fontSize: 20,
  },
  loginTextActive: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  haveAcc: {
    alignSelf: 'center',
    marginTop: 20,
    color: '#5D5757',
  },
  signup: {
    color: '#6379F4',
    fontWeight: 'bold',
  },
  // for create PIN
  containerPIN: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
    paddingBottom: 30,
  },
  containerPINSuccess: {
    marginTop: 210,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
    paddingBottom: 40,
  },
  subHeaderPIN: {
    fontSize: 16,
    color: '#878787',
    marginBottom: 30,
  },
  cellPin: {
    borderRadius: 10,
    width: 40,
    borderColor: '#6379F4',
    borderWidth: 1,
  },
  formPin: {
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  round: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: 80,
    height: 80,
    backgroundColor: '#1EC15F',
    borderRadius: 80,
    marginBottom: 20,
  },
  successText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#88888F',
    marginTop: 20,
  },
  loading: {
    position: 'absolute',
    alignSelf: 'center',
    top: '15%',
  },
  error: {
    color: 'red',
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
    top: '35%',
  },
  loginBtnPIN: {
    width: '90%',
    backgroundColor: '#DADADA',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 150,
    borderRadius: 12,
  },
  loginBtnActivePIN: {
    width: '90%',
    backgroundColor: '#6379F4',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 150,
    borderRadius: 12,
  },
});
