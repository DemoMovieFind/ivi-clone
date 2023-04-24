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
    "Новая Зеландия",
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
    "Южная Корея",
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

  const [searchParams, setSearchParams] = useSearchParams();

  const arrayQueryParams: string[] = searchParams.getAll("countries") || [];

  const handleOnChange = (event: any) => {
    if (searchParams.getAll("countries").indexOf(event.target.value) === -1) {
      arrayQueryParams.push(event.target.value);
    } else {
      arrayQueryParams.splice(
        searchParams.getAll("countries").indexOf(event.target.value),
        1
      );
    }
    setSearchParams({ countries: arrayQueryParams });
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
          {countries.map((nameCountry) => {
            return <LiElement value={nameCountry} argument={"countries"} />;
          })}
        </ul>
      </form>
    </div>
  );
};
