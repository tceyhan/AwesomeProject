/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// import {View, Text} from 'react-native';
import React from 'react';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

export const ToastComp = () => {
  const toastConfig = {
    /*
          Overwrite 'success' type,
          by modifying the existing `BaseToast` component
        */
    success: props => (
      <BaseToast
        {...props}
        style={{borderLeftColor: 'green'}}
        contentContainerStyle={{paddingHorizontal: 15}}
        text1Style={{
          fontSize: 17,
          fontWeight: 'bold',
        }}
        text2Style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'green',
        }}
      />
    ),
    /*
          Overwrite 'error' type,
          by modifying the existing `ErrorToast` component
        */
    error: props => (
      <ErrorToast
        style={{borderLeftColor: 'red'}}
        {...props}
        text1Style={{
          fontWeight: 'bold',
          fontSize: 17,
        }}
        text2Style={{
          fontWeight: 'bold',
          fontSize: 18,
          color: '#c44',
        }}
      />
    ),

    //     tomatoToast: ({text1, props}) => (
    //       <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
    //         <Text>{text1}</Text>
    //         <Text>{props.uuid}</Text>
    //       </View>
    //     ),
    //
  };

  return <Toast config={toastConfig} />;
};

export const showToast = (type) => {
  if (type === 'success') {
    return Toast.show({
      type: 'success',
      text1: 'Congrats',
      text2: 'Succesfully👋',
    });
  }
  else if (type === 'remove') {
    return Toast.show({
      type: 'success',
      text1: 'Remove',
      text2: 'Succesfuly removed 🗑️',
    });
  }
  
  else if (type === 'register') {
    return Toast.show({
      type: 'success',
      text1: 'Register',
      text2: 'Başarıyla kayıt olundu👋',
    });
  }
  else if (type === 'varuser') {
    return Toast.show({
      type: 'error',
      text1: 'Register',
      text2: 'UserMail is already registered ⚠️',
    });
  }
  else if (type === 'welcome') {
    return Toast.show({
      type: 'success',
      text1: 'Giriş Yap',
      text2: 'Başarıyla giriş yapıldı👋',
    });
  }
  else if (type === 'errorlogin') {
    return Toast.show({
      type: 'error',
      text1: 'Login',
      text2: 'Şifre yada mail adresiniz hatalı ⚠️',
    });
  }
  else if (type === 'nomatchpassword') {
    return Toast.show({
      type: 'error',
      text1: 'Kayıt',
      text2: 'Parola 1 ve Parola 2 eşleşmedi ⚠️',
    });
  }
};
