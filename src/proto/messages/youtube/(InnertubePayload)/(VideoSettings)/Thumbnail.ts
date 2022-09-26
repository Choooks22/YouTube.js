import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../runtime/json/scalar.ts";
import {
  WireMessage,
} from "../../../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize.ts";

export declare namespace $.youtube.InnertubePayload.VideoSettings {
  export type Thumbnail = {
    imageData: Uint8Array;
  }
}
export type Type = $.youtube.InnertubePayload.VideoSettings.Thumbnail;

export function getDefaultValue(): $.youtube.InnertubePayload.VideoSettings.Thumbnail {
  return {
    imageData: new Uint8Array(),
  };
}

export function createValue(partialValue: Partial<$.youtube.InnertubePayload.VideoSettings.Thumbnail>): $.youtube.InnertubePayload.VideoSettings.Thumbnail {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.InnertubePayload.VideoSettings.Thumbnail): unknown {
  const result: any = {};
  if (value.imageData !== undefined) result.imageData = tsValueToJsonValueFns.bytes(value.imageData);
  return result;
}

export function decodeJson(value: any): $.youtube.InnertubePayload.VideoSettings.Thumbnail {
  const result = getDefaultValue();
  if (value.imageData !== undefined) result.imageData = jsonValueToTsValueFns.bytes(value.imageData);
  return result;
}

export function encodeBinary(value: $.youtube.InnertubePayload.VideoSettings.Thumbnail): Uint8Array {
  const result: WireMessage = [];
  if (value.imageData !== undefined) {
    const tsValue = value.imageData;
    result.push(
      [1, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.VideoSettings.Thumbnail {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.imageData = value;
  }
  return result;
}
