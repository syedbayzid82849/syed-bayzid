import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div class="terminal-loader">
            <div className="terminal-header">
                <div class="terminal-title">Status</div>
                <div class="terminal-controls">
                    <div class="control close"></div>
                    <div class="control minimize"></div>
                    <div class="control maximize"></div>
                </div>
            </div>
            <div class="text">Loading...</div>
        </div>

    );
};

export default Loading;