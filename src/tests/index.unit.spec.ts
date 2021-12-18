import { title } from "../index";

describe("index", () => {
    it("should succeed", () => {
        expect(title).toContain("Korra");
    });
});