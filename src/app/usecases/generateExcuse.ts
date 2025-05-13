import { ExcuseRepository } from "../../domain/ports";

export const generateExcuse = async (
  repo: ExcuseRepository
): Promise<string> => {
  const [intro, scapegoat, delay] = await Promise.all([
    repo.getExcuse("intro"),
    repo.getExcuse("scapegoat"),
    repo.getExcuse("delay"),
  ]);

  return `${intro} ${scapegoat} ${delay}.`;
};
