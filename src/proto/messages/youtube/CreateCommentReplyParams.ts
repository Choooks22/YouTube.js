import {
  Type as UnknownParams,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(CreateCommentReplyParams)/UnknownParams.ts";
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
  export type CreateCommentReplyParams = {
    videoId: string;
    commentId: string;
    params?: UnknownParams;
    unkNum?: number;
  }
}
export type Type = $.youtube.CreateCommentReplyParams;

export function getDefaultValue(): $.youtube.CreateCommentReplyParams {
  return {
    videoId: "",
    commentId: "",
    params: undefined,
    unkNum: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.CreateCommentReplyParams>): $.youtube.CreateCommentReplyParams {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.CreateCommentReplyParams): unknown {
  const result: any = {};
  if (value.videoId !== undefined) result.videoId = tsValueToJsonValueFns.string(value.videoId);
  if (value.commentId !== undefined) result.commentId = tsValueToJsonValueFns.string(value.commentId);
  if (value.params !== undefined) result.params = encodeJson_1(value.params);
  if (value.unkNum !== undefined) result.unkNum = tsValueToJsonValueFns.int32(value.unkNum);
  return result;
}

export function decodeJson(value: any): $.youtube.CreateCommentReplyParams {
  const result = getDefaultValue();
  if (value.videoId !== undefined) result.videoId = jsonValueToTsValueFns.string(value.videoId);
  if (value.commentId !== undefined) result.commentId = jsonValueToTsValueFns.string(value.commentId);
  if (value.params !== undefined) result.params = decodeJson_1(value.params);
  if (value.unkNum !== undefined) result.unkNum = jsonValueToTsValueFns.int32(value.unkNum);
  return result;
}

export function encodeBinary(value: $.youtube.CreateCommentReplyParams): Uint8Array {
  const result: WireMessage = [];
  if (value.videoId !== undefined) {
    const tsValue = value.videoId;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.commentId !== undefined) {
    const tsValue = value.commentId;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.params !== undefined) {
    const tsValue = value.params;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.unkNum !== undefined) {
    const tsValue = value.unkNum;
    result.push(
      [10, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.CreateCommentReplyParams {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.videoId = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.commentId = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.params = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.unkNum = value;
  }
  return result;
}
