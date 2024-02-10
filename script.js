const cryptocurrencies = [
    'BTC', 'ETH', 'XRP', 'LTC', 'BCH', 'ADA', 'XLM', 'EOS', 'XMR', 'TRX', 
    'BNB', 'DOT', 'LINK', 'DOGE', 'USDT', 'UNI', 'AAVE', 'SUSHI', 'COMP', 'YFI'
];
const leverages = ['5x', '10x', '20x', '30x', '40x', '50x', '60x', '75x', '80x', '100x', '150x', '200x'];
const directions = ['Long', 'Short'];

function generateRandom() {
    const randomCrypto = cryptocurrencies[Math.floor(Math.random() * cryptocurrencies.length)];
    const randomLeverage = leverages[Math.floor(Math.random() * leverages.length)];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];

    document.getElementById('crypto-name').textContent = `Cryptocurrency: ${randomCrypto}`;
    document.getElementById('leverage').textContent = `Leverage: ${randomLeverage}`;
    document.getElementById('direction').textContent = `Direction: ${randomDirection}`;
}
