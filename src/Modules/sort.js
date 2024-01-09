/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable radix */
const sort = (data) => {
  const newData = data.filter((element) => {
    element.score = parseInt(element.score);
    if (!Number.isNaN(element.score)) {
      return { score: element.score, user: element.user };
    }
  });
  const orderData = newData.sort(((a, b) => b.score - a.score));
  return orderData;
};

export default sort;
