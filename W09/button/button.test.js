/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const { getByRole } = require("@testing-library/dom");

describe("Champions League Button", function() {

  beforeEach(function() {
    // Load the actual HTML file
    const html = fs.readFileSync(path.resolve(__dirname, "buttonExample.html"), "utf8");
    document.documentElement.innerHTML = html;

    // Execute the script from the HTML
    const scriptContent = document.querySelector("script").textContent;
    eval(scriptContent);
  });

  it("finds button by role", function() {
    var button = getByRole(document.body, "button");

    expect(button).not.toBeNull();
    expect(button.tagName).toBe("BUTTON");
  });

  it("has Bootstrap classes", function() {
    var button = getByRole(document.body, "button");

    expect(button.className).toBe("btn btn-primary");
  });

  it("starts with 0 goals", function() {
    var button = getByRole(document.body, "button");

    expect(button.textContent).toContain("Goal: 0");
  });

  it("adds a goal when clicked", function() {
    var button = getByRole(document.body, "button");

    button.click();

    expect(button.textContent).toContain("Goal: 1");
  });

  it("adds multiple goals when clicked multiple times", function() {
    var button = getByRole(document.body, "button");

    button.click();
    button.click();
    button.click();

    expect(button.textContent).toContain("Goal: 3");
  });

});
