import { View, Image, Text, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Checkout.style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Errors from "../../components/YupErrors";
import { Formik } from "formik";
import * as Yup from "yup";
import { showToast } from "../../components/Toast/ToastComp";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PaymentSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .min(16, "kart numarası 16 karakter olmalıdır")
    .max(16, "kart numarası 16 karakter olmalıdır")
    .required("Required"),
  cardOwner: Yup.string()
    .min(4, "Too Short! password must to contain at least 4 characters")
    .max(20, "Too Long! password must to contain at most 15 characters")
    .required("Required"),
  cardCV2: Yup.string()
    .min(3, "CV2 3 karakter olmalıdır")
    .max(3, "CV2 3 karakter olmalıdır")
    .required("Required"),
});

const Checkout = () => {
  function handlePayment(values) {
    console.log(values);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#c99" />
      <Formik
        initialValues={{ cardNumber: "", cardOwner: "", cardCV2: "" }}
        onSubmit={handlePayment}
        validationSchema={PaymentSchema}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kart Numarasını Giriniz.."
              value={values.cardNumber}
              onType={handleChange("cardNumber")}
              iconName="key"
              isSecure
            />
            {errors.cardNumber ? <Errors value={errors.cardNumber} /> : null}
            <Input
              placeholder="Kart üstündeki ismi giriniz.."
              value={values.cardOwner}
              onType={handleChange("cardOwner")}
              iconName="account"
            />
            {values.cardNumber && errors.cardOwner ? (
              <Errors value={errors.cardOwner} />
            ) : null}
            <Input
              placeholder="Kart arkasındaki CVC/CV2 numarasını giriniz.."
              value={values.cardCV2}
              onType={handleChange("cardCV2")}
              iconName="key"
            />
            {values.cardOwner && errors.cardCV2 ? (
              <Errors value={errors.cardCV2} />
            ) : null}
            <Button
              text="Öde"
              onPress={handleSubmit}
              IconName="account"
              IconColor="white"
              IconLeft
              // loading
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Checkout;
