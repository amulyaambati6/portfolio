// Port of the scoring logic in Password-Strength-Checker/script.js,
// so visitors can try the project directly on the portfolio.

export function checkRequirements(password) {
  return {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
  };
}

export function calculateStrength(password, req = checkRequirements(password)) {
  let score = 0;
  Object.values(req).forEach((met) => {
    if (met) score += 20;
  });
  if (password.length >= 12) score += 10;
  if (password.length >= 16) score += 10;
  if (/^[a-zA-Z]+$/.test(password)) score -= 10;
  if (/^[0-9]+$/.test(password)) score -= 10;
  if (/(.)\1{2,}/.test(password)) score -= 10;
  return Math.max(0, Math.min(100, score));
}

export function strengthLabel(score) {
  if (score < 40) return { label: "Weak", tone: "weak" };
  if (score < 60) return { label: "Okay, could be better", tone: "medium" };
  if (score < 80) return { label: "Good", tone: "good" };
  return { label: "Perfect", tone: "strong" };
}

export function crackTimeSeconds(password, req = checkRequirements(password)) {
  let charset = 0;
  if (req.lowercase) charset += 26;
  if (req.uppercase) charset += 26;
  if (req.number) charset += 10;
  if (req.special) charset += 32;
  return Math.pow(charset, password.length) / 1e9;
}

export function formatTime(seconds) {
  if (seconds < 1) return "instantly";
  if (seconds < 60) return `${seconds.toFixed(0)} seconds`;
  if (seconds < 3600) return `${(seconds / 60).toFixed(0)} minutes`;
  if (seconds < 86400) return `${(seconds / 3600).toFixed(0)} hours`;
  if (seconds < 2592000) return `${(seconds / 86400).toFixed(0)} days`;
  if (seconds < 31536000) return `${(seconds / 2592000).toFixed(0)} months`;
  const years = seconds / 31536000;
  if (years < 1e6) return `${Math.round(years).toLocaleString("en-GB")} years`;
  return "more than a million years";
}

export function suggestions(password, req = checkRequirements(password)) {
  const out = [];
  if (!req.length) out.push("Use at least 8 characters");
  if (!req.uppercase) out.push("Add uppercase letters");
  if (!req.lowercase) out.push("Add lowercase letters");
  if (!req.number) out.push("Include numbers");
  if (!req.special) out.push("Add special characters (!@#$%^&*)");
  if (password.length < 12) out.push("Consider 12+ characters for better security");
  if (/(.)\1{2,}/.test(password)) out.push("Avoid repeating characters");
  if (/^[a-zA-Z]+$/.test(password)) out.push("Mix letters with numbers and symbols");
  return out;
}
