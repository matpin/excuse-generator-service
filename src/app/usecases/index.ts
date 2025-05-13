import { MongoExcuseRepository } from "../../infrastructure/db/mongo";
import { generateExcuse } from "./generateExcuse";

const mongoExcuseRepository = new MongoExcuseRepository();

export const getExcuse = () => generateExcuse(mongoExcuseRepository);
