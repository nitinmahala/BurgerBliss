import { MenuItem, Location } from './types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Cheese Burger',
    description: 'Juicy beef patty with melted cheddar, fresh lettuce, tomatoes, and our secret sauce',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    category: 'burger'
  },
  {
    id: '2',
    name: 'BBQ Bacon Supreme',
    description: 'Smoky bacon, crispy onion rings, BBQ sauce, and premium beef patty',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800',
    category: 'burger'
  },
  {
    id: '3',
    name: 'Crispy Fries',
    description: 'Golden-brown fries seasoned with our special spice blend',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800',
    category: 'sides'
  },
  {
    id: '4',
    name: 'Classic Milkshake',
    description: 'Creamy vanilla milkshake topped with whipped cream',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800',
    category: 'drinks'
  },
  {
    id: '5',
    name: 'Mushroom Swiss Burger',
    description: 'Sautéed mushrooms, melted Swiss cheese, and garlic aioli on a premium beef patty',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800',
    category: 'burger'
  },
  {
    id: '6',
    name: 'Spicy Jalapeño Burger',
    description: 'Fresh jalapeños, pepper jack cheese, chipotle mayo, and crispy fried onions',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800',
    category: 'burger'
  },
  {
    id: '7',
    name: 'Loaded Nachos',
    description: 'Crispy tortilla chips topped with cheese sauce, jalapeños, and seasoned ground beef',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800',
    category: 'sides'
  },
  {
    id: '8',
    name: 'Onion Rings',
    description: 'Beer-battered onion rings served with ranch dipping sauce',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=800',
    category: 'sides'
  },
  {
    id: '9',
    name: 'Chocolate Shake',
    description: 'Rich chocolate milkshake made with premium ice cream and chocolate syrup',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800',
    category: 'drinks'
  },
  {
    id: '10',
    name: 'Craft Root Beer',
    description: 'House-made root beer with a perfect blend of spices and vanilla',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=800',
    category: 'drinks'
  },
  {
    id: '11',
    name: 'Veggie Delight Burger',
    description: 'House-made vegetable patty with avocado, sprouts, and vegan mayo',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800',
    category: 'burger'
  },
  {
    id: '12',
    name: 'Sweet Potato Fries',
    description: 'Crispy sweet potato fries served with maple aioli',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800',
    category: 'sides'
  }
];

export const location: Location = {
  address: 'D-8 Maan Nagar, First Floor BR Tower Opposite To Tiberawala Tower, near Indusland Bank, Jhunjhunu, Rajasthan 333001',
  phone: '089018 92020',
  email: 'info@burgerbliss.com',
  hours: [
    'Monday - Thursday: 11:00 AM - 10:00 PM',
    'Friday - Saturday: 11:00 AM - 11:00 PM',
    'Sunday: 12:00 PM - 9:00 PM'
  ]
};