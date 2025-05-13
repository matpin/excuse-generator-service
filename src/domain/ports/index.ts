import { ExcuseType } from "../entities";

export interface ExcuseRepository {
  getExcuse(type: ExcuseType): Promise<string>;
}
