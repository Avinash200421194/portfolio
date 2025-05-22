import React from "react";

export default function Portfolio() {
  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "HTML", icon: "📄" },
    { name: "CSS", icon: "🎨" },
  ];

  const projects = [
    {
      name: "Podcast App (Android)",
      desc: "An Android app to stream and manage podcasts.",
      github: "https://github.com/Avinash200421194/PodcastPlus-NM2024TMID05887",
    },
    {
      name: "Payroll Management",
      desc: "calculating salaries, deductions, and payments",
      github: "https://github.com/Avinash200421194/PayrollManagement",
    },
    {
      name: "Spy Spider (Robotic Project)",
      desc: "A robotic system for automated web crawling and data surveillance.",
      github: "",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "#E0E0E0",
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "3rem",
        }}
      >
        <h2
          style={{ fontSize: "1.75rem", fontWeight: "700", color: "#a78bfa" }}
        >
          Avinash R
        </h2>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a
            href="#profile"
            style={{ color: "#f3f4f6", textDecoration: "none" }}
          >
            Profile
          </a>
          <a
            href="#skills"
            style={{ color: "#f3f4f6", textDecoration: "none" }}
          >
            Skills
          </a>
          <a
            href="#projects"
            style={{ color: "#f3f4f6", textDecoration: "none" }}
          >
            Projects
          </a>
          <a
            href="#contact"
            style={{ color: "#f3f4f6", textDecoration: "none" }}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "900",
            background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "0.3rem",
            letterSpacing: "2px",
          }}
        >
          AVINASH R
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#a78bfa",
            marginBottom: "1rem",
          }}
        >
          Web Developer
        </p>
        <a
          href="https://github.com/Avinash200421194"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1rem",
            borderRadius: "9999px",
            background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
            color: "#fff",
            fontWeight: "700",
            textDecoration: "none",
            fontSize: "1.125rem",
            boxShadow: "0 4px 15px rgba(236, 72, 153, 0.5)",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          🐱 GitHub Profile
        </a>
      </header>

      {/* Projects Section */}
      <section
        id="projects"
        style={{
          backgroundColor: "#1f2937",
          borderRadius: "1.25rem",
          padding: "2rem",
          marginBottom: "3rem",
          boxShadow: "0 8px 20px rgba(139, 92, 246, 0.5)",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            color: "#ec4899",
          }}
        >
          Featured Projects
        </h2>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {projects.map(({ name, desc, github }) => (
            <a
              key={name}
              href={github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#374151",
                borderRadius: "0.75rem",
                padding: "1.5rem",
                color: "#e0e0e0",
                textDecoration: "none",
                boxShadow: "0 4px 10px rgba(236, 72, 153, 0.3)",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#4c1d95")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#374151")
              }
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "0.25rem",
                }}
              >
                {name}
              </h3>
              <p style={{ fontSize: "1rem", color: "#c7d2fe" }}>{desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Profile and Skills */}
      <section style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
        {/* Profile Card */}
        <div
          id="profile"
          style={{
            flex: "1 1 300px",
            backgroundColor: "#1f2937",
            borderRadius: "1rem",
            padding: "1.5rem",
            boxShadow: "0 4px 15px rgba(139, 92, 246, 0.3)",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "1rem",
              color: "#8b5cf6",
            }}
          >
            Profile
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.6",
              color: "#d1d5db",
            }}
          >
            Dedicated Computer Science student passionate about software
            development, data structures, and problem-solving. Skilled in Python
            and Java with a strong desire to create scalable, efficient
            solutions and grow continuously in tech.
          </p>
        </div>

        {/* Skills Card */}
        <div
          id="skills"
          style={{
            flex: "1 1 250px",
            backgroundColor: "#1f2937",
            borderRadius: "1rem",
            padding: "1.5rem",
            boxShadow: "0 4px 15px rgba(236, 72, 153, 0.3)",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "1rem",
              color: "#ec4899",
            }}
          >
            Skills
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              color: "#e0e0e0",
            }}
          >
            {skills.map((skill) => (
              <li
                key={skill.name}
                style={{
                  background: "#4338ca",
                  marginBottom: "0.5rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  fontWeight: "600",
                  boxShadow: "0 2px 6px rgba(236, 72, 153, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span>{skill.icon}</span> {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ textAlign: "center", marginTop: "4rem" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "1rem",
            color: "#8b5cf6",
          }}
        >
          Get In Touch
        </h2>
        <a
          href="mailto:avinashrajendran02@gmail.com"
          style={{
            color: "#ec4899",
            fontSize: "1.125rem",
            textDecoration: "none",
            fontWeight: "600",
            padding: "0.5rem 1rem",
            borderRadius: "9999px",
            border: "2px solid #ec4899",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#ec4899";
            e.currentTarget.style.color = "#121212";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#ec4899";
          }}
        >
          📧 avinashrajendran02@gmail.com
        </a>
      </section>
    </div>
  );
}
