import { RepositoryFactory } from "../../infrastructure/config";
import { generateExcuse } from "./generateExcuse";

export const getExcuse = () => {
  const excuseRepo = RepositoryFactory.getExcuseRepository();
  return generateExcuse(excuseRepo);
};
