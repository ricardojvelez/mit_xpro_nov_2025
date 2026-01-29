/**
 * @jest-environment jsdom
 */
/**
 * This is some dark magic, don't mind the details for now!
 */
const fs = require("fs");
const path = require("path");

// getByRole is a function that is used to find an element by its role
const { getByRole } = require("@testing-library/dom");
describe("Element", function () {

    // This "beforeEach" is some dark magic, don't mind the details for now!
    beforeEach(function () {
        // Load the actual HTML file
        const html = fs.readFileSync(path.resolve(__dirname, "element.html"), "utf8");
        document.documentElement.innerHTML = html;
    });

    it("renders correct text", function () {
        const element = document.getElementById("my-element");

        expect(element.textContent).toBe("Ok!");
    });

    it("finds button by role", function () {
        const button = getByRole(document.body, "button");

        expect(button.textContent).toBe("Sweet");
    });

    it("finds button with id", function () {
        const element = document.getElementById("btn123");

        expect(element.textContent).toBe("Sweet");
    });
});

