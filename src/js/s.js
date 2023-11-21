import { hmac, HmacAlgorithms, Encoders } from "crypto-react";

const KEY = "iTMYSOoXFwrCKhcDmzhOiwXeNXjTtIhPcwbegxCyvAsBHchNuCgNARBuDLjtMddDhONMSyZofnLHToGT";

export default async function Sig(data) {
	let _data = data
		.replaceAll("'", '"')
		.replaceAll(":", ": ")
		.replaceAll(",", ", ");

	return hmac(_data, KEY, HmacAlgorithms.HmacSHA256, Encoders.hex).then(
		(signature) => btoa(signature).replaceAll("=", "")
	);
}