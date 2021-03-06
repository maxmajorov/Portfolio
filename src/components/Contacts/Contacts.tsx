import React, { useState } from "react";
import { useFormik } from "formik";
import { Button } from "../../common/components/Button/Button";
import { Title } from "../../common/components/Title/Title";
import classes from "./Contacts.module.scss";
import axios from "axios";

type ContactsPropsType = {
  setStatus: (status: null | string) => void;
};

export const Contacts: React.FC<ContactsPropsType> = ({ setStatus }) => {
  const [btnDisable, setBtnDisable] = useState(false);

  const formik = useFormik({
    initialValues: {
      sender: "",
      email: "",
      phone: "",
      subject: "",
      textMessage: "",
    },

    validate: (values) => {
      const errors: FormikErrorType = {};

      if (!values.sender) {
        errors.sender = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.subject) {
        errors.subject = "Required";
      }

      if (!values.textMessage) {
        errors.textMessage = "Required";
      }

      return errors;
    },

    onSubmit: (values) => {
      // console.log(JSON.stringify(values, null, 2));
      setBtnDisable(true);
      axios
        .post("https://gmail-smtp-nodejs.herokuapp.com/send-message", values)
        .then((res) => {
          setStatus(res.data);
          // alert("Your message has been send");
          setBtnDisable(false);
        });

      formik.resetForm();
    },
  });

  return (
    <section id="contacts" className={classes.contactsBlock}>
      <div className={classes.container}>
        <Title title="get in touch" />
        <div className={classes.inputField}>
          <div className={classes.col_8}>
            <form onSubmit={formik.handleSubmit} className={classes.form}>
              <div className={classes.formRow}>
                <div className={classes.col_6}>
                  <div className={classes.formGroup}>
                    <input
                      id="sender"
                      type="text"
                      name="sender"
                      placeholder="Name"
                      onChange={formik.handleChange}
                      value={formik.values.sender}
                      className={classes.formInput}
                    />
                    {formik.touched.sender && formik.errors.sender ? (
                      <div className={classes.errorMessage}>
                        {formik.errors.sender}
                      </div>
                    ) : null}
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                      className={classes.formInput}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div
                        style={{ top: "145px" }}
                        className={classes.errorMessage}
                      >
                        {formik.errors.phone}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className={classes.col_6}>
                  <div className={classes.formGroup}>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      className={classes.formInput}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className={classes.errorMessage}>
                        {formik.errors.email}
                      </div>
                    ) : null}
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className={classes.formInput}
                      onChange={formik.handleChange}
                      value={formik.values.subject}
                    />
                    {formik.touched.subject && formik.errors.subject ? (
                      <div
                        style={{ top: "145px" }}
                        className={classes.errorMessage}
                      >
                        {formik.errors.subject}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className={classes.col_12}>
                  <div className={classes.formGroup}>
                    <textarea
                      id="textMessage"
                      name="textMessage"
                      placeholder="Your message"
                      className={classes.formInput}
                      onChange={formik.handleChange}
                      value={formik.values.textMessage}
                    />
                    {formik.touched.textMessage && formik.errors.textMessage ? (
                      <div className={classes.errorMessage}>
                        {formik.errors.textMessage}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className={classes.col_12}>
                  <Button disabled={btnDisable} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==== TYPES ====

type FormikErrorType = {
  sender?: string;
  email?: string;
  phone?: string;
  subject?: string;
  textMessage?: string;
};
