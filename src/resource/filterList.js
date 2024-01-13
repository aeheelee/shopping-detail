export const filterList = {
  product: [
    {
      id: 1,
      category: 'Clothing',
      title: '의류',
      imageUrl:
        'https://images.unsplash.com/photo-1522273500616-6b4757e4c184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
    },
    {
      id: 2,
      category: 'Pet',
      title: '반려동물',
      imageUrl:
        'https://images.unsplash.com/photo-1618598827591-696673ab0abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
    },
    {
      id: 3,
      category: 'Glasses',
      title: '안경',
      imageUrl:
        'https://images.unsplash.com/photo-1517602302552-471fe67acf66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80',
    },
    {
      id: 4,
      category: 'Shoes',
      title: '신발',
      imageUrl:
        'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80',
    },
  ],
  searchFilter: {
    price: [
      {
        id: 1,
        min: 1,
        max: 199999,
      },
      {
        id: 2,
        min: 200000,
        max: 399999,
      },
      {
        id: 3,
        min: 400000,
        max: 999999,
      },
      {
        id: 4,
        min: 1000000,
        max: 9999999999,
      },
    ],
    discount: [
      {
        id: 0,
        min: 0,
        max: 0,
      },
      {
        id: 1,
        min: 1,
        max: 24,
      },
      {
        id: 2,
        min: 25,
        max: 49,
      },
      {
        id: 3,
        min: 50,
        max: 74,
      },
      {
        id: 4,
        min: 75,
        max: 100,
      },
    ],
  },
  recomType: [
    {
      id: 1,
      type: 'purchase',
    },
    {
      id: 2,
      type: 'discount',
    },
  ],
  ageType: [
    {
      id: 1,
      type: 'type1',
      description: '~18세',
    },
    {
      id: 2,
      type: 'type2',
      description: '19~28세',
    },
    {
      id: 3,
      type: 'type3',
      description: '29~38세',
    },
    {
      id: 4,
      type: 'type4',
      description: '39~48세',
    },
    {
      id: 5,
      type: 'type5',
      description: '49세~',
    },
  ],
};
