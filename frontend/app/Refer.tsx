// ReferButton.js
import React, { useState } from 'react';

const ReferButton = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [password, setPassword] = useState('');
    const [tokens, setTokens] = useState('');

    const handleTogglePopup = () => {
        setShowPopup((prevShowPopup) => !prevShowPopup);
    };

    const handleRefer = () => {
        console.log('Referring with Password:', password, 'and Tokens:', tokens);
        setPassword('');
        setTokens('');
        setShowPopup(false);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <button onClick={handleTogglePopup} className="refer-button">
                Refer
            </button>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                        />
                         <label>Email:</label>
                        <input
                            type="email"
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                        />

                        <label>Tokens:</label>
                        <input
                            type="text"
                            value={tokens}
                            onChange={(e) => setTokens(e.target.value)}
                            className="input-field"
                        />

                        <button onClick={handleRefer} className="submit-button">
                            Refer Now
                        </button>

                        <button onClick={handleClosePopup} className="close-button">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReferButton;
