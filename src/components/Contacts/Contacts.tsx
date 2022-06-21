import React from "react";
import { Button } from "../../common/components/Button/Button";
import { Title } from "../../common/components/Title/Title";
import classes from "./Contacts.module.scss";

export const Contacts: React.FC = () => {
  return (
    <section id="contacts" className={classes.contactsBlock}>
      <div className={classes.container}>
        <Title title="get in touch" />
        <div className={classes.inputField}>
          <div className={classes.col_8}>
            <form className={classes.form}>
              <div className={classes.formRow}>
                <div className={classes.col_6}>
                  <div className={classes.formGroup}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className={classes.formInput}
                    />
                  </div>
                </div>
                <div className={classes.col_6}>
                  <div className={classes.formGroup}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={classes.formInput}
                    />
                  </div>
                </div>
                <div className={classes.col_6}>
                  <div className={classes.formGroup}>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      className={classes.formInput}
                    />
                  </div>
                </div>
                <div className={classes.col_6}>
                  <div className={classes.formGroup}>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className={classes.formInput}
                    />
                  </div>
                </div>
                <div className={classes.col_12}>
                  <div className={classes.formGroup}>
                    <textarea
                      name="message"
                      placeholder="Your message"
                      className={classes.formInput}
                    ></textarea>
                  </div>
                </div>
                <div className={classes.col_12}>
                  <Button />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
