import qr from "qrcode-terminal";
import chalk from "chalk";
import createQrCode from "./create-qrcode.js";


async function handler(err, result) {
    if(err) {
        console.log("error on application")
        return;
    };
    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green.bold("QR Code gerado com sucesso:\n"))
        console.log(qrcode);
    });
}


export default handler;