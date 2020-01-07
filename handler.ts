import { APIGatewayProxyHandler } from "aws-lambda";
import { readFile, WorkBook } from "xlsx";
import * as processorConfig from "./processor-config.json";
import { container } from "./inversify.config";
import { IProcessor } from "./interfaces";
import { TYPES } from "./types";
import "source-map-support/register";

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  const processor = container.get<IProcessor>(TYPES.IProcessor);

  const workbook: WorkBook = readFile(event);
  const processorName = processorConfig["PulsePower"];
  processor[processorName].call(this, workbook);

  return {
    statusCode: 200,
    body: "hello"
  };
};
