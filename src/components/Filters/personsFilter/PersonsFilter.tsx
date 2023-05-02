import React, { useEffect } from "react";
import AutoSuggestInput from "autosuggest-input-box";
import styles from './PersonsFilter.module.css'
import { useIntl } from 'react-intl';
import { useSearchParams } from "react-router-dom";


const inputStyle = {
  maxWidth: '165px',
  height: '56px',
  padding: '10px 20px',
  fontWeight: '500',
  fontStyle: 'normal',
  textOverflow: 'ellipsis',
  fontFamily: 'iviSans, Arial, Helvetica, Helvetica Neue, FreeSans, sans - serif',
  fontSize: '15px',
  lineHeight: '20px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#312b45',
  color: '#fff',
}

const itemStyle = {
  cursor: 'pointer',
  padding: '10px  10px',
  backgroundColor: '#312b45',
  color: 'rgba(217, 215, 224, 0.8)',
  fontWeight: '500',
  fontStyle: 'normal',
  textOverflow: 'ellipsis',
  fontFamily: 'iviSans, Arial, Helvetica, Helvetica Neue, FreeSans, sans - serif',
  fontSize: '15px',
  lineHeight: '20px',
  border: 'none',
  borderRadius: '4px',
}

const listStyle = {
  marginTop: '6px',
  maxWidth: '165px',
  minWidth: '165px',
  backgroundColor: '#312b45',
  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '16px',
  borderRadius: '4px',
  zIndex: '5',
}

const itemHoverStyle = {
  backgroundColor: '#423d54',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: '500',
  fontStyle: 'normal',
  textOverflow: 'ellipsis',
  fontFamily: 'iviSans, Arial, Helvetica, Helvetica Neue, FreeSans, sans - serif',
  fontSize: '15px',
  lineHeight: '20px',
  border: 'none',
  borderRadius: '4px',
}

export interface PersonFilterPropsType {
  placeholder: string;
  suggestions: string[];
}

const PersonFilterNew = ({
  placeholder,
  suggestions,
}: PersonFilterPropsType) => {

  const [, setSearchParams] = useSearchParams();
  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams.entries());

  useEffect(() => {
    const input = document.querySelectorAll('#autoSuggestInput');
    input.forEach((item) => {
      (item?.parentElement as HTMLInputElement).style.margin = '0px 6px';
      item.classList.add(styles.placeholder);
    })
  }, [])

  useEffect(() => {
    const inputActor = document.querySelectorAll('#autoSuggestInput')[0];
    if (!params['actor']) {
      (inputActor as HTMLInputElement).value = '';
    }
    const inputDirector = document.querySelectorAll('#autoSuggestInput')[1];
    if (!params['director']) {
      (inputDirector as HTMLInputElement).value = '';
    }
  }, [params])

  const intl = useIntl();

  const onChange = (e: string) => {
    if (e) {
      if (placeholder == 'actor') {
        setSearchParams({ ...params, actor: e });
      } else {
        setSearchParams({ ...params, director: e });
      }
    } else {
      delete params[placeholder]
      setSearchParams({ ...params })
    }
  };

  return (
    <AutoSuggestInput
      id="autoSuggestInput"
      list={suggestions}
      onChange={onChange}
      placeholder={intl.formatMessage({ id: `persons_filter_${placeholder}` })}
      inputStyle={inputStyle}
      itemStyle={itemStyle}
      listStyle={listStyle}
      itemHoverStyle={itemHoverStyle}
    />
  )
};

export default PersonFilterNew;