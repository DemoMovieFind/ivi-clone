import { Meta, StoryObj } from "@storybook/react";
import HeaderDropDown from "./HeaderDropDown";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import {
  filmSingleColumnСountries,
  filmDoubleColumn,
  filmSingleColumnYears,
  sideContentSelections,
} from "../header/list";

const meta: Meta<typeof HeaderDropDown> = {
  title: "Page Components/HeaderDropDown",
  component: HeaderDropDown,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const DropDownFilm: Story = {
  render: () => (
    <Provider store={store}>
      <BrowserRouter>
        <HeaderDropDown
          doubleColumn={filmDoubleColumn}
          singleColumnСountries={filmSingleColumnСountries}
          singleColumnYears={filmSingleColumnYears}
          sideContent={sideContentSelections}
        />
      </BrowserRouter>
    </Provider>
  ),
};
export default meta;
