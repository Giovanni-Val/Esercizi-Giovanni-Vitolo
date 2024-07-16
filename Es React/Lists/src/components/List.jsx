export function List({ names }) {

    return (
        <ul>
            {names.map((name) => {
                <li>{name}</li>
            })}
        </ul>
    )
}

export default List