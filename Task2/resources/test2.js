import fetch from "node-fetch";
// 14bdf185605e565f2141296fa27ebf1e04349c3270fe56c9f691633ccb2e0306
const hash = '14bdf185605e565f2141296fa27ebf1e04349c3270fe56c9f691633ccb2e030e';

function validate(targetHash) {
  let check = false;
  fetch(`https://cardano-testnet.blockfrost.io/api/v0/txs/${targetHash}`, {
          headers: {
          project_id: "testnet8cFXCdT1HoKuqhOGtnFq93Pb6MZVlKI3",
      },
  })
  .then((res) => res.json())
  .then((data) => {
      // console.log(data);
      if (data.status_code === 404) {
          validate(targetHash)
          console.log(data.status_code);
      } else {
          check = true;
          console.log(data.hash);
      }
  });
   
}

validate(hash);