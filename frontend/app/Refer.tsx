// ReferButton.js
import React, { useState } from 'react';

const ReferButton = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [password, setPassword] = useState('');
    const [tokens, setTokens] = useState('');
    const [email, setEmail] = useState('');

    const handleTogglePopup = () => {
        setShowPopup((prevShowPopup) => !prevShowPopup);
    };

    const handleSend = () => {
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                        />

                        <label>Tokens:</label>
                        <input
                            type="text"
                            value={tokens}
                            onChange={(e) => setTokens(e.target.value)}
                            className="input-field"
                        />

                        <button onClick={handleSend} className="submit-button">
                            Send Gift
                        </button>

                        <button onClick={handleClosePopup} className="refer-button">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReferButton;
