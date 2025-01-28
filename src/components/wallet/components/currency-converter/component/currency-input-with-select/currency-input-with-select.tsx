import React from 'react';
import { Select, Input, Typography } from 'antd';
import { FIATS } from 'components/wallet/components/consts/fiats';
import s from '../currency-input-with-select/currency-input-with-select.module.scss';

type CurrencyInputWithSelectProps = {
  amount: number | string;
  currency: string;
  onAmountChange: (value: number | string) => void;
  onCurrencyChange: (value: string) => void;
};

const { Option } = Select;

const CurrencyInputWithSelect: React.FC<CurrencyInputWithSelectProps> = ({
  amount,
  currency,
  onAmountChange,
  onCurrencyChange,
}) => (
  <div className={s.input_container}>
    <Select
      value={currency}
      size="large"
      className={s.select}
      onChange={(value) => onCurrencyChange(value)}
      style={{ width: '100%' }}
    >
      <Option value={FIATS.USD} className={s.item}>
        <div className="option-content">
          <Typography.Text style={{ marginLeft: 8 }}>US Dollar</Typography.Text>
        </div>
      </Option>
      <Option value={FIATS.EUR} className={s.item}>
        <div className="option-content">
          <Typography.Text style={{ marginLeft: 8 }}>Euro</Typography.Text>
        </div>
      </Option>
      <Option value={FIATS.UKR} className={s.item}>
        <div className="option-content">
          <Typography.Text style={{ marginLeft: 8 }}>Ukraine Hryvnia</Typography.Text>
        </div>
      </Option>
    </Select>

    <Input
      type="number"
      value={amount}
      onChange={(e) => {
        const value = e.target.value;
        onAmountChange(value === '' ? '' : parseFloat(value));
      }}
      onBlur={() => {
        if (amount === '') {
          onAmountChange(0);
        }
      }}
      size="large"
      style={{ width: '100%' }}
    />
  </div>
);

export default CurrencyInputWithSelect;
