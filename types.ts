
export interface Service {
  id: string
  title: string
  description: string
  price: number
  duration: string
  icon: string
}

export interface Lead {
  id?: string;
  full_name: string;
  email: string;
  message: string;
  service_interest: string;
  created_at?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}
