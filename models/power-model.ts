import { State } from "./state";
import { Provider } from "./provider";
import { PowerType } from "./power-type";


export class PowerModel {
	REP?: Provider;
	state?: State;
	zone?: string;
	utility: string;
	type?: PowerType;
	startMonth?: Date;
	endMonth?: Date;
	term?: number;
	rateClass?: string;
	description?: string;
	brokerMils?: number;
	basePrice?: number;
}