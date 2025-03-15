const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

const PRIVATE_KEY =
	"6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
	const hash = hashMessage(msg);

	const sig = secp.sign(hash, PRIVATE_KEY, {
		recovered: true,
	});

	console.log("signature ====", sig);
	return sig;
}

module.exports = signMessage;
