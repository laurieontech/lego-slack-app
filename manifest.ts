import { Manifest } from "deno-slack-sdk/mod.ts";
import { LegoFunctionDef } from "./functions/lego.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "laurie-lego",
  description: "Laurie's slack app",
  icon: "assets/default_new_app_icon.png",
  functions: [LegoFunctionDef],
  workflows: [],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
