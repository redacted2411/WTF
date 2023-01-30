setInterval(() => {
    fetch('https://xchain.io/api/holders/SHARPS')
      .then(response => response.json())
      .then(data => {
        if (data.holders) {
          const leaderboardTable = document.getElementById('leaderboard');
          leaderboardTable.innerHTML = '';
          data.holders.slice(0, 10).forEach((holder, index) => {
            const row = leaderboardTable.insertRow();
            const rankCell = row.insertCell();
            const addressCell = row.insertCell();
            const balanceCell = row.insertCell();
            rankCell.innerHTML = index + 1;
            addressCell.innerHTML = holder.address;
            balanceCell.innerHTML = holder.balance;
          });
        } else {
          console.error('Error: data.holders is undefined');
          alert('An error has occurred while fetching the data. Please try again later.');
        }
      })
      .catch(error => {
        console.error(error);
        alert('An error has occurred while fetching the data. Please try again later.');
      });
  }, 24 * 60 * 60 * 1000); // update every 24 hours
  