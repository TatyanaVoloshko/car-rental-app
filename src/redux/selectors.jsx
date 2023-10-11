export const selectCatalogs = (state) => state.catalogs.items;
export const selectFavoriteCards = (state) => state.favoriteCards.favoriteCards;
export const selectFilter = ({ filter }) => filter;
export const selectFilteredCatalogs = ({ catalogs: { items }, filter }) => {
  if (!filter) {
    return items;
  }

  return items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const selectIsLoading = (state) => state.catalogs.isLoading;
export const selectError = (state) => state.catalogs.error;