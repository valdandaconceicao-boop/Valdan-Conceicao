
export interface MenuItem {
  name: string;
  description: string;
  image: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
}
   