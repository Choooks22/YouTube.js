import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.ts";
import {
  WireMessage,
} from "../../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize.ts";

export declare namespace $.youtube.CreateCommentReplyParams {
  export type UnknownParams = {
    unkNum: number;
  }
}
export type Type = $.youtube.CreateCommentReplyParams.UnknownParams;

export function getDefaultValue(): $.youtube.CreateCommentReplyParams.UnknownParams {
  return {
    unkNum: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.CreateCommentReplyParams.UnknownParams>): $.youtube.CreateCommentReplyParams.UnknownParams {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.CreateCommentReplyParams.UnknownParams): unknown {
  const result: any = {};
  if (value.unkNum !== undefined) result.unkNum = tsValueToJsonValueFns.int32(value.unkNum);
  return result;
}

export function decodeJson(value: any): $.youtube.CreateCommentReplyParams.UnknownParams {
  const result = getDefaultValue();
  if (value.unkNum !== undefined) result.unkNum = jsonValueToTsValueFns.int32(value.unkNum);
  return result;
}

export function encodeBinary(value: $.youtube.CreateCommentReplyParams.UnknownParams): Uint8Array {
  const result: WireMessage = [];
  if (value.unkNum !== undefined) {
    const tsValue = value.unkNum;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.CreateCommentReplyParams.UnknownParams {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.unkNum = value;
  }
  return result;
}
