import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
  useRef
} from "react";
import styles from './RatingSliderCard.module.css'
import clsx from "clsx";
import { FormattedMessage } from "react-intl";

interface RangeSliderCardProps {
  min: number;
  max: number;
  onChange: ({ ...args }: { min: number; max: number }) => void;
}

const RangeSliderCard: FC<RangeSliderCardProps> = ({
  min,
  max,
  onChange
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);


  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );


  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);


  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);


  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);


  const sliderLeftValue = (document.getElementById('0') as HTMLInputElement)
  const sliderRightValue = (document.getElementById('1') as HTMLInputElement)

  const setInputMinValues = (e: ChangeEvent<HTMLInputElement>) => {
    if (!+e.target.value && +e.target.value < minVal) {
      ''
    } else if (+e.target.value < minVal || +e.target.value < 0 || isNaN(+e.target.value)) {
      e.target.value = ' '
      setMinVal(1)
    } else if (+e.target.value >= maxVal || maxVal - +e.target.value < 0.5) {
      e.target.value = (maxVal - 0.5).toFixed(1).toString()
      setMinVal(maxVal - 0.5)
    } else {
      setMinVal(+e.target.value)
    }
  }

  const setInputMaxValues = (e: ChangeEvent<HTMLInputElement>) => {
    if (!+e.target.value && +e.target.value > maxVal) {
      ''
    } else if (+e.target.value > maxVal || +e.target.value > 10 || isNaN(+e.target.value)) {
      e.target.value = ' '
      setMaxVal(10)
    } else if (+e.target.value <= minVal) {
      e.target.value = (minVal + 0.5).toFixed(1)
      setMaxVal(minVal + 0.5)
    } else {
      setMaxVal(+e.target.value)
    }
  }


  const rects = []

  for (let i = 0; i < 10; i++) {
    rects.push(<div key={i} className={styles.rangeTickBox} >
      <div className={styles.rangeNum} >{i + 1}</div>
      <div className={styles.rangeTick}></div>
    </div>
    )
  }


  return (
    <div className={styles.container}>
      <div className={styles.sliderRatingInputContainer}>
        <div className={styles.sliderRatingInputTitle}><FormattedMessage id="person_card_rate" /></div>
        <div className={styles.sliderValuesContainer}>
          <input
            type="text"
            id="0"
            className={styles.sliderLeftValue}
            onChange={setInputMinValues}
            defaultValue={minVal}
          />
          —
          <input
            type="text"
            id="1"
            className={styles.sliderRightValue}
            onChange={setInputMaxValues}
            defaultValue={maxVal}
          />
        </div>
      </div>

      <div className={styles.mainSliderContainer}>
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          step={0.1}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(+e.target.value, maxVal - 0.5);
            setMinVal(value);
            e.target.value = value.toString();
            sliderLeftValue ? sliderLeftValue.value = value.toString() : ''
          }}
          className={clsx(styles.thumb, styles.thumbZindex3, minVal > max - 100 ? styles.thumbZindex5 : '')}

        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          step={0.1}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(+e.target.value, minVal + 0.5);
            setMaxVal(value);
            e.target.value = value.toString();
            sliderRightValue ? sliderRightValue.value = value.toString() : ''
          }}
          className={clsx(styles.thumb, styles.thumbZindex4)}
        />


        <div className={styles.slider}>
          <div className={styles.sliderTrack}></div>
          <div ref={range} className={styles.sliderRange}></div>
          <div className={styles.rangeTickContainer}>
            {rects}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSliderCard;
