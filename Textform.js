import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        if (text.trim() === "") {
            props.showAlert("Error", "Text field is empty");
            return;
        }
        setText(text.toUpperCase());
        props.showAlert("Success", "Text changed to UPPERCASE");
    };

    const handleDownClick = () => {
        if (text.trim() === "") {
            props.showAlert("Error", "Text field is empty");
            return;
        }
        setText(text.toLowerCase());
        props.showAlert("Success", "Text changed to lowercase");
    };

    const handleRemoveSpaces = () => {
        if (text.trim() === "") {
            props.showAlert("Error", "Text field is empty");
            return;
        }
        setText(text.replace(/\s+/g, ''));
        props.showAlert("Success", "Extra spaces removed");
    };

    const handleClear = () => {
        setText("");
        props.showAlert("Success", "Text cleared");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy = () => {
        if (text.trim() === "") {
            props.showAlert("Error", "Text field is empty");
            return;
        }
        navigator.clipboard.writeText(text);
        props.showAlert("Success", "Text copied to clipboard");
    };

    const wordCount = text.split(/\s+/).filter(Boolean).length;

    return (
        <>
            <div className="flex items-start justify-center min-h-screen bg-gray-100 pt-20">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
                    <h1 className="text-xl font-semibold mb-4 text-center">{props.heading}</h1>
                    <textarea
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
                        focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={text}
                        onChange={handleOnChange}
                        placeholder="Enter text here"
                    ></textarea>
                    <div className="flex flex-wrap justify-between mt-4">
                        <button
                            className="my-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled={text.length===0}"
                            onClick={handleUpClick}
                        >
                            Convert To Uppercase
                        </button>
                        <button
                            className="my-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled={text.length===0}"
                            onClick={handleDownClick}
                        >
                            Convert To Lowercase
                        </button>
                        <button
                            className="my-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled={text.length===0}"
                            onClick={handleRemoveSpaces}
                        >
                            Remove Spaces
                        </button>
                        <button
                            className="my-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled={text.length===0}"
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                        <button
                            className="my-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 disabled={text.length===0}"
                            onClick={handleCopy}
                        >
                            Copy
                        </button>
                    </div>
                    <div className="summary mt-4">
                        <h1><b>Your Summary:</b></h1>
                        <p>Words: {wordCount}</p>
                        <p>Characters: {text.length}</p>
                        <p><b>Preview:</b></p>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
