export default [
  {
    name: "Beverages",
    children: [
      {
        name: "Water",
      },
      {
        name: "Coffee",
      },
      {
        name: "Tea",
        children: [
          { name: "Black Tea" },
          { name: "White Tea" },
          {
            name: "Green Tea",
            children: [
              { name: "Sencha" },
              { name: "Gyokuro" },
              { name: "Matcha" },
              { name: "Pi Lo Chun" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Beverages 2",
    children: [
      {
        name: "Water 2",
      },
      {
        name: "Coffee 2",
      },
      {
        name: "Tea 2",
        children: [
          { name: "Black Tea 2" },
          { name: "White Tea 2" },
          {
            name: "Green Tea 2",
            children: [
              { name: "Sencha 2" },
              { name: "Gyokuro 2" },
              { name: "Matcha 2" },
              { name: "Pi Lo Chun 2" },
            ],
          },
        ],
      },
    ],
  },
];
