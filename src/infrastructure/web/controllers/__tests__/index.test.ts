import { Request, Response } from "express";
import * as excuseUsecases from "../../../../app/usecases";
import { generateExcuse } from "..";

jest.mock("../../../../app/usecases", () => ({
  getExcuse: jest.fn(),
}));

describe("generate excuse", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return an excuse when generation is successful", async () => {
    const mockData =
      "Look, I had every intention to come but the talking toaster I just bought filed a restraining order against me.";
    (excuseUsecases.getExcuse as jest.Mock).mockResolvedValue(mockData);

    await generateExcuse(mockRequest as Request, mockResponse as Response);

    expect(excuseUsecases.getExcuse).toHaveBeenCalledTimes(1);
    expect(mockResponse.json).toHaveBeenCalledWith({ excuse: mockData });
  });

  it("should return 400 status when empty excuse is generated", async () => {
    (excuseUsecases.getExcuse as jest.Mock).mockResolvedValue(null);

    await generateExcuse(mockRequest as Request, mockResponse as Response);

    expect(excuseUsecases.getExcuse).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith("Empty excuse generated");
  });

  it("should return 500 status when an error occurs", async () => {
    const mockError = new Error("Database connection failed");
    (excuseUsecases.getExcuse as jest.Mock).mockRejectedValue(mockError);

    await generateExcuse(mockRequest as Request, mockResponse as Response);

    expect(excuseUsecases.getExcuse).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      error: `Failed to generate excuse, ${mockError}`,
    });
  });
});
