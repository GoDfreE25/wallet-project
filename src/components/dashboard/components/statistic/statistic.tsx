import { Card, Statistic as StatisticAnt } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import s from '../statistic/statistic.module.scss';

const stats = [
  { amount: 10000.0, currency: 'EUR', value: 10.5, id: '1' },
  { amount: 5652400.0, currency: 'USD', value: 22.5, id: '2' },
  { amount: 5062400.0, currency: 'UAH', value: 11.1, id: '3' },
];

export const Statistic = () => {
  return (
    <div className={s.wrapper}>
      {stats.map((stat) => (
        <Card
          className={s.card}
          key={stat.id}
          bordered={false}
          title={
            <div className={s.statistic_container}>
              <h3>{stat.currency}</h3>
              <StatisticAnt
                className={s.statistic}
                value={stat.value}
                precision={2}
                valueStyle={{ color: stat.currency !== 'EUR' ? '#3f8600' : '#cf1322' }}
                prefix={stat.currency !== 'EUR' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                suffix="%"
              />
            </div>
          }
        >
          <p className={s.card_subtitle}>{stat.amount}</p>
        </Card>
      ))}
    </div>
  );
};
