async function getHolders() {
  try {
    const response = await fetch('https://xchain.io/api/holders/SHARPS');
    const holdersData = await response.json();
    console.log(holdersData);
    let leaders = '<h1>SHARPS Leaderboard</h1><table><tr><th>Rank</th><th>Address</th><th>Balance</th></tr>';
    for (let i = 0; i < holdersData.length; i++) {
      leaders += `<tr><td>${i + 1}</td><td>${holdersData[i].address}</td><td>${holdersData[i].balance}</td></tr>`;
    }
    leaders += '</table>';
    console.log(leaders);
  } catch (error) {
    console.error(error);
  }
}
getHolders();
setInterval(getHolders, 24 * 60 * 60 * 1000);
