import {
  Type as Context,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(InnertubePayload)/Context.ts";
import {
  Type as VideoSettings,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(InnertubePayload)/VideoSettings.ts";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.ts";

export declare namespace $.youtube {
  export type InnertubePayload = {
    context?: Context;
    target?: string;
    videoSettings?: VideoSettings;
  }
}
export type Type = $.youtube.InnertubePayload;

export function getDefaultValue(): $.youtube.InnertubePayload {
  return {
    context: undefined,
    target: "",
    videoSettings: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.InnertubePayload>): $.youtube.InnertubePayload {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.InnertubePayload): unknown {
  const result: any = {};
  if (value.context !== undefined) result.context = encodeJson_1(value.context);
  if (value.target !== undefined) result.target = tsValueToJsonValueFns.string(value.target);
  if (value.videoSettings !== undefined) result.videoSettings = encodeJson_2(value.videoSettings);
  return result;
}

export function decodeJson(value: any): $.youtube.InnertubePayload {
  const result = getDefaultValue();
  if (value.context !== undefined) result.context = decodeJson_1(value.context);
  if (value.target !== undefined) result.target = jsonValueToTsValueFns.string(value.target);
  if (value.videoSettings !== undefined) result.videoSettings = decodeJson_2(value.videoSettings);
  return result;
}

export function encodeBinary(value: $.youtube.InnertubePayload): Uint8Array {
  const result: WireMessage = [];
  if (value.context !== undefined) {
    const tsValue = value.context;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.target !== undefined) {
    const tsValue = value.target;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.videoSettings !== undefined) {
    const tsValue = value.videoSettings;
    result.push(
      [20, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.context = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.target = value;
  }
  field: {
    const wireValue = wireFields.get(20);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.videoSettings = value;
  }
  return result;
}
