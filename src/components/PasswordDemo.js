import { useId, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  calculateStrength,
  checkRequirements,
  crackTimeSeconds,
  formatTime,
  strengthLabel,
  suggestions,
} from "../lib/passwordStrength";

const REQS = [
  ["length", "At least 8 characters"],
  ["uppercase", "Uppercase letter (A–Z)"],
  ["lowercase", "Lowercase letter (a–z)"],
  ["number", "Number (0–9)"],
  ["special", "Special character (!@#$…)"],
];

// Live, in-page version of the Password Strength Checker.
function PasswordDemo() {
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const id = useId();

  const req = checkRequirements(pw);
  const score = pw ? calculateStrength(pw, req) : 0;
  const { label, tone } = strengthLabel(score);
  const tips = pw ? suggestions(pw, req) : [];

  return (
    <div className="pwdemo card">
      <label htmlFor={id} className="mini-title">
        Try it: type any password
      </label>
      <p className="pwdemo__note">Runs only in your browser. Nothing is stored or sent.</p>
      <div className="pwdemo__field">
        <input
          id={id}
          type={show ? "text" : "password"}
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="e.g. sunflower"
          autoComplete="off"
          spellCheck="false"
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>

      <div className="pwdemo__meter" aria-hidden="true">
        <span className={`tone-${tone}`} style={{ width: `${score}%` }} />
      </div>
      <p className="pwdemo__score" aria-live="polite">
        {pw ? (
          <>
            <strong className={`tone-text-${tone}`}>{label}</strong> · score {score}/100 ·
            brute-force estimate: {formatTime(crackTimeSeconds(pw, req))}
          </>
        ) : (
          "Start typing to see the score."
        )}
      </p>

      <div className="pwdemo__cols">
        <ul className="pwdemo__reqs">
          {REQS.map(([key, text]) => (
            <li key={key} className={pw && req[key] ? "is-met" : undefined}>
              <span aria-hidden="true">{pw && req[key] ? "✓" : "○"}</span> {text}
              <span className="sr-only">{pw && req[key] ? " (met)" : " (not met)"}</span>
            </li>
          ))}
        </ul>
        {tips.length > 0 && (
          <ul className="pwdemo__tips">
            {tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PasswordDemo;
