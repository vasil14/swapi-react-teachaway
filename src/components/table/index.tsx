import { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { columns, Starship } from '../../config';


const TableComponent: React.FC = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [updated, setUpdated] = useState<string>('');
console.log(starships);

  useEffect(() => {
    fetchStarships();
  }, [updated]);

  const isUpdated = (value: string) => {
    setUpdated(value);
  };

  const fetchStarships = async () => {
    try {
      const response = await axios.get<Starship[]>(
        'http://localhost:3000/starships'
      );

      setStarships(response.data);
    } catch (error) {
      console.error('Error fetching starships:', error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <div className="text-5xl my-5">Starships Information</div>
      <Table
        columns={columns(isUpdated)}
        dataSource={starships.map((starship) => ({
          ...starship,
          key: starship.id.toString(),
        }))}
        bordered
      />
    </div>
  );
};

export default TableComponent;
