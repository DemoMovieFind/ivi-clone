import { FormattedMessage,useIntl } from "react-intl";
import styles from "./AuthForm.module.css";
import { FieldValues, useForm } from 'react-hook-form';
import { Button } from "../buttons/Button";

export type SignInFormProps = {
  onHandleSubmit:(data:FieldValues)=>void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SignInForm = ({onHandleSubmit=(data:FieldValues)=>undefined}:SignInFormProps)=> {
  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
    } = useForm();
  const intl = useIntl();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onHandleSubmit)}>
      <h5 data-testid="sign-in-form-title" className={styles.title}><FormattedMessage id="sign_in_title" /></h5>
      <div>
        <label 
          htmlFor="email" 
          className={styles.title}>
            {intl.formatMessage({id:'sign_in_your_email'})}
        </label>
        <input
          data-testid="sign-in-input-email"
          className={styles.input}
          type= 'email'
          id="email"
          required={true}
          {...register("email", {
          required: intl.formatMessage({
            id:'sign_in_email_required'
          }),
          pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: intl.formatMessage({
            id:'sign_in_invalid_email'
          }),
          }})}
          onKeyUp={() => {trigger("email")}}
        ></input>
        {errors.email && (
        <small data-testid="sign-in-email-error" className={styles.error}>{`${errors.email.message}`}</small>
        )}
      </div>
      <div>
        <label 
          htmlFor="password" 
          className={styles.title}>
            {intl.formatMessage({id:'sign_in_your_password'})}
        </label>
        <input
          data-testid="sign-in-input-password"
          id="password"
          type= 'password'
          autoComplete='off'
          className={`${styles.input} ${errors.password && "invalid"}`}
          required={true}
          {...register("password", {
          required: intl.formatMessage({
            id:'sign_in_your_password'
          }),
          minLength: {
          value: 8,
          message: intl.formatMessage({
            id:'sign_in_password_min_limit'
          })
          },
          })}
          onKeyUp={() => {trigger("password")}}
        ></input>
        {errors.password && (
        <small data-testid="sign-in-password-error" className={styles.error}>{`${errors.password.message}`}</small>
        )}
      </div>
      <Button type="submit" data-testid="sign-in-submit" children={intl.formatMessage({
            id:'sign_in_enter'
          })}/>
    </form>
  )
}

export default SignInForm;
