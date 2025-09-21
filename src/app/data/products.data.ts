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
    name: 'Product 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 100,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category1',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 2,
    name: 'Product 2',
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
    name: 'Product 3',
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
    name: 'Product 4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 400,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category1',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 500,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category2',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 600,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category3',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 700,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category2',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 800,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category3',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 9,
    name: 'Product 9',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 900,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category2',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 10,
    name: 'Product 10',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: 1000,
    buttonTitle: 'Add To Cart',
    inCart: false,
    quantity: 1,
    category: 'Category3',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
  }
];
