import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

export const LegoFunctionDef = DefineFunction({
  callback_id: "lego_function",
  title: "Lego",
  source_file: "functions/lego.ts",
  input_parameters: {
    properties: {
      input_string: {
        type: Schema.types.string,
      },
    },
    required: ["input_string"],
  },
  output_parameters: {
    properties: {
      result: {
        type: Schema.types.string,
      },
    },
    required: ["result"],
  },
});

export default SlackFunction(
  LegoFunctionDef,
  ({ inputs }) => {
    let response = "You don't have any more room!";
    if (inputs.input_string.includes("castle")) {
      response = "You already have 2 castles!";
    } else if (inputs.input_string.includes("coaster")) {
      response = "You already have a roller coaster!";
    } else if (
      inputs.input_string.includes("flower") ||
      inputs.input_string.includes("tree")
    ) {
      response = "You have like 4 LEGO plants already!";
    }

    return {
      outputs: {
        result: response,
      },
    };
  },
);
