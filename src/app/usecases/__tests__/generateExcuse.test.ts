import { ExcuseRepository } from "../../../domain/ports";
import { generateExcuse } from "../generateExcuse";

describe("generateExcuse", () => {
  it("should return an excuse", async () => {
    const mockRepo: ExcuseRepository = {
      getExcuse: jest
        .fn()
        .mockResolvedValueOnce("Look, I had every intention to come")
        .mockResolvedValueOnce("but the talking toaster I just bought")
        .mockResolvedValueOnce("filed a restraining order against me"),
    };

    const result = await generateExcuse(mockRepo);

    expect(mockRepo.getExcuse).toHaveBeenCalledTimes(3);
    expect(result).toBe(
      "Look, I had every intention to come but the talking toaster I just bought filed a restraining order against me."
    );
  });

  it("should throw an error when data is missing", async () => {
    const mockRepo: ExcuseRepository = {
      getExcuse: jest
        .fn()
        .mockResolvedValueOnce("")
        .mockResolvedValueOnce("but the talking toaster I just bought")
        .mockResolvedValueOnce("filed a restraining order against me"),
    };

    await expect(generateExcuse(mockRepo)).rejects.toThrow("Missing data");
  });
});
