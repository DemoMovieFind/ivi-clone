import React, { useState } from 'react'
import Autosuggest from 'react-autosuggest';
import styles from './PersonsFilter.module.css'
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/parse'
import noImage from '../../../image/personIcon/no-image.svg';
import { useIntl } from 'react-intl';
import { useSearchParams } from 'react-router-dom';


export interface FilterPropsType {
  persons?: {
    name: string;
    image?: string;
  }[];
  placeholder: 'actor' | 'director';
}

const Filter = ({
  persons = [
    {
      name: 'Andrew Brown',
      image: ''
    },
    {
      name: 'Charlie Brown',
      image: ''
    },
    {
      name: 'Charlotte White',
      image: 'https://thumbs.dfs.ivi.ru/storage38/contents/b/c/45102370a23e374f4146fe2d106f26.jpeg/88x88/?q=85'
    },
    {
      name: 'Chloe Jones',
      image: ''
    },
    {
      name: 'Cooper King',
      image: ''
    },
    {
      name: 'Омар Си',
      image: 'https://thumbs.dfs.ivi.ru/storage28/contents/5/4/5b9430c9601da3b2b00770fb7e08f0.jpeg/44x44/?q=85'
    },
  ],
  placeholder = 'actor'
}: FilterPropsType) => {

  const [, setSearchParams] = useSearchParams()
  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams.entries())

  const [value, setValue] = useState('')
  const [suggestion, setSuggestion] = useState<{ name?: string; image?: string; }[]>([])
  const intl = useIntl()


  const escapeRegexCharacters = (str: string) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  const getSuggestions = (value?: string) => {
    const escapedValue = escapeRegexCharacters(value ? value.trim() : '');


    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('[\u0400-\u04FF][A-Z]|' + escapedValue, 'iu');

    return persons.filter(person => regex.test(getSuggestionValue(person)));
  }

  const getSuggestionValue = (suggestion: {
    name?: string;
    image?: string;
  }) => {

    return `${(suggestion.name as string).split(' ')[0]} ${(suggestion.name as string).split(" ")[1]}`;
  }

  const renderSuggestion = (suggestion: {
    name?: string;
    image?: string;
  }, { query }: { query: string }) => {
    const suggestionText = `${(suggestion.name as string).split(' ')[0]} ${(suggestion.name as string).split(' ')[1]}`;

    const matches = AutosuggestHighlightMatch(suggestionText, query);
    const parts = AutosuggestHighlightParse(suggestionText, matches);

    return (
      <span className={styles.suggestionContent} style={{
        backgroundImage: suggestion.image ?
          `url(${suggestion.image})` :
          `url(${noImage})`
      }}>
        <span className={styles.name}>
          {
            parts.map((part: {
              text: string;
              highlight: boolean;
            }, index: number) => {
              const className = part.highlight ? styles.highlight : '';

              return (
                <span className={className} key={index}>{part.text}</span>
              );
            })
          }
        </span>
      </span>
    );
  }


  const onChange = (event: EventModifierInit, { newValue }: { newValue: string }) => {
    setValue(newValue)
    if (newValue.split(" ").length >= 2) {
      if (placeholder == 'actor') {
        setSearchParams({ ...params, actor: newValue })
      } else if (placeholder == 'director') {
        setSearchParams({ ...params, director: newValue })
      }
    } else if (!newValue && placeholder == 'actor') {
      setSearchParams({ ...params, actor: [] })
    } else if (!newValue && placeholder == 'director') {
      setSearchParams({ ...params, director: [] })
    }
  };

  const onSuggestionsFetchRequested = ({ value }: { value?: string }) => {
    setSuggestion(getSuggestions(value))
  };

  const onSuggestionsClearRequested = () => {
    setSuggestion([])
  };


  const inputProps = {
    placeholder: intl.formatMessage({ id: `persons_filter_${placeholder}` }),
    value,
    onChange: onChange
  };



  return (
    <Autosuggest
      theme={styles}
      suggestions={suggestion}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps} />
  );
}

export default Filter