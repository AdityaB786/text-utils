import React from 'react';

function Alerts(props) {
    return (
        <div className="w-full h-auto bg-gray-100 p-0 m-0">
            {props.alert && (
                <div
                    className={`flex items-center p-4 text-sm border rounded-lg ${props.alert.type === 'Success' ? 'bg-green-50 border-green-300 text-green-800' : 'bg-red-50 border-red-300 text-red-800'}`}
                    role="alert"
                >
                    <svg
                        className="flex-shrink-0 inline w-5 h-5 mr-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        {props.alert.type === 'Success' ? (
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        ) : (
                            <path d="M10 2a8 8 0 1 0 8 8A8.01 8.01 0 0 0 10 2Zm-1 4a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V6Zm0 6a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Z" />
                        )}
                    </svg>
                    <div>
                        <span className="font-semibold">{props.alert.type}:</span> {props.alert.message}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Alerts;
