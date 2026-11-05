import { act, fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";
import { navLinks, profile, projects } from "./data/profile";
import covidData from "./data/covidData";
import { calculateStrength, checkRequirements, strengthLabel } from "./lib/passwordStrength";

beforeEach(() => {
  // The resume check uses fetch; simulate "CV not uploaded yet".
  global.fetch = jest.fn(() => Promise.resolve({ ok: false, headers: { get: () => "" } }));
  window.scrollTo = jest.fn();
  Element.prototype.scrollIntoView = jest.fn();
  window.location.hash = "";
});

const goTo = (hash) =>
  act(() => {
    window.location.hash = hash;
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  });

test("renders the hero with name and internship availability", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(profile.firstName);
  expect(screen.getByText(/march.august 2027/i, { selector: ".hero__status" })).toBeInTheDocument();
});

test("every navigation link points to a section that exists", () => {
  const { container } = render(<App />);
  navLinks.forEach(({ id }) => {
    expect(container.querySelector(`section#${id}`)).not.toBeNull();
  });
  expect(container.querySelector("#resume")).not.toBeNull();
});

test("each project links to a case study and its repository", () => {
  render(<App />);
  const section = document.getElementById("work");
  projects.forEach((p) => {
    expect(within(section).getByRole("link", { name: p.title })).toHaveAttribute(
      "href",
      `#/projects/${p.slug}`
    );
    expect(
      within(section).getByRole("link", { name: new RegExp(`code for ${p.title}`, "i") })
    ).toHaveAttribute("href", p.repo);
  });
});

test("case study pages render for every project, with a way back", () => {
  render(<App />);
  projects.forEach((p) => {
    goTo(`#/projects/${p.slug}`);
    expect(screen.getByRole("heading", { level: 1, name: p.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /all work/i })).toHaveAttribute("href", "#work");
    expect(screen.getByAltText(p.imageAlt)).toBeInTheDocument();
  });
  goTo("#/projects/does-not-exist");
  expect(screen.getByText(/doesn't exist/i)).toBeInTheDocument();
});

test("interactive chart switches indicator and toggles countries", () => {
  render(<App />);
  const tab = screen.getByRole("tab", { name: "Unemployment" });
  fireEvent.click(tab);
  expect(tab).toHaveAttribute("aria-selected", "true");
  const chip = screen.getByRole("button", { name: "Rwanda" });
  fireEvent.click(chip);
  expect(chip).toHaveAttribute("aria-pressed", "false");
});

test("chart data matches the dashboard's published 2019-2021 medians", () => {
  const med = (i) => {
    const v = covidData.countries
      .map((c) => covidData.indicators.gdp.values[c.code][i])
      .sort((a, b) => a - b);
    return v[3];
  };
  expect([med(1), med(2), med(3)]).toEqual([2.6, -3.3, 6.9]);
});

test("password logic matches the original project", () => {
  expect(calculateStrength("abc")).toBe(10); // lowercase 20, letters-only -10
  expect(calculateStrength("aaaaaaaa")).toBe(20); // length + lower - letters-only - repeat
  expect(calculateStrength("Tr4vel!Nice#2027")).toBe(100);
  expect(checkRequirements("Ab1!").special).toBe(true);
  expect(strengthLabel(55).label).toMatch(/okay/i);
});

test("falls back to an email request when the CV PDF is not deployed", async () => {
  render(<App />);
  expect(await screen.findByRole("link", { name: /request my cv/i })).toHaveAttribute(
    "href",
    expect.stringContaining(`mailto:${profile.email}`)
  );
});

test("does not expose a phone number or university email", () => {
  const { container } = render(<App />);
  const text = container.textContent;
  expect(text).not.toMatch(/mahindrauniversity\.edu/i);
  expect(text).not.toMatch(/\b\d{10}\b/);
});
