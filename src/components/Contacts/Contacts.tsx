import React from "react";
import { Button } from "../../common/components/Button/Button";
import { Title } from "../../common/components/Title/Title";
import classes from "./Contacts.module.css";

export const Contacts: React.FC = () => {
  return (
    <section id="contacts" className={classes.contactsBlock}>
      <Title title="contacts" />
      <div className={classes.inputField}>
        <form className={classes.contacts__form}>
          <h3 className={classes.contactsForm__title}>
            A quick way to discuss details
          </h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={classes.form__input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className={classes.form__input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={classes.form__input}
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={20}
            className={classes.form__input}
          ></textarea>

          <Button />
        </form>
      </div>
    </section>
  );
};
