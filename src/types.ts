export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'burger' | 'sides' | 'drinks';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Location {
  address: string;
  phone: string;
  email: string;
  hours: string[];
}