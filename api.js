// api.js

import express from 'express';
import Binance from 'node-binance-api';
import OKEx from 'okex-api-node';

const app = express();

// Binance API credentials and account IDs
const binanceAccounts = [
    {
        id: 'accountId1',
        apiKey: 'YOUR_BINANCE_API_KEY_1',
        apiSecret: 'YOUR_BINANCE_API_SECRET_1',
    },
    {
        id: 'accountId2',
        apiKey: 'YOUR_BINANCE_API_KEY_2',
        apiSecret: 'YOUR_BINANCE_API_SECRET_2',
    },
    // Add more Binance accounts as needed
];

// OKEx API credentials and account IDs
const okexAccounts = [
    {
        id: 'accountId3',
        apiKey: 'YOUR_OKEX_API_KEY_1',
        apiSecret: 'YOUR_OKEX_API_SECRET_1',
    },
    {
        id: 'accountId4',
        apiKey: 'YOUR_OKEX_API_KEY_2',
        apiSecret: 'YOUR_OKEX_API_SECRET_2',
    },
    // Add more OKEx accounts as needed
];

// Function to close positions on Binance for a given account
const closeBinancePositions = async (binanceAPI, accountId) => {
    // Implement the logic to close positions on Binance for the given account ID
};

// Function to close positions on OKEx for a given account
const closeOKExPositions = async (okexAPI, accountId) => {
    // Implement the logic to close positions on OKEx for the given account ID
};

// Define the API endpoint for closing positions for both Binance and OKEx
app.post('/close-positions', async (req, res) => {
    try {
        const { accountId } = req.body; // Get the account ID from the request body

        // Loop through Binance accounts and close positions
        for (const account of binanceAccounts) {
            if (account.id === accountId) {
                const binanceAPI = new Binance().options({
                    APIKEY: account.apiKey,
                    APISECRET: account.apiSecret,
                });
                await closeBinancePositions(binanceAPI, accountId);
            }
        }

        // Loop through OKEx accounts and close positions
        for (const account of okexAccounts) {
            if (account.id === accountId) {
                const okexAPI = new OKEx({
                    apiKey: account.apiKey,
                    apiSecret: account.apiSecret,
                });
                await closeOKExPositions(okexAPI, accountId);
            }
        }

        res.json({ message: 'Positions closed successfully for account ID: ' + accountId });
    } catch (error) {
        console.error('Error closing positions:', error);
        res.status(500).json({ error: 'Error closing positions' });
    }
});

export default app;
