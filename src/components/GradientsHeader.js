import React from "react"


const Icon = () => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-clockwise"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M3.17 6.706a5 5 0 0 1 7.103-3.16.5.5 0 1 0 .454-.892A6 6 0 1 0 13.455 5.5a.5.5 0 0 0-.91.417 5 5 0 1 1-9.375.789z"
            />
            <path
                fillRule="evenodd"
                d="M8.147.146a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708L10.293 3 8.147.854a.5.5 0 0 1 0-.708z"
            />
        </svg>
    );
};

const GradientsHeader = (props) => {
    const { children, list } = props;
    // const randomNumber = Math.floor(Math.random()*list.length)
    const [randomNumber, setRandomNumber] = React.useState(
        Math.floor(Math.random() * list.length)
    );

    const handleReloadClick = () => {
        setRandomNumber(Math.floor(Math.random() * list.length));
    };

    const backgroundImage = `linear-gradient(to right, ${list[randomNumber].start}, ${list[randomNumber].end} )`;
    const style = {
        backgroundImage
    };
    return (
        <header className="text-center bg-dark text-white py-5 mb-5" style={style}>
            {children}
            <button
                type="button"
                className="btn btn-outline-light"
                aria-label="Changer le fond"
                onClick={handleReloadClick}
            >

                <Icon />
            </button>
        </header>
    );
};
export default GradientsHeader


