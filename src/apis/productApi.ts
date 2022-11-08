import storeItems from '../data/items.json';

export type StoreProduct = { id: number; name: string; price: number; imgUrl: string };

export const getProducts = (): StoreProduct[] => {
  return storeItems;
};

export const getProduct = (id: number): StoreProduct | undefined => {
  return storeItems.find((item) => item.id === id);
};

export const getProductsByIds = (cartItemsIds: number[]): StoreProduct[] => {
  return storeItems.filter((storeItem) => cartItemsIds.some((cartItemId) => storeItem.id === cartItemId));
};
