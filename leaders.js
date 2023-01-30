const https = require('https');

function getHolders() {
https.get('https://xchain.io/api/asset/holders/SHARPS', (res) => {
res.setEncoding('utf8');
let rawData = '';
res.on('data', (chunk) => { rawData += chunk; });
res.on('end', () => {
try {
const holders = JSON.parse(rawData);
let leaderboard = '<h1>SHARPS Leaderboard</h1><table><tr><th>Rank</th><th>Address</th><th>Balance</th></tr>';
holders.forEach((holder, index) => {
leaderboard += <tr><td>${index + 1}</td><td>${holder.address}</td><td>${holder.balance}</td></tr>;
});
leaderboard += '</table>';
console.log(leaderboard);
} catch (error) {
console.error(error);
}
});
}).on('error', (error) => {
console.error(error);
});
}

setInterval(getHolders, 24 * 60 * 60 * 1000);