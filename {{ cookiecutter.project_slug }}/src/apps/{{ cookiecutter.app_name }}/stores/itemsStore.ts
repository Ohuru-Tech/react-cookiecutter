import { defaults, createStore, createHook } from "react-sweet-state";

import { itemState } from "apps/{{ cookiecutter.app_name }}/models/state";
import {
  setItemId,
  fetchAllItems,
  fetchItem,
  updateItem,
  deleteItem,
  addItem,
} from "apps/{{ cookiecutter.app_name }}/actions/itemActions";

defaults.devtools = true;

const loadInitialState = (): itemState => {
  return {
    selectedItemId: 0,
    selectedItem: { id: 0, name: "", description: "" },
    items: [],
  };
};

const Store = createStore({
  name: "contactStore",
  initialState: loadInitialState(),
  actions: {
    setItemId,
    fetchAllItems,
    fetchItem,
    updateItem,
    deleteItem,
    addItem,
  },
});

export default createHook(Store);
