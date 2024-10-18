import prompt from "prompt";
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createQrCode from "./services/qr-code/create-qrcode.js";
import createPassword from "./services/password/create-password.js";


async function main() {
    prompt.get(promptSchemaMain, async (err, choice) => {
        if(choice.select == 1) await createQrCode();
        if(choice.select == 2) await createPassword();
    });

    prompt.start();
};

main();