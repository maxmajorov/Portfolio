import React from "react";
import classes from "./Contacts.module.css";

export const Contacts: React.FC = () => {
  return (
    <section className={classes.contactsBlock}>
      <div className={classes.container}>
        <h2 className={classes.title}>Contact</h2>
        <div className={classes.inputField}>
          <div className={classes.contacts__form}>
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

            <div className={classes.centeredButton}>
              <button
                className="contacts-form__btn btn btn--fill"
                type="submit"
              >
                send request
              </button>
            </div>
          </div>
        </div>

        {/* <textarea /> */}
      </div>
    </section>
  );
};
