import { WorkBook } from "xlsx/types";

export interface IProcessor {
    processPulsePower(workbook: WorkBook): any;
}