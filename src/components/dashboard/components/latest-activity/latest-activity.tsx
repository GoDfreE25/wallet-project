import type { TableProps } from 'antd';
import { Table, Tag } from 'antd';
import s from './latest-activity.module.scss';

interface DataType {
  id: number;
  date: string;
  description: string;
  amount: string;
  status: string;
}
const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Timestamp',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <Tag color={ status === 'Rejected'? 'red' : 'green'} key={_}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
];

export const LatestActivity = () => {
  const activities: DataType[] = [
    { id: 1, date: '10 Jan, 2024', description: 'Bye phone', amount: '100.00 USD', status: 'Confirmed' },
    { id: 2, date: '10 Jan, 2024', description: 'Send to Jhon', amount: '140.00 USD', status: 'Rejected' },
    { id: 4, date: '10 Jan, 2024', description: 'Send to Mary', amount: '100.00 USD', status: 'Confirmed' },
    { id: 3, date: '10 Jan, 2024', description: 'Withdraw', amount: '100.00 EUR', status: 'Rejected' },
  ];
  return (
    <div className={s.wrapper}>
      <Table<DataType> columns={columns} dataSource={activities} />
    </div>
  );
};
