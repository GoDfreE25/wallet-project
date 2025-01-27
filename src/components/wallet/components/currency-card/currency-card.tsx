import { Card, Typography, List, Button, Space } from 'antd';
import { CurrencyCardsProps } from '../consts/currency';
import s from '../currency-card/currency-card.module.scss';

const { Title, Text } = Typography;

export default function CurrencyCards({ currencies }: CurrencyCardsProps) {
  return (
    <>
      {currencies.map((currency, index) => (
        <Card
          key={index}
          className={s.card}
          style={{
            border: `2px solid ${currency.borderColor}`,
          }}
          bordered={false}
        >
          <Title level={2} className={s.title}>
            {currency.name} {currency.symbol}
          </Title>
          <Title level={1} className={s.title} style={{ margin: '16px 0' }}>
            {currency.balance}
          </Title>
          <div className={s.transactions_container}>
            <Title level={4}>Recent transactions</Title>
            <List
              dataSource={currency.transactions}
              renderItem={(item) => (
                <List.Item>
                  <Text>{item.date}</Text>
                  <Text>
                    {item.amount} {item.currency}
                  </Text>
                  <Text type="secondary">({item.type})</Text>
                </List.Item>
              )}
            />
          </div>
          <Space className={s.button_container} size="middle">
            <Button type="primary" style={{ backgroundColor: '#28A745', borderColor: '#28A745' }}>
              Replenish
            </Button>
            <Button type="primary" danger>
              Withdraw
            </Button>
            <Button type="primary" style={{ backgroundColor: '#007BFF', borderColor: '#007BFF' }}>
              View history
            </Button>
          </Space>
        </Card>
      ))}
    </>
  );
}
