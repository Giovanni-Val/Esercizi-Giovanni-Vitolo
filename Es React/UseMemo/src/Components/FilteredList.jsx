import { useMemo } from 'react';

export const FilteredList = ({ items }) => {
    const filteredItems = useMemo(() => {
        return items.filter(item => item.age > 18);
    }, [items]);

    return (
        <div>
            <h2>Lista utenti maggiorenni (Età > 18)</h2>
            <ul>
                {filteredItems.map(item => (
                    <li key={item.id}>
                        Name: {item.name}, Age: {item.age}
                    </li>
                ))}
            </ul>
        </div>
    );
};
