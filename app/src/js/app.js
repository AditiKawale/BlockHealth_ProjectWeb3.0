// if (typeof web3 !== 'undefined') {
//     web3 = new Web3(web3.currentProvider);
// } else {
//     // set the provider you want from Web3.providers
// web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
// }

var web3;

var agentContractAddress = "0x1c332EE0132883Efa6FFc33149f2Ef0e0172ed05";

function connect() {
  web3 = new Web3(window.ethereum);
  window.ethereum.enable().catch((error) => {
    // User denied account access
    console.log(error);
  });
  abi = JSON.parse(
    '[ { "constant": false, "inputs": [ { "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "uint256", "name": "_age", "type": "uint256" }, { "internalType": "string", "name": "_email", "type": "string" }, { "internalType": "uint256", "name": "_designation", "type": "uint256" }, { "internalType": "string", "name": "_hash", "type": "string" } ], "name": "add_agent", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "doctorList", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "addr", "type": "address" } ], "name": "get_accessed_doctorlist_for_patient", "outputs": [ { "internalType": "address[]", "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "addr", "type": "address" } ], "name": "get_accessed_patientlist_for_doctor", "outputs": [ { "internalType": "address[]", "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "addr", "type": "address" } ], "name": "get_doctor", "outputs": [ { "internalType": "string", "name": "", "type": "string" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "get_doctor_list", "outputs": [ { "internalType": "address[]", "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "paddr", "type": "address" } ], "name": "get_hash", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "addr", "type": "address" } ], "name": "get_patient", "outputs": [ { "internalType": "string", "name": "", "type": "string" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "string", "name": "", "type": "string" }, { "internalType": "uint256[]", "name": "", "type": "uint256[]" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "paddr", "type": "address" }, { "internalType": "address", "name": "daddr", "type": "address" } ], "name": "get_patient_doctor_name", "outputs": [ { "internalType": "string", "name": "", "type": "string" }, { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "get_patient_list", "outputs": [ { "internalType": "address[]", "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "paddr", "type": "address" }, { "internalType": "uint256", "name": "_diagnosis", "type": "uint256" }, { "internalType": "string", "name": "_hash", "type": "string" } ], "name": "insurance_claim", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "patientList", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "addr", "type": "address" } ], "name": "permit_access", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "paddr", "type": "address" }, { "internalType": "address", "name": "daddr", "type": "address" } ], "name": "remove_patient", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "daddr", "type": "address" } ], "name": "revoke_access", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" } ]'
  );
  AgentContract = web3.eth.contract(abi);
  contractInstance = AgentContract.at(agentContractAddress);
  web3.eth.defaultAccount = web3.currentProvider.selectedAddress;
  console.log("Web3 Connected:" + web3.eth.defaultAccount);
  return web3.currentProvider.selectedAddress;
}

window.addEventListener("load", async () => {
  // New web3 provider
  connect();
  console.log("Externally Loaded!");
});
