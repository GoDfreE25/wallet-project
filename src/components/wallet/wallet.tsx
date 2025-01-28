import s from '../wallet/wallet.module.scss';
import { currencies } from './components/consts/currency';
import CurrencyCard from './components/currency-card/currency-card';
import CurrencyConverter from './components/currency-converter/currency-converter';

export const Wallet = () => {
  return (
    <div className={s.wallet}>
      <div className={s.currency_card}>
        <CurrencyCard currencies={currencies} />
      </div>
      <div className={s.currency_converter}>
        <CurrencyConverter />
      </div>
    </div>
  );
};
