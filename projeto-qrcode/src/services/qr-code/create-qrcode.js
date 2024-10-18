import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handler from "./handler-qrcode.js";

async function createQrCode() {
    prompt.get(promptSchemaQRCode, handler);

    prompt.start();
}

export default createQrCode;