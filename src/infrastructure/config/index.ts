import { ExcuseRepository } from "../../domain/ports";
import { MongoExcuseRepository } from "../db/mongo";

const dbType = process.env.DB_TYPE;

export class RepositoryFactory {
  static getExcuseRepository(): ExcuseRepository {
    switch (dbType) {
      case "mongo":
        return new MongoExcuseRepository();
      default:
        throw new Error(`Unsupported DB type: ${dbType}`);
    }
  }
}
