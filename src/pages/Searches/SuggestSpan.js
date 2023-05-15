import React from 'react';

const SuggestSpan = ({ name }) => {
    return (
        <a href={"/" + name} className="mainSearchBarSuggestionSpan">
            {/* <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="pt-1 pl-1"
            size="sm"
            style={{
                color: "#59e3a7",
                paddingHorizontal: 5,
            }}
        /> */}
            {" "}
            {name}
        </a>
    );
};

export default SuggestSpan;