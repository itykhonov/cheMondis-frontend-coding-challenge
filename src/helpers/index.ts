export const getIdsFromLimit = (limit: number, page: number, offset = 0) => {
  const ids = [];
  const to = limit * page + 1;
  const from = to - limit;
  for (let index = from; index < to; index++) {
    ids.push(index + offset);
  }
  return ids;
};
