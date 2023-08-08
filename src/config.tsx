import EditModal from './components/modal';

export const columns = (isUpdated: any) => {
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Manufacturer',
      dataIndex: 'manufacturer',
      key: 'manufacturer',
    },
    {
      title: 'Cost in Credits',
      dataIndex: 'cost_in_credits',
      key: 'cost_in_credits',
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: 'Total number of units',
      dataIndex: 'edit_count',
      key: 'edit_count',
      render: (_: any, record: Starship) => {
        return <EditModal record={record} isUpdated={isUpdated} />;
      },
    },
  ];
};

export interface InputTypeProps {
  description: string;
  key: string;
  name: string;
}

export const inputInfo: InputTypeProps[] = [
  { name: 'Set', key: 'set', description: 'Set the total number of uits' },
  {
    name: 'Increase',
    key: 'increase',
    description: 'Increase the number of units by',
  },
  {
    name: 'Decrease',
    key: 'decrease',
    description: 'Decrease the number of units by',
  },
];

export interface Starship {
  key: string
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  count: number;
  created: string;
  createdAt: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  id: number;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  starship_class: string;
  updatedAt: string;
  url: string;
}
