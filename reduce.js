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
  }
}, initial);
