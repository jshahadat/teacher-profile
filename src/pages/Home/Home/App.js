import React from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
const animatedComponents = makeAnimated();
const App = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div>
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
            />
        </div>
    );
};

export default App;