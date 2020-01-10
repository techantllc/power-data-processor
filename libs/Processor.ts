import { IProcessor } from "../interfaces";
import { WorkBook } from "xlsx/types";
import { injectable } from "inversify";

@injectable()
export class Processor implements IProcessor {
    public processPulsePower(workbook: WorkBook): any {
        
    }
}