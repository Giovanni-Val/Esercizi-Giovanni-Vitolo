export const Age = ({ age }) => {
    return (
        <p>
            {age > 18 ? `Your age is: ${age}.` : `You are very young!`}
        </p>
    )
};