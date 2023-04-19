import React, { useState } from 'react'
import Autosuggest from 'react-autosuggest';
import styles from './PersonsFilter.module.css'
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/parse'
import noImage from '../../image/personIcon/no-image.svg';
import { useIntl } from 'react-intl';


export interface FilterPropsType {
  persons: {
    name: string;
    image?: string;
  }[];
  placeholder: string;
}


const Filter = ({
  persons = [],
  placeholder = ''
}: FilterPropsType) => {
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