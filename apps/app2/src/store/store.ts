import { create } from "zustand";

export interface Item {
  id: string;
  name: string;
  price: number;
  count: number;
}

const useItems = create<{
  items: Item[];
  deleteItem: (id: string) => void;
}>((set) => ({
  items: [
    {
      id: "iphone15",
      name: "아이폰15",
      price: 1500000,
      count: 10,
    },
    {
      id: "iphone16",
      name: "아이폰16",
      price: 1600000,
      count: 13,
    },
    {
      id: "iphone17",
      name: "아이폰17",
      price: 1700000,
      count: 14,
    },
    {
      id: "iphone26",
      name: "아이폰26",
      price: 2600000,
      count: 11,
    },
  ],
  deleteItem(id) {
    set(({ items, deleteItem }) => ({
      items: items.filter((item) => item.id !== id),
      deleteItem,
    }));
  },
}));

export { useItems };
