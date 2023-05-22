import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectLang, setLang } from '../../store/langState';
import styles from './LanguageSwitch.module.css';
import { useIntl } from 'react-intl';

const lang: Array<{
  value: 'ru-RU' | 'en-US', label: string,
}> = [
    { value: 'ru-RU', label: 'RU' },
    { value: 'en-US', label: 'EN' },
  ]

const LanguageSwitch = (props: React.SelectHTMLAttributes<HTMLSelectElement>) => {
  const langState = useAppSelector(selectLang);
  const intl = useIntl();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch: any = useAppDispatch();
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLang(event.target.value))
  }

  return <div className={styles.lang}>
    <select
      title={intl.formatMessage({ id: 'lang_switcher_title' })}
      onChange={handleChange}
      defaultValue={langState.lang} {...props}
      className={styles.select}
    >
      {lang.map(l => {
        return <option className={styles.option} value={l.value} key={l.value}>{l.label}</option>
      })}
    </select>
  </div>
}

export default LanguageSwitch;