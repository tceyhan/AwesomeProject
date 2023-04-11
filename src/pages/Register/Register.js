/* eslint-disable prettier/prettier */
import { Image, StatusBar, Text, View } from "react-native";
import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
// import uuid from 'react-native-uuid';
import styles from "./Register.style";
// import {useDispatch} from 'react-redux';

import { Formik } from "formik";
import * as Yup from "yup";
import Errors from "../../components/YupErrors/YupErrors";

const RegisterSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, "Too Short! name must to contain at least 3 characters")
    .required("Required"),
  userSurname: Yup.string()
    .min(3, "Too Short! surname must to contain at least 3 characters")
    .required("Required"),
  userTc: Yup.string()
    .min(11, "Too Short! password must to contain 11 characters")
    .max(11, "Too Long! password must to contain 11 characters")
    .required("Required"),
  userPassword: Yup.string()
    .min(4, "Too Short! password must to contain at least 4 characters")
    .max(15, "Too Long! password must to contain at most 15 characters")
    .required("Required"),
  userMail: Yup.string()
    .email("mail adress must be a valid")
    .required("Required"),
});
const Register = ({ navigation }) => {
  // const dispatch = useDispatch();

  const handleRegister = async (values) => {
    // const user = {
    //   id: uuid.v4(),
    //   userName: values.userName,
    //   userSurname: values.userSurname,
    //   userFullName: `${values.userName} ${values.userSurname}`,
    //   userPassword: values.userPassword,
    //   userMail: values.userMail,
    // };
    // try {
    //   await dispatch(addUser(user));
    //   navigation.navigate('Login');
    // } catch (error) {
    //   console.log(error);
    // }
  };

  function handleLoginPage() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#c99" />
      <View style={styles.logo_container}>
        {/* <Image
          style={styles.logo}
          source={require('../../assets/jobfind.png')}
        /> */}
      </View>
      <Formik
        initialValues={{
          userName: "",
          userSurname: "",
          userTc: "",
          userBirthDate: "",
          userSex: "",
          userMail: "",
          userPassword: "",
          userPassword2: "",
          
        }}
        onSubmit={handleRegister}
        validationSchema={RegisterSchema}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <View>
            <Input
              placeholder="Enter name..."
              value={values.userName}
              onType={handleChange("userName")}
              iconName="account"
            />
            {errors.userName ? <Errors value={errors.userName} /> : null}
            <Input
              placeholder="Enter surname..."
              value={values.userSurname}
              onType={handleChange("userSurname")}
              iconName="account"
            />
            {errors.userSurname ? <Errors value={errors.userSurname} /> : null}
            <Input
              placeholder="Enter citizen number..."
              value={values.userTc}
              onType={handleChange("userTc")}
              iconName="card-account-details-outline"
            />
            {errors.userTc? <Errors value={errors.userTc} /> : null}
            <Input
              placeholder="Enter Birth Date..."
              value={values.userBirthDate}
              onType={handleChange("userBirthDate")}
              iconName="cake-variant-outline"
            />
            {errors.userBirthDate? <Errors value={errors.userBirthDate} /> : null}
            <Input
              placeholder="Enter Sex..."
              value={values.userSex}
              onType={handleChange("userSex")}
              iconName="gender-male-female"
            />
            {errors.userSex? <Errors value={errors.userSex} /> : null}
            <Input
              placeholder="Enter mail adress..."
              value={values.userMail}
              onType={handleChange("userMail")}
              iconName="email-outline"
              inputType="email"
            />
            {errors.userMail ? <Errors value={errors.userMail} /> : null}
            <Input
              placeholder="Enter password..."
              value={values.userPassword}
              onType={handleChange("userPassword")}
              iconName="key"
              isSecure
            />
            {errors.userPassword ? (
              <Errors value={errors.userPassword} />
            ) : null}
            <Input
              placeholder="Enter password again..."
              value={values.userPassword2}
              onType={handleChange("userPassword2")}
              iconName="key"
              isSecure
            />
            {errors.userPassword ? (
              <Errors value={errors.userPassword} />
            ) : null}
           
            <Button
              text="Register"
              onPress={handleSubmit}
              IconName="account-plus-outline"
              IconColor="white"
              IconLeft
            />
            <Text style={styles.or}>OR</Text>
            <Button
              text="Login"
              onPress={handleLoginPage}
              IconName="account"
              IconColor="white"
              IconLeft
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Register;
