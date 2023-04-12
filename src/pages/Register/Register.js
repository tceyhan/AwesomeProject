/* eslint-disable prettier/prettier */
import { Image, StatusBar, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { showToast } from "../../components/Toast/ToastComp";

import styles from "./Register.style";

import { Formik } from "formik";
import * as Yup from "yup";
import Errors from "../../components/YupErrors/YupErrors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateInput from "../../components/DateInput/DateInput";

const RegisterSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, "Too Short! name must to contain at least 3 characters")
    .required("Required"),
  userSurname: Yup.string()
    .min(3, "Too Short! surname must to contain at least 3 characters")
    .required("Required"),
  userTc: Yup.string()
    .min(11, "Too Short! password must to contain 11 characters")
    .max(11, "Too Long! password must to contain 11 characters"),
  // .required("Required"),
  userPassword: Yup.string()
    .min(4, "Too Short! password must to contain at least 4 characters")
    .max(15, "Too Long! password must to contain at most 15 characters")
    .required("Required"),
  userPassword2: Yup.string()
    .min(4, "Too Short! password must to contain at least 4 characters")
    .max(15, "Too Long! password must to contain at most 15 characters")
    .oneOf([Yup.ref("userPassword"), null], "Passwords must match")
    .required("Required"),
  userMail: Yup.string()
    .email("mail adress must be a valid")
    .required("Required"),
});
const Register = ({ navigation }) => {
  const handleRegister = async (values) => {
    const user = {
      userName: values.userName,
      userSurname: values.userSurname,
      userTc: values.userTc,
      userBirthDate: values.userBirthDate,
      userSex: values.userSex,
      userMail: values.userMail,
      userFullName: `${values.userName} ${values.userSurname}`,
      userPassword: values.userPassword,
    };
    try {
      await AsyncStorage.setItem("@USER", JSON.stringify(user));
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
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
            {values.userName && errors.userSurname ? (
              <Errors value={errors.userSurname} />
            ) : null}
            <Input
              placeholder="Enter citizen number..."
              value={values.userTc}
              onType={handleChange("userTc")}
              iconName="card-account-details-outline"
            />
            {values.userSurname && errors.userTc ? (
              <Errors value={errors.userTc} />
            ) : null}
            <DateInput
              placeholder="Enter Birth Date..."
              value={values.userBirthDate}
              onType={handleChange("userBirthDate")}
              iconName="cake-variant-outline"
            />
            {values.userTc && errors.userBirthDate ? (
              <Errors value={errors.userBirthDate} />
            ) : null}
            <Input
              placeholder="Enter Sex..."
              value={values.userSex}
              onType={handleChange("userSex")}
              iconName="gender-male-female"
            />
            {values.userBirthDate && errors.userSex ? (
              <Errors value={errors.userSex} />
            ) : null}
            <Input
              placeholder="Enter mail adress..."
              value={values.userMail}
              onType={handleChange("userMail")}
              iconName="email-outline"
              inputType="email"
            />
            {values.userSex && errors.userMail ? (
              <Errors value={errors.userMail} />
            ) : null}
            <Input
              placeholder="Enter password..."
              value={values.userPassword}
              onType={handleChange("userPassword")}
              iconName="key"
              isSecure
            />
            {values.userMail && errors.userPassword ? (
              <Errors value={errors.userPassword} />
            ) : null}
            <Input
              placeholder="Enter password again..."
              value={values.userPassword2}
              onType={handleChange("userPassword2")}
              iconName="key"
              isSecure
            />
            {values.userPassword && errors.userPassword2 ? (
              <Errors value={errors.userPassword2} />
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
