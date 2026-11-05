import { useEffect, useState } from "react";
import { FiDownload, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";

const resumeUrl = `${process.env.PUBLIC_URL}/${profile.resumeFile}`;

// Shows the download button only when the PDF is really deployed,
// so the site never links to a missing file.
function Resume() {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    if (!profile.resumeFile || typeof fetch === "undefined") return undefined;
    let cancelled = false;
    fetch(resumeUrl, { method: "HEAD" })
      .then((res) => {
        const type = res.headers.get("content-type") || "";
        if (!cancelled) setAvailable(res.ok && type.includes("pdf"));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div id="resume" className="resume">
      <div>
        <h3 className="resume__title">The one-page version</h3>
        <p>Education, projects and skills on a single page, ready to share with your team.</p>
      </div>
      {available ? (
        <a className="btn btn--light" href={resumeUrl} download>
          <FiDownload aria-hidden="true" /> Download CV (PDF)
        </a>
      ) : (
        <a className="btn btn--light" href={`mailto:${profile.email}?subject=CV%20request`}>
          <FiMail aria-hidden="true" /> Request my CV by email
        </a>
      )}
    </div>
  );
}

export default Resume;
