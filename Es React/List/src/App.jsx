import { Colors } from './components/Colors';

const colorList = [
  { id: 1, name: 'Rosso' },
  { id: 2, name: 'Blu' },
  { id: 3, name: 'Verde' },
  { id: 4, name: 'Giallo' }
];

export const App = () => {
  return (
    <div>
      <h1>Color List</h1>
      <Colors colors={colorList} />
    </div>
  );
};