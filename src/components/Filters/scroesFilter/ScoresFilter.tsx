import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './ScoresFilter.module.css'
import clsx from 'clsx'
import { useSearchParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export interface ScoresFilterPropsType {
  max?: number;
}

const ScoresFilter = ({
  max = 2500,
}: ScoresFilterPropsType) => {
  const refFirstInput = useRef<HTMLInputElement>(null)
  const refSecondInput = useRef<HTMLInputElement>(null)
  const range = useRef<HTMLDivElement>(null);
  const [maxVal, setMaxVal] = useState(max);

  const [, setSearchParams] = useSearchParams();
  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams.entries());

  const getPercent = useCallback(
    (value: number) => Math.round(((value - 0) / (max - 0)) * 100),
    [max]
  );

  useEffect(() => {
    if (!params["score"]) {
      range.current?.style.width ? range.current.style.width = '100%' : '';
      refFirstInput.current?.value ? refFirstInput.current.value = '>2500' : '';
      refSecondInput.current?.value ? refSecondInput.current.value = '2500' : '';
      setMaxVal(2500);
    }
  }, [params])

  useEffect(() => {
    const timeOutId = setTimeout(() => setSearchParams({ ...params, score: `${maxVal}` }), 500);
    return () => clearTimeout(timeOutId);
  }, [maxVal]);

  useEffect(() => {
    setTimeout(() => {
      setSearchParams({})
    }, 600);
  }, [])

  useEffect(() => {
    if (refSecondInput.current) {
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  const rects = [];

  for (let i = 0; i <= 2500; i += 500) {
    rects.push(
      <div key={i} className={styles.rangeTickBox}>
        <div className={styles.rangeNum}>{i == 0 ? '>100' : `>${i}`}</div>
        <div className={styles.rangeTick}></div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoSide}>
        <div className={styles.title}><FormattedMessage id='count_score_filter' /></div>
        <input
          type="text"
          ref={refFirstInput}
          defaultValue={2500}
          onChange={(e) => {
            e.target.value.length == 2 ?
              e.target.value = `>10` :
              isNaN(+e.target.value.slice(1)) ?
                e.target.value = `>${e.target.value.slice(1, -1)}` :
                +e.target.value.slice(1) > 2500 ?
                  e.target.value = `>2500` :
                  e.target.value = `>${e.target.value.slice(1)}`
            refSecondInput.current?.value ? refSecondInput.current.value = e.target.value.slice(1) : '';
            setMaxVal(+e.target.value.slice(1))
          }}
          className={styles.inputValue} />
      </div>
      <div className={styles.sliderSide}>
        <input
          type="range"
          min={100}
          max={2500}
          step={5}
          ref={refSecondInput}
          defaultValue={2500}
          onChange={(e) => {
            refFirstInput.current?.value ? refFirstInput.current.value = `>${e.target.value}` : '';
            setMaxVal(+e.target.value)
          }}
          className={clsx(
            styles.thumb,
            styles.thumbZindex3)} />
      </div>
      <div className={styles.slider}>
        <div className={styles.sliderTrack}></div>
        <div ref={range} className={styles.sliderRange}></div>
        <div className={styles.rangeTickContainer}>{rects}</div>
      </div>
    </div>
  )
}

export default ScoresFilter