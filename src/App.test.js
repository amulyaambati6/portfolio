import { render, screen, within } from "@testing-library/react";
import App from "./App";
import { navLinks, profile, projects } from "./data/profile";

beforeEach(() => {
  // The resume check uses fetch; simulate "CV not uploaded yet".
  global.fetch = jest.fn(() => Promise.resolve({ ok: false, headers: { get: () => "" } }));
});

test("renders the hero with name and internship availability", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1, name: profile.name })).toBeInTheDocument();
  expect(screen.getByText(/march 2027/i, { selector: ".hero__status" })).toBeInTheDocument();
});

test("every navigation link points to a section that exists", () => {
  const { container } = render(<App />);
  navLinks.forEach(({ id }) => {
    expect(container.querySelector(`section#${id}`)).not.toBeNull();
  });
});

test("each featured project has a screenshot and a repository link", () => {
  render(<App />);
  const section = document.getElementById("projects");
  projects.forEach((p) => {
    expect(within(section).getByRole("heading", { name: p.title })).toBeInTheDocument();
    expect(within(section).getByAltText(p.imageAlt)).toBeInTheDocument();
    expect(
      within(section).getByRole("link", { name: new RegExp(`code for ${p.title}`, "i") })
    ).toHaveAttribute("href", p.repo);
  });
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
