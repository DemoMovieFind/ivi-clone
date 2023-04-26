import { useParams } from "react-router-dom";
import styles from './ChangePage.module.css';
import { useIntl } from "react-intl";
import { Controller, FieldValues, useFieldArray, useForm } from "react-hook-form";
import films from "../../miniDb";
import { Button } from "../../components/buttons/Button";

type Inputs = {
  name_ru:string,
  name_en:string,
  genres:{value:string}[],
};

const ChangePage = () => {
  const params = useParams();
  const intl = useIntl();
  const filmName = params.id ?? '';
  const film = films.find(film => film.name === filmName);
  const { register, control, handleSubmit, formState: { errors } } = useForm<Inputs>({
    defaultValues:{
      genres:film?.genre.map(genre=>{
        return {value:genre}
      })
    }
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray<Inputs>({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "genres",
    rules:{
      minLength:1
    }
  });

  const onSubmit = (data:FieldValues) => {
    console.log(data);
  }

  const handleDelete = () => {
    console.log('inside handle delete');
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{intl.formatMessage({id:'change_title'})}</h1>
      <form  className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label} htmlFor="name">
          {intl.formatMessage({id:'admin_name'})}
        </label>
        <input 
          id="name"
          className={styles.input} 
          defaultValue={film?.name} 
          title={intl.formatMessage({id:'admin_name'})}
          {...register("name_ru",{ required: true })} 
        />
        { errors.name_ru && <span className={styles.error}>{intl.formatMessage({id:'change_error'})}</span> }
        <label className={styles.label} htmlFor="name_en">
          {intl.formatMessage({id:'admin_name_en'})}
        </label>
        <input 
          id="name_en"
          className={styles.input} 
          defaultValue={film?.name_en}
          title={intl.formatMessage({id:'admin_name_en'})}
          {...register("name_en")} />
        <label className={styles.label} htmlFor="name_en">
          {intl.formatMessage({id:'admin_genres'})}
        </label>
        {fields.map((field, index) => {return (
          <div className={styles.wrapperGenre} key={field.id}>
          <input className={styles.inputGenre}
            {...register(`genres.${index}.value` as const)} 
          />
          <Button size="small" appearance="primary" children={intl.formatMessage({id:'change_delete_genre'})} onPointerDown={() => remove(index)}/>
          </div>
        )})}
        <Button 
          size="small" 
          appearance="default" 
          children={intl.formatMessage({id:'change_add_genre'})} 
          onPointerDown={() => append({ value: "" })}/>
        <Button 
          appearance="default" 
          type="submit" 
          title={intl.formatMessage({id:'change_change'})} 
          children={intl.formatMessage({id:'change_change'})}/>
        <Button 
          onPointerDown={handleDelete} 
          appearance="primary" 
          title={intl.formatMessage({id:'change_delete'})} 
          children={intl.formatMessage({id:'change_delete'})}/>
      </form>
    </div>
  )
}

export default ChangePage;