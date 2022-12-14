const initial = {
  city: 0,
  country: 0,
  seaside: 0,
};

const actions = [
  { type: "MOVE_TO_CITY", payload: 1 },
  {
    type: "MOVE_FROM_COUNTRY",
    payload: 2,
  },

  {
    type: "MOVE_TO_SEASIDE",
    payload: 3,
  },
];

const current = actions.reduce((acc, cur) => {
  switch (cur.type) {
    case "MOVE_TO_CITY":
      return { ...acc, city: acc.city + cur.payload };
    case "MOVE_FROM_COUNTRY":
      return { ...acc, country: acc.country - cur.payload };
    case "MOVE_TO_SEASIDE":
      return { ...acc, seaside: acc.seaside + cur.payload };
    default:
      return acc;
  }
}, initial);

console.log(current);
///the result as expected I fall in love with flux pattern
