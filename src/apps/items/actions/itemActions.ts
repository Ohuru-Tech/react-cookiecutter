import { Action } from "react-sweet-state";
//
import ItemAPIs from "apps/items/utils/itemApi";
import { itemState } from "../models/state";
import { ItemEdit } from "../models/api";

// -----------------------------------------------------------------

export const setItemId =
  (itemId: number): Action<itemState> =>
  async ({ getState, setState }) => {
    const { selectedItemId } = getState();
    if (itemId !== selectedItemId) {
      setState({ selectedItemId: itemId });
    }
  };

export const fetchAllItems =
  (): Action<itemState> =>
  async ({ setState }) => {
    const { data: items } = await ItemAPIs().getAllItems();
    setState({ items: items });
  };

export const fetchItem =
  (): Action<itemState> =>
  async ({ setState, getState }) => {
    const { selectedItemId } = getState();

    if (selectedItemId !== 0) {
      const { data: item, status } = await ItemAPIs(selectedItemId).getItem();
      if (status === 200) {
        setState({ selectedItem: item });
      }
    }
  };

export const updateItem =
  (updates: ItemEdit): Action<itemState> =>
  async ({ getState, dispatch }) => {
    const { selectedItemId } = getState();
    await ItemAPIs(selectedItemId).editItem(updates);
    dispatch(fetchItem);
    dispatch(fetchAllItems);
  };

export const deleteItem =
  (): Action<itemState> =>
  async ({ getState, dispatch }) => {
    const { selectedItemId } = getState();
    await ItemAPIs(selectedItemId).deleteItem();
    dispatch(fetchItem);
    dispatch(fetchAllItems);
  };
