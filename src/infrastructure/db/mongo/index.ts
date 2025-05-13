import { ExcuseType } from "../../../domain/entities";
import { ExcuseModel } from "../../../domain/models";
import { ExcuseRepository } from "../../../domain/ports";

export class MongoExcuseRepository implements ExcuseRepository {
  async getExcuse(type: ExcuseType): Promise<string> {
    const result = await ExcuseModel.aggregate([
      { $match: { type } },
      { $sample: { size: 1 } },
    ]);

    return result[0]?.text || "";
  }
}
