export const getFavourite = () => {
  const getFav = localStorage.getItem("favourite");
  if (getFav) {
    return getFav;
  } else {
    return [];
  }
};
