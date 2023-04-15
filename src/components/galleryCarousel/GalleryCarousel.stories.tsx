import type { Meta, StoryObj } from "@storybook/react";

import { GalleryCarousel } from "./GalleryCarousel";
import React from "react";
import { CardFilm } from "../cardFilm/cardFilm";
import { FilmMainCard } from "../../types/entities/FilmMainCard";

import films from "../../miniDb";

const meta = {
  title: "GalleryCarousel",
  component: GalleryCarousel,
  tags: ["autodocs"],
} satisfies Meta<typeof GalleryCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { name: "Item 1" },
  { name: "Item 2" },
  { name: "Item 3" },
  { name: "Item 4" },
  { name: "Item 5" },
  { name: "Item 6" },
  { name: "Item 7" },
  { name: "Item 8" },
  { name: "Item 9" },
  { name: "Item 10" },
];

const cardStyle: React.CSSProperties = {
  width: 150,
  height: 230,
  border: "1px solid black",
  backgroundColor: "gray",
};

const Item: React.FC<{ item: (typeof items)[number] }> = ({ item }) => (
  <div style={cardStyle}>{item.name}</div>
);

export const Example: Story = {
  args: {},
  render: (args) => (
    <GalleryCarousel {...args} items={items} itemComponent={Item} />
  ),
};

const CardFilmItem: React.FC<{ item: FilmMainCard }> = ({ item }) => (
  <CardFilm film={item} />
);

export const GalleryCardFilm: Story = {
  args: {},
  render: (args) => (
    <GalleryCarousel
      {...args}
      items={films.slice(0, 20)}
      itemComponent={CardFilmItem}
      nameCategory="Зарубежное кино"
    />
  ),
};
