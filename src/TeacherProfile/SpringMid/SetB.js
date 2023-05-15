import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SetB = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [inputValues, setInputValues] = useState(['', '', '']);

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    const handleNextClick = () => {
        if (inputValues[activeIndex] === '') {
            document.body.classList.add('error');
        } else {
            document.body.classList.remove('error');
            setActiveIndex(activeIndex + 1);
        }
    }
    return (
        <div>
            <form>
                <ul className="items">
                    {['Username', 'Email', 'Password'].map((label, index) => (
                        <li key={index} className={index === activeIndex ? 'active' : ''}>
                            <fieldset className={index === activeIndex ? 'enable' : 'disable'}>
                                <div className="icon left">
                                    {label === 'Username' && <i className="user"></i>}
                                    {label === 'Email' && <i className="letter"></i>}
                                    {label === 'Password' && <i className="lock"></i>}
                                </div>
                                <input
                                    type={label === 'Email' ? 'email' : 'text'}
                                    placeholder={label}
                                    value={inputValues[index]}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                />
                                <div className="icon right button" onClick={handleNextClick}>
                                    <i className="arrow"></i>
                                </div>
                            </fieldset>
                        </li>
                    ))}
                    <li className={activeIndex === 3 ? 'active' : ''}>
                        <fieldset className={activeIndex === 3 ? 'enable' : 'disable'}>
                            <div className="icon left">
                                <i className="heart"></i>
                            </div>
                            <p>Thanks for your time</p>
                            <div className="icon right">
                                <i className="heart"></i>
                            </div>
                        </fieldset>
                    </li>
                </ul>
            </form>
        </div>
    );
};

export default SetB;