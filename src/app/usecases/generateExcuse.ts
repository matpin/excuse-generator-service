import { ExcuseRepository } from "../../domain/ports";

export const generateExcuse = async (
  repo: ExcuseRepository
): Promise<string> => {
  const [intro, scapegoat, delay] = await Promise.all([
    repo.getExcuse("intro"),
    repo.getExcuse("scapegoat"),
    repo.getExcuse("delay"),
  ]);

  if (!intro || !scapegoat || !delay) throw new Error("Missing data");

  return `${intro} ${scapegoat} ${delay}.`;
};
