const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
	const publickKeyWithoutFormat = publicKey.slice(1);

	// 2. Take the keccak-256 hash of the remaining bytes
	const hash = keccak256(publickKeyWithoutFormat);

	// 3. Take the last 20 bytes of the hash to get the address
	const address = hash.slice(-20);

	return address;
}

module.exports = getAddress;
