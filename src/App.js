import React, { useEffect, useState } from "react";

export default function Portfolio() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const [activeSkill, setActiveSkill] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  const skills = [
    {
      name: "Python",
      icon: "🐍",
      info: "Great for beginners. Used in web development, data science, automation, and AI.",
      color: "#3776ab",
    },
    {
      name: "Java",
      icon: "☕",
      info: "Widely used in Android and enterprise applications. Known for portability and reliability.",
      color: "#f89820",
    },
    {
      name: "HTML",
      icon: "📄",
      info: "The foundation of web pages. Structures content for websites.",
      color: "#e34f26",
    },
    {
      name: "CSS",
      icon: "🎨",
      info: "Styles web pages. Controls layout, colors, fonts, and responsiveness.",
      color: "#1572b6",
    },
  ];

  const projects = [
    {
      name: "Podcast App (Android)",
      desc: "An Android app to stream and manage podcasts with modern UI/UX.",
      github: "https://github.com/Avinash200421194/PodcastPlus-NM2024TMID05887",
      tech: ["Android", "Java", "UI/UX"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      name: "Payroll Management",
      desc: "Comprehensive system for calculating salaries, deductions, and payments.",
      github: "https://github.com/Avinash200421194/PayrollManagement",
      tech: ["Backend", "Database", "Finance"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
  ];

  const handleSkillClick = (skillName) => {
    setActiveSkill(activeSkill === skillName ? null : skillName);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const containerStyle = {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)",
    color: "#E0E0E0",
    padding: "2rem",
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: "relative",
    overflow: "hidden",
  };

  const backgroundElements = (
    <>
      <div
        style={{
          position: "fixed",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "50%",
          right: "20%",
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(30px)",
          zIndex: -1,
        }}
      />
    </>
  );

  return (
    <div style={containerStyle}>
      {backgroundElements}

      {/* Floating Navigation */}
      <nav
        style={{
          position: "fixed",
          top: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "1rem",
          backgroundColor: "rgba(31, 41, 55, 0.9)",
          backdropFilter: "blur(20px)",
          padding: "1rem 2rem",
          borderRadius: "50px",
          border: "1px solid rgba(139, 92, 246, 0.3)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          zIndex: 1000,
        }}
      >
        {["profile", "skills", "projects", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              color: "#f3f4f6",
              textDecoration: "none",
              fontWeight: "600",
              padding: "0.5rem 1rem",
              borderRadius: "25px",
              transition: "all 0.3s ease",
              background: isVisible[id]
                ? "linear-gradient(90deg, #8b5cf6, #ec4899)"
                : "transparent",
            }}
            onMouseEnter={(e) => {
              if (!isVisible[id]) {
                e.currentTarget.style.background = "rgba(139, 92, 246, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isVisible[id]) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }
            }}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <header
        style={{
          textAlign: "center",
          marginTop: "8rem",
          marginBottom: "6rem",
          animation: "fadeInUp 1s ease-out",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "2rem",
            borderRadius: "30px",
            background: "rgba(31, 41, 55, 0.6)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(139, 92, 246, 0.3)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "900",
              background: "linear-gradient(135deg, #8b5cf6, #ec4899, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
              letterSpacing: "3px",
              textShadow: "0 0 40px rgba(139, 92, 246, 0.3)",
            }}
          >
            AVINASH R
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#a78bfa",
              marginBottom: "2rem",
              opacity: "0.9",
            }}
          >
            Student
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://github.com/Avinash200421194"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "50px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-3px) scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(139, 92, 246, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(139, 92, 246, 0.4)";
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>🐱</span>
              GitHub Profile
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                background: "transparent",
                color: "#ec4899",
                fontWeight: "bold",
                borderRadius: "50px",
                textDecoration: "none",
                border: "2px solid #ec4899",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ec4899";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#ec4899";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>📧</span>
              Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section
        id="projects"
        style={{
          marginBottom: "6rem",
          opacity: isVisible.projects ? 1 : 0,
          transform: isVisible.projects ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.8s ease",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
            }}
          >
            🚀 Featured Projects
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#a1a1aa",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {projects.map(({ name, desc, github, tech, gradient }, index) => (
            <div
              key={name}
              style={{
                background: "rgba(31, 41, 55, 0.8)",
                backdropFilter: "blur(20px)",
                borderRadius: "20px",
                padding: "2rem",
                border: "1px solid rgba(139, 92, 246, 0.2)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                transition: "all 0.4s ease",
                position: "relative",
                overflow: "hidden",
                animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(139, 92, 246, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0, 0, 0, 0.3)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: gradient,
                }}
              />

              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#fff",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  🔥
                </span>
                {name}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                {desc}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                {tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "0.3rem 0.8rem",
                      background: "rgba(139, 92, 246, 0.2)",
                      color: "#a78bfa",
                      borderRadius: "15px",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      border: "1px solid rgba(139, 92, 246, 0.3)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8rem 1.5rem",
                  background: gradient,
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "25px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0, 0, 0, 0.3)";
                }}
              >
                <span>🔗</span>
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Profile and Skills Section */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "3rem",
          marginBottom: "6rem",
          maxWidth: "1200px",
          margin: "0 auto 6rem",
        }}
      >
        {/* Profile Card */}
        <div
          id="profile"
          style={{
            background: "rgba(31, 41, 55, 0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "25px",
            padding: "2.5rem",
            border: "1px solid rgba(139, 92, 246, 0.3)",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
            opacity: isVisible.profile ? 1 : 0,
            transform: isVisible.profile
              ? "translateX(0)"
              : "translateX(-50px)",
            transition: "all 0.8s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "15px",
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
              }}
            >
              👨‍💻
            </div>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About Me
            </h2>
          </div>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#d1d5db",
              lineHeight: "1.8",
              marginBottom: "2rem",
            }}
          >
            A passionate Computer Science student with a love for creating
            innovative solutions. I specialize in full-stack development and
            enjoy tackling complex problems with clean, efficient code. Always
            eager to learn new technologies and contribute to meaningful
            projects.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            {["Problem Solver", "Team Player", "Quick Learner"].map((trait) => (
              <span
                key={trait}
                style={{
                  padding: "0.5rem 1rem",
                  background: "rgba(6, 182, 212, 0.2)",
                  color: "#06b6d4",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  border: "1px solid rgba(6, 182, 212, 0.3)",
                }}
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Card */}
        <div
          id="skills"
          style={{
            background: "rgba(31, 41, 55, 0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "25px",
            padding: "2.5rem",
            border: "1px solid rgba(236, 72, 153, 0.3)",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
            opacity: isVisible.skills ? 1 : 0,
            transform: isVisible.skills ? "translateX(0)" : "translateX(50px)",
            transition: "all 0.8s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "15px",
                background: "linear-gradient(135deg, #ec4899, #f59e0b)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
              }}
            >
              🚀
            </div>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                background: "linear-gradient(135deg, #ec4899, #f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              My Skills
            </h2>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                style={{
                  animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <button
                  onClick={() => handleSkillClick(skill.name)}
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}40, ${skill.color}20)`,
                    padding: "1rem 1.5rem",
                    borderRadius: "15px",
                    fontWeight: "600",
                    color: "#fff",
                    border: `2px solid ${skill.color}60`,
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    fontSize: "1.1rem",
                    transition: "all 0.3s ease",
                    boxShadow:
                      activeSkill === skill.name
                        ? `0 0 25px ${skill.color}60`
                        : `0 5px 15px rgba(0, 0, 0, 0.2)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateX(10px) scale(1.02)";
                    e.currentTarget.style.boxShadow = `0 8px 25px ${skill.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      activeSkill === skill.name
                        ? `0 0 25px ${skill.color}60`
                        : `0 5px 15px rgba(0, 0, 0, 0.2)`;
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{skill.icon}</span>
                  <span>{skill.name}</span>
                  <span style={{ marginLeft: "auto", fontSize: "1.2rem" }}>
                    {activeSkill === skill.name ? "−" : "+"}
                  </span>
                </button>
                {activeSkill === skill.name && (
                  <div
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
                      marginTop: "0.5rem",
                      padding: "1.5rem",
                      borderRadius: "12px",
                      color: "#f3f4f6",
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      border: `1px solid ${skill.color}30`,
                      animation: "slideDown 0.3s ease-out",
                    }}
                  >
                    {skill.info}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          textAlign: "center",
          marginTop: "6rem",
          opacity: isVisible.contact ? 1 : 0,
          transform: isVisible.contact ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.8s ease",
        }}
      >
        <div
          style={{
            background: "rgba(31, 41, 55, 0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "30px",
            padding: "3rem",
            border: "1px solid rgba(139, 92, 246, 0.3)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
              margin: "0 auto 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.5rem",
            }}
          >
            📬
          </div>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
            }}
          >
            Let's Connect!
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#a1a1aa",
              marginBottom: "2rem",
            }}
          >
            I'm always open to discussing new opportunities and interesting
            projects
          </p>
          <a
            href="mailto:avinashrajendran02@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              color: "#fff",
              fontSize: "1.2rem",
              textDecoration: "none",
              fontWeight: "600",
              padding: "1rem 2rem",
              borderRadius: "25px",
              background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 25px rgba(236, 72, 153, 0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 15px 35px rgba(236, 72, 153, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(236, 72, 153, 0.4)";
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>📧</span>
            avinashrajendran02@gmail.com
          </a>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}
