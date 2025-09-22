export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  buttonTitle: string;
  inCart: boolean;
  quantity: number;
  category: string;
  imageUrl: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Black Beauty Handbag',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 100,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category1',
    imageUrl: 'https://images.unsplash.com/photo-1705909237050-7a7625b47fac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 2,
    name: 'Zabia',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 200,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category2',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 3,
    name: 'Nike',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 300,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category3',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 4,
    name: 'Blue Aesthetic Handbag',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 400,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category1',
    imageUrl: 'https://images.unsplash.com/photo-1652427019217-3ded1a356f10?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhhbmRiYWd8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 5,
    name: 'Time',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 500,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category2',
    imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3QlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 6,
    name: 'Carhartt',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 600,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category3',
    imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 7,
    name: 'Apple Watch',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 700,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category2',
    imageUrl: 'https://images.unsplash.com/photo-1461141346587-763ab02bced9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d3Jpc3QlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 8,
    name: 'Fitness',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 800,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category3',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1663100769321-9eb8fe5a8e6b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 9,
    name: 'Titen',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 900,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category2',
    imageUrl: 'https://images.unsplash.com/photo-1662333084914-3eea84762671?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdyaXN0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 10,
    name: 'New balance',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 1000,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category3',
    imageUrl: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 11,
    name: 'Gucci Handbag',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 1000,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category1',
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhhbmRiYWd8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 12,
    name: 'Dolce & gabbana',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 1000,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category1',
    imageUrl: 'https://images.unsplash.com/photo-1682628890923-e0d08e2e51f9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhhbmRiYWd8ZW58MHx8MHx8fDA%3D'
  }
];
