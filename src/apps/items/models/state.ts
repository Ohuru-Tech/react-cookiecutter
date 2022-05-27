import { Item } from "apps/items/models/item";

export interface itemState {
  selectedItemId: number;
  selectedItem: Item;
  items: Item[];
}
