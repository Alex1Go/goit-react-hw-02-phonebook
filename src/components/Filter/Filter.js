export const Filter = ({value, onFilter}) => {
    return (
        <label>Find contacts by name
            <input
                type="text"
                value={value}
                onFilter={onFilter}
            />
        </label>
    );
}