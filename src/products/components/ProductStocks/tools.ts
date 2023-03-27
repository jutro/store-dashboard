import { SkuSchema } from "./constants";

export const containsDot = (value: string) => value.includes(".");

export const parseSkuSchema = (skuValue: string) => SkuSchema.parse(+skuValue);

export const isSkuValid = (skuValue: string, productTypeName: string) => {
  if (productTypeName !== "Badanie") {
    return true;
  }

  try {
    if (containsDot(skuValue)) {
      throw new Error();
    }

    parseSkuSchema(skuValue);

    return true;
  } catch {
    return false;
  }
};
