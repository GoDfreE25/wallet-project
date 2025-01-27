import s from '../wallet/wallet.module.scss';
import { currencies } from './components/consts/currency';
import CurrencyCard from './components/currency-card/currency-card';

export const Wallet = () => {
  return (
    <div className={s.wallet}>
      <CurrencyCard currencies={currencies}/>
    </div>
  );
};
