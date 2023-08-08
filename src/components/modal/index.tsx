import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import axios from 'axios';
import ButtonType from '../input';
import { inputInfo, Starship, InputTypeProps } from '../../config';

interface EditModalProps {
  record: Starship;
  isUpdated: (value: string) => void;
}

const EditModal: React.FC<EditModalProps> = ({ record, isUpdated }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputNumber, setInputNumber] = useState<string>('');
  const [inputType, setInputType] = useState<InputTypeProps>(inputInfo[0]);
  const [errors, setErrors] = useState<string>('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleInputClear = (selectedInputType: InputTypeProps) => {
    setInputType(selectedInputType);
    setInputNumber('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/starships/${inputType.key}`, {
        count: inputNumber,
        id: record.id,
      });
    } catch (err) {
      if (
        axios.isAxiosError(err) &&
        err.response &&
        err.response.status === 400
      ) {
        setErrors(err.response.data.message);
      }
      return;
    }
    isUpdated(inputNumber);
    setErrors('');
    setInputNumber('');
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-row">
      <Button type="primary" onClick={showModal} className="mx-auto">
        Get
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
        centered
      >
        <div className="flex flex-col gap-5 mx-auto w-full ">
          <div className="text-3xl flex ">{record.name}</div>
          <div className="text-xl flex">
            Total Count of units is: {record.count}
          </div>
          <ButtonType
            info={inputInfo}
            onSelect={(selectedInputType: InputTypeProps) =>
              handleInputClear(selectedInputType)
            }
          />
          <div className="flex flex-col justify-center justify-items-center w-full mx-auto">
            <div className="flex flex-row">
              <div>{inputType.description}</div>
              <Input
                className="justify-center flex w-24 mx-auto"
                type="number"
                min={0}
                value={inputNumber}
                placeholder="Ex: 5"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputNumber(e.target.value)
                }
              />
            </div>
            {errors && (
              <p className="text-red-500 justify-center fle mx-auto">
                {errors}
              </p>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditModal;
