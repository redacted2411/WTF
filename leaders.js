<script>
async function getAssetInformation() {
  try {
    const response = await fetch('https://xchain.io/api/asset/holders/SHARPS');
    const assets = await response.json();
    let assetArray = Array.isArray(assets) ? assets : Object.values(assets);
    let assetInfo = "<table><tr><th>Address</th><th>Balance</th></tr>";
    for (let asset of assetArray) {
      assetInfo += `<tr><td>${asset.address}</td><td>${asset.balance}</td></tr>`;
    }
    assetInfo += "</table>";
    document.querySelector("table").insertAdjacentHTML("afterend", assetInfo);
  } catch (error) {
    console.error(error);
  }
}

getAssetInformation();
</script>
