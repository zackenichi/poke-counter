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
  const weaknesses = selectedElements.flatMap((selectedElement) => {
    const element = elementComparisson.find(
      (item) => item.element === selectedElement
    );
    if (element) {
      return element.weakness.filter(
        (weakness) =>
          !elementComparisson.find(
            (item) =>
              item.element === weakness &&
              item.immunity.includes(selectedElement)
          )
      );
    }
    return [];
  });

  // Find the unique weaknesses using a Set
  const uniqueWeaknesses: string[] = Array.from(new Set(weaknesses)).filter(
    (weakness) =>
      elementComparisson.some(
        (item) =>
          item.element === weakness &&
          !selectedElements.some((selectedElement) =>
            item.immunity.includes(selectedElement)
          )
      )
  );

  // Filter the elements array based on the unique weaknesses or use the elements array if no selected elements
  const filteredElements =
    selectedElements.length > 0
      ? elementComparisson
          .filter((item) => uniqueWeaknesses.includes(item.element))
          .map((item) => item.element)
      : elements;

  return (
    <Grid container spacing={2}>
      {filteredElements.map((element) => (
        <Grid item md={2} xs={12} key={element}>
          <ElementCard element={element} />
        </Grid>
      ))}
    </Grid>
  );
};

export { ElementList };
