export type Testimonial = {
  id: string;
  name: string;
  username: string;
  rating: number;
  message: string;
  categories: {
    communication: number;
    quality: number;
    value: number;
  };
  highlights: string[];
  project?: string;
  date?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'bettral',
    username: 'bettral',
    rating: 5,
    message:
      'David was beyond helpful and talked a lot to me back and forth in helping achieve the results. will be working together in future for sure!',
    categories: {
      communication: 5,
      quality: 5,
      value: 5,
    },
    highlights: ['Level of cooperation', 'Proactive communication', 'Quick responsiveness'],
  },
  // Add more testimonials here as you receive them
];
