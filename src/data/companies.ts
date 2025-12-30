export interface Review {
  name: string;
  subject: string;
  rating: number;
  text: string;
  date: string;
}

export interface Company {
  id: string;
  name: string;
  address: string;
  founded: string;
  rating: number;
  reviews: Review[];
  logo: any;
}

export const companies: Company[] = [
  {
    id: '1',
    name: 'Graffersid Web and App Development',
    address: '816, Shekhar Central, Indore (M.P.)',
    founded: '01-01-2016',
    rating: 4.5,
    logo: require('../assets/splash.jpeg'),
    reviews: [
      {
        name: 'Jorgue Watson',
        subject: 'Best Company',
        rating: 4,
        text: 'Graffersid one of the best company.',
        date: '01-01-2022',
      },
      {
        name: 'Jenny Kole',
        subject: 'Excellent Service',
        rating: 5,
        text: 'Excellent support and delivery.',
        date: '12-01-2022',
      },
    ],
  },
];
