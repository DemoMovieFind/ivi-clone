import styles from "./CounterList.module.css";
import { clsx } from "clsx";
import { LiElement } from "../../liElement/LiElement";
import { useSearchParams } from "react-router-dom";

export interface CounterListProps {
  appearance?: "";
  className?: string;
}

export const CounterList = ({
  appearance = "",
  className,
}: CounterListProps) => {
  const countries = [
    "Австралия",
    "Беларусь",
    "Великобритания",
    "Гонконг",
    "Ирландия",
    "Казахстан",
    "Колумбия",
    `Новая\u00A0Зеландия`,
    "Россия",
    "Таиланд",
    "Франция",
    "ЮАР",
    "Аргентина",
    "Бельгия",
    "Венгрия",
    "Дания",
    "Испания",
    "Канада",
    "Мексика",
    "Норвегия",
    "СССР",
    "Турция",
    "Швейцария",
    "Южная\u00A0Корея",
    "Армения",
    "Бразилия",
    "Германия",
    "Индия",
    "Италия",
    "Китай",
    "Нидерланды",
    "Польша",
    "США",
    "Финляндия",
    "Швеция",
    "Япония",
  ];

  const [, setSearchParams] = useSearchParams();
  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams.entries())


  const handleOnChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    if (params["countries"] && params["countries"].split(' ').includes(target.value)) {
      const currentParams = params["countries"].split(' ');
      currentParams.splice(currentParams.indexOf(target.value), 1);
      currentParams.length != 0 ?
        setSearchParams({ ...params, countries: currentParams.join(' ') })
        :
        setSearchParams({ ...params, countries: [] })
    } else {
      let currentValue = '';
      if (params["countries"]) {
        currentValue = `${params["countries"]} ${target.value}`
      } else {
        currentValue = `${target.value}`
      }
      setSearchParams({ ...params, countries: currentValue })
    }
  };

  return (
    <div
      className={clsx(
        styles.filterDropdown_container,
        styles[appearance],
        className
      )}
    >
      <form onChange={handleOnChange}>
        <ul className={styles.list}>
          {countries.map((nameCountry, index) => {
            return <LiElement key={index} value={nameCountry} argument={"countries"} />;
          })}
        </ul>
      </form>
    </div>
  );
};
