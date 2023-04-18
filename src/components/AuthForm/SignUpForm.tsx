import { FieldValues, useForm } from "react-hook-form";
import styles from "./AuthForm.module.css";
import { FormattedMessage, useIntl } from "react-intl";
import { Button } from "../buttons/Button";

export type SignUpFormProps = {
  onHandleSubmit:(data:FieldValues)=>void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SignUpForm = ({onHandleSubmit=(data:FieldValues)=>undefined}:SignUpFormProps) => {
  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
    watch,
    } = useForm();
  const intl = useIntl();
  
  return(
    <form className={styles.form} onSubmit={handleSubmit(onHandleSubmit)}>
      <h5 className={styles.title}><FormattedMessage id="sign_up_title" /></h5>
      <div>
        <label 
          htmlFor="email" 
          className={styles.title}>
            {intl.formatMessage({id:'sign_in_your_email'})}
        </label>
        <input
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
        <small className={styles.error}>{`${errors.email.message}`}</small>
        )}
      </div>
      <div>
        <label 
          htmlFor="password" 
          className={styles.title}>
            {intl.formatMessage({id:'sign_in_your_password'})}
        </label>
        <input
          id="password"
          type= 'password'
          autoComplete='off'
          className={styles.input}
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
        <small className={styles.error}>{`${errors.password.message}`}</small>
        )}
      </div>
      <div>
        <label 
          htmlFor="confirmPassword"
          className={styles.title}>
            {intl.formatMessage({id:'sign_up_confirm_password'})}
        </label>
        <input
          id="confirmPassword"
          type='password'
          className={styles.input}
          {...register( 'confirmPassword', {
          validate: value =>
          value === watch("password", "") || `${intl.formatMessage({id:'sign_up_password_not_match'})}`
          })}
          autoComplete='off'
          onPaste={(e) =>{
          e.preventDefault();
          return false
          }}
          required={true}
          onKeyUp={() => {trigger("confirmPassowrd")}}
        />
          {errors.confirmPassword && (
          <small className={styles.error}>{`${errors.confirmPassword.message}`}</small>
          )}
      </div>
      <Button type="submit" children={intl.formatMessage({
            id:'sign_in_register'
          })}/>
    </form>
  )
}

export default SignUpForm;