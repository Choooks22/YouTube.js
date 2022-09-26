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

export declare namespace $.youtube.SearchFilter {
  export type Filters = {
    uploadDate?: number;
    type?: number;
    duration?: number;
  }
}
export type Type = $.youtube.SearchFilter.Filters;

export function getDefaultValue(): $.youtube.SearchFilter.Filters {
  return {
    uploadDate: 0,
    type: 0,
    duration: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.SearchFilter.Filters>): $.youtube.SearchFilter.Filters {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.SearchFilter.Filters): unknown {
  const result: any = {};
  if (value.uploadDate !== undefined) result.uploadDate = tsValueToJsonValueFns.int32(value.uploadDate);
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.int32(value.type);
  if (value.duration !== undefined) result.duration = tsValueToJsonValueFns.int32(value.duration);
  return result;
}

export function decodeJson(value: any): $.youtube.SearchFilter.Filters {
  const result = getDefaultValue();
  if (value.uploadDate !== undefined) result.uploadDate = jsonValueToTsValueFns.int32(value.uploadDate);
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.int32(value.type);
  if (value.duration !== undefined) result.duration = jsonValueToTsValueFns.int32(value.duration);
  return result;
}

export function encodeBinary(value: $.youtube.SearchFilter.Filters): Uint8Array {
  const result: WireMessage = [];
  if (value.uploadDate !== undefined) {
    const tsValue = value.uploadDate;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.duration !== undefined) {
    const tsValue = value.duration;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.SearchFilter.Filters {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.uploadDate = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.type = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.duration = value;
  }
  return result;
}
