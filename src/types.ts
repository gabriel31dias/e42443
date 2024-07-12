export type Image = {
    src: string;
};
  
export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    images: Image[];
  };
  