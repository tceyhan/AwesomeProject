/* eslint-disable prettier/prettier */
import {View, Image, Text, StatusBar} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Errors from '../../components/YupErrors';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { showToast } from '../../components/Toast/ToastComp';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginSchema = Yup.object().shape({
  userMail: Yup.string()
    .email('mail adress must be a valid')
    .required('Required'),
  userPassword: Yup.string()
    .min(4, 'Too Short! password must to contain at least 4 characters')
    .max(15, 'Too Long! password must to contain at most 15 characters')
    .required('Required'),
});

const Login = ({navigation}) => {
  const [user, setUser] = useState();
  
//! hafızaki user
const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@USER');
    return jsonValue != null ? setUser(JSON.parse(jsonValue)) : null;
  } catch (e) {
    console.log(e);
  }
};

useEffect(() => {
  getUser();
}, []);
console.log(user);

  function handleLogin(values) {
    console.log(values);
    let storeUser = user.userMail === values.userMail && user.userPassword === values.userPassword;
    console.log('store user',storeUser);
    if (storeUser) {
      showToast('welcome');
      navigation.push('Stack', {user});
    } else {
      showToast('errorlogin');
      return;
    }
  }
  
  function handleRegisterPage() {
    navigation.navigate('Register');
  }


  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#c99" />
      <View style={styles.logo_container}>
        {/* <Image
          style={styles.logo}
          source={require('../../assets/login.png')}
        /> */}
      </View>
      <Formik
        initialValues={{userMail: '', userPassword: ''}}
        onSubmit={handleLogin}
        validationSchema={LoginSchema}>
        {({handleSubmit, handleChange, values, errors}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Enter the mail address.."
              value={values.userMail}
              onType={handleChange('userMail')}
              iconName="account"
            />
            {errors.userMail ? <Errors value={errors.userMail} /> : null}
            <Input
              placeholder="Enter your password.."
              value={values.userPassword}
              onType={handleChange('userPassword')}
              iconName="key"
              isSecure
            />
            {values.userMail && errors.userPassword ? (
              <Errors value={errors.userPassword} />
            ) : null}
            <Button
              text="Giriş Yap"
              onPress={handleSubmit}
              IconName="account"
              IconColor="white"
              IconLeft
              // loading
            />
            <Text style={styles.or}>OR</Text>
            <Button
              text="Üye Ol"
              onPress={handleRegisterPage}
              IconName="account-plus-outline"
              IconColor="white"
              IconLeft
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
