import { Collection, Item } from '../../utils/interfaces/collection.interface';

export type Journals = Array<Journal>;
export interface Journal extends Item {
  date?: string;
  exercise?: string;
  sets?: number;
  reps?: number;
}

export interface JournalsAPI extends Collection {
  items: Journals;
}
