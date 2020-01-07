import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { IProcessor } from "./interfaces";
import { Processor } from "./libs/Processor";

const container = new Container({defaultScope: "Singleton"});
container.bind<IProcessor>(TYPES.IProcessor).to(Processor);

export {container}