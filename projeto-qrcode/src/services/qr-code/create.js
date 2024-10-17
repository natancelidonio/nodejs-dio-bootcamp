import prompt from "prompt";
import promptQRCode from "../../prompts/prompt-qrcode.js";
import handler from "./handler.js";

async function createQrCode() {
    prompt.get(promptQRCode, handler);

    prompt.start();
}

export default createQrCode;