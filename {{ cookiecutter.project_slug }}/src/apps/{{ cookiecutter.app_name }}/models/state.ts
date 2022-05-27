import { Item } from "apps/{{ cookiecutter.app_name }}/models/item";

export interface itemState {
  selectedItemId: number;
  selectedItem: Item;
  items: Item[];
}
