import { Button } from 'antd';
import { InputTypeProps } from '../../config';

interface ButtonTypeProps{
  info:InputTypeProps[];
   onSelect : (value:InputTypeProps) => void;
}

const ButtonType = ({ info, onSelect }: ButtonTypeProps) => {

  return (
    <div>
      <div className="flex flex-row w-full max-w-xs mx-auto justify-between">
        {info.map((el: InputTypeProps) => {
          return (
            <Button
              type='primary'
              key={el.key}
              onClick={() => onSelect(el)}
            >
              {el.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonType;
