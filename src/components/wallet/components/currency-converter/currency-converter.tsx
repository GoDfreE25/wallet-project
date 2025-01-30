import React, { useState, useEffect, useCallback } from 'react';
import { Button, Typography } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import CurrencyInputWithSelect from './component/currency-input-with-select/currency-input-with-select';
import { FIATS } from '../consts/fiats';
import { getRoundedResult } from '../consts/get-rounded-result';
import s from '../currency-converter/currency-converter.module.scss';

type Rates = Record<string, number>;

const DEFAULT_AMOUNT_VALUE = 0;

// Mock API call
const getExchangeCourse = async (): Promise<{ cc: string; rate: number }[]> => {
  return Promise.resolve([
    { cc: 'USD', rate: 1 },
    { cc: 'EUR', rate: 0.9 },
    { cc: 'UKR', rate: 36.6 },
  ]);
};

const CurrencyConverter: React.FC = () => {
  const [rates, setRates] = useState<Rates>({});
  const [fromAmount, setFromAmount] = useState<number>(DEFAULT_AMOUNT_VALUE);
  const [fromCurrency, setFromCurrency] = useState<string>(FIATS.USD);
  const [toAmount, setToAmount] = useState<number>(DEFAULT_AMOUNT_VALUE);
  const [toCurrency, setToCurrency] = useState<string>(FIATS.UKR);
  const [isFromAmountChanged, setIsFromAmountChanged] = useState<boolean>(true);

  useEffect(() => {
    getExchangeCourse()
      .then((data) => {
        const ratesMap: Rates = data.reduce(
          (acc, rate) => {
            acc[rate.cc] = rate.rate;
            return acc;
          },
          {
            UKR: 1,
          } as Rates,
        );
        setRates(ratesMap);
      })
      .catch((error) => console.error('Error fetching currency data:', error));
  }, []);

  const convertCurrency = useCallback(
    (fromCurrency: string, toCurrency: string, amount: number): number => {
      if (!rates[fromCurrency] || !rates[toCurrency]) return 0;
      const result = (amount * rates[fromCurrency]) / rates[toCurrency];
      return getRoundedResult(result);
    },
    [rates],
  );

  useEffect(() => {
    if (isFromAmountChanged) {
      setToAmount(convertCurrency(fromCurrency, toCurrency, fromAmount));
    } else {
      setFromAmount(convertCurrency(toCurrency, fromCurrency, toAmount));
    }
  }, [fromAmount, toAmount, fromCurrency, toCurrency, isFromAmountChanged, convertCurrency]);

  const handleFromAmountChange = (amount: number) => {
    setFromAmount(amount);
    setIsFromAmountChanged(true);
  };

  const handleFromCurrencyChange = (currency: string) => {
    setFromCurrency(currency);
    setIsFromAmountChanged(true);
  };

  const handleToAmountChange = (amount: number) => {
    setToAmount(amount);
    setIsFromAmountChanged(false);
  };

  const handleToCurrencyChange = (currency: string) => {
    setToCurrency(currency);
    setIsFromAmountChanged(false);
  };

  const handleCurrencySwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setIsFromAmountChanged(!isFromAmountChanged);
  };

  return (
    <div className={s.main_container}>
      <Typography
        style={{
          fontSize: '35px',
          fontWeight: 700,
          lineHeight: '48px',
        }}
      >
        Currency Converter
      </Typography>
      <div className={s.currency_container}>
        <CurrencyInputWithSelect
          amount={fromAmount}
          currency={fromCurrency}
          onAmountChange={handleFromAmountChange}
          onCurrencyChange={handleFromCurrencyChange}
        />
        <div className={s.button_container}>
          <Button type="primary" icon={<SwapOutlined />} shape="circle" onClick={handleCurrencySwap} />
          <Button type="primary" onClick={() => {}}>
            Convert
          </Button>
        </div>
        <CurrencyInputWithSelect
          amount={toAmount}
          currency={toCurrency}
          onAmountChange={handleToAmountChange}
          onCurrencyChange={handleToCurrencyChange}
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;
