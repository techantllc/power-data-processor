import { APIGatewayProxyHandler } from "aws-lambda";
import { readFile, WorkBook } from "xlsx";
import { container } from "./inversify.config";
import { IProcessor } from "./interfaces";
import { TYPES } from "./types";
import "source-map-support/register";

const processorConfig = {
  "PulsePower": "processPulsePower"
}

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  const processor = container.get<IProcessor>(TYPES.IProcessor);

  const processorName = processorConfig[event.provider];
  const workbook: WorkBook = readFile(event.sheet);

  processor[processorName].call(this, workbook);

  return {
    statusCode: 200,
    body: "hello"
  };
};
