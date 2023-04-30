import { useParams } from "react-router-dom";
import styles from './ChangePage.module.css';
import { useIntl } from "react-intl";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import { Button } from "../../components/buttons/Button";
import { useAppSelector } from "../../store/hooks";
import { selectAuth } from "../../store/authState";
import Loader from "../../components/loader/Loader";
import useAxios, { api } from "../../services/HttpService";
import { FilmMainCard } from "../../types/entities/FilmMainCard";

type Inputs = {
  name_ru:string,
  name_en:string,
  genres:{value:string}[],
};

const ChangePage = () => {
  const params = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const authState = useAppSelector(selectAuth);
  const intl = useIntl();
  const id = params.id ?? '';
  const {response,loaded} = useAxios({method:'get',url:`/films/${id}`});
  let film:FilmMainCard|null = null;
  if (response) {
    film = response as FilmMainCard;
  }
  const { register, control, handleSubmit, formState: { errors } } = useForm<Inputs>({
    defaultValues:{
      genres:film?.genres?.map(genre=>{
        return {value:genre.name}
      })
    }
  });
  const { fields, append, remove} = useFieldArray<Inputs>({
    control, 
    name: "genres",
    rules:{
      minLength:1
    }
  });

  const onSubmit = async (data:FieldValues) => {
    const dataTosave = {...film};
    dataTosave.name = data.nane;
    dataTosave.name_en = data.name_en;
    dataTosave.genres = data.genres;
    const response = await api.request({
          data: dataTosave,
          method:'put',
          url:'/film-update',
          headers:{
            Authorization: `Bearer ${authState.token}`,
            Accept: 'application/json'
          }
        });
  }

  const handleDelete = () => {
    console.log('inside handle delete');
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{intl.formatMessage({id:'change_title'})}</h1>
      {!loaded && <Loader/>}
      {loaded && <form  className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
      </form>}
    </div>
  )
}

export default ChangePage;