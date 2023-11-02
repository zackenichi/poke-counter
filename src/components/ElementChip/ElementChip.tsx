import { Chip } from '@mui/material';
import { FC } from 'react';
import { ElementIcon } from '../ElementIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { resetSelected, setSelected } from '../../store/ElementReducer';

interface ElementChipProps {
  element: string;
}

const ElementChip: FC<ElementChipProps> = ({ element }) => {
  const dispatch = useDispatch();

  const selectedElements = useSelector(
    (state: RootState) => state.element.selected
  );

  const handleClick = () => {
    if (element === 'reset') {
      dispatch(resetSelected());
    } else if (selectedElements.includes(element)) {
      dispatch(
        setSelected(selectedElements.filter((item) => item !== element))
      );
    } else {
      dispatch(setSelected([...selectedElements, element]));
    }
  };

  return (
    <Chip
      label={element}
      icon={<ElementIcon element={element} />}
      onClick={handleClick}
      sx={{
        mr: 1,
        my: 1,
        padding: '2px 5px',
        textTransform: 'uppercase',
        color: selectedElements.includes(element) ? 'white' : 'auto',
        // fontWeight: selectedElements.includes(element) ? 'bold' : 'normal',
        backgroundColor: selectedElements.includes(element)
          ? 'primary.main'
          : 'white',
        '&: hover': {
          backgroundColor: 'primary.main',
          opacity: 0.8,
          fontWeight: 'bold',
        },
      }}
    />
  );
};

export { ElementChip };
