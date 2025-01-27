type Transaction = {
  date: string;
  type: string;
  amount: string;
  currency: string;
};

type Currency = {
  id: string;
  name: string;
  symbol: string;
  balance: string;
  borderColor: string;
  transactions: Transaction[];
};

export type CurrencyCardsProps = {
  currencies: Currency[];
};

export const currencies: Currency[] = [
  {
    id: 'currency1',
    name: 'UAH',
    symbol: '₴',
    balance: '12,500.00',
    borderColor: '#28A745',
    transactions: [
      { date: '10.01.2025', type: 'Replenishment', amount: '+500', currency: 'UAH' },
      { date: '09.01.2025', type: 'Costs', amount: '-200', currency: 'UAH' },
      { date: '08.01.2025', type: 'Replenishment', amount: '+300', currency: 'UAH' },
    ],
  },
  {
    id: 'currency3',
    name: 'USD',
    symbol: '$',
    balance: '3,200.00',
    borderColor: '#007BFF',
    transactions: [
      { date: '10.01.2025', type: 'Replenishment', amount: '+100', currency: 'USD' },
      { date: '09.01.2025', type: 'Costs', amount: '-50', currency: 'USD' },
      { date: '09.01.2025', type: 'Replenishment', amount: '+50', currency: 'USD' },
    ],
  },
  {
    id: 'currency3',
    name: 'EUR',
    symbol: '€',
    balance: '2,800.00',
    borderColor: '#DC3545',
    transactions: [
      { date: '10.01.2025', type: 'Replenishment', amount: '+200', currency: 'EUR' },
      { date: '09.01.2025', type: 'Costs', amount: '-75', currency: 'EUR' },
      { date: '10.01.2025', type: 'Replenishment', amount: '+100', currency: 'EUR' },
    ],
  },
];
