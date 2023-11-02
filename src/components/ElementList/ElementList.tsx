import { Grid } from '@mui/material';
import { FC } from 'react';
import { ElementCard } from '../ElementCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { elementComparisson } from '../../data/elementComparisson';
import elements from '../../data/elements';

const ElementList: FC = () => {
  const selectedElements = useSelector(
    (state: RootState) => state.element.selected
  );

  // Get the weaknesses for the selected elements

  // Get the weaknesses for the selected elements
  const weaknesses = selectedElements.flatMap((element) => {
    const selectedElement = elementComparisson.find(
      (item) => item.element === element
    );
    return selectedElement ? selectedElement.weakness : [];
  });

  //
  // Get all immunities
  const immunities = selectedElements.flatMap((element) => {
    const selectedElement = elementComparisson.find(
      (item) => item.element === element
    );
    return selectedElement ? selectedElement.immunity : [];
  });

  // Remove immunities from weaknesses array
  const filteredWeaknesses = weaknesses.filter(
    (weakness) => !immunities.includes(weakness)
  );

  // Make sure all elements are unique
  const uniqueElements = Array.from(new Set(filteredWeaknesses));

  // Show all elements if no elements are selected
  const filteredElements =
    selectedElements.length > 0 ? uniqueElements : elements;

  return (
    <Grid container spacing={2}>
      {filteredElements.map((element) => {
        return (
          <Grid item md={2} xs={12} key={element}>
            <ElementCard element={element} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export { ElementList };
