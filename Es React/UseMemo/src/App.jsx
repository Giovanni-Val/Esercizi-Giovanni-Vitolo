import { FilteredList } from './Components/FilteredList';

export const App = () => {
  const data = [
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Roberto', age: 17 },
    { id: 3, name: 'Carlo', age: 19 },
    { id: 4, name: 'Davide', age: 15 },
    { id: 5, name: 'Eva', age: 30 },
  ];

  return (
    <div>
      <h1>Lista utenti</h1>
      <FilteredList items={data} />
    </div>
  );
};
