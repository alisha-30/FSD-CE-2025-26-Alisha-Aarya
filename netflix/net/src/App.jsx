import React, { useState, useEffect, useMemo } from "react";

export default function App() {
  // Generate mock movies only once
  const movies = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: i + 1,
        title: `Movie ${i + 1}`,
        year: 2000 + (i % 25),
        runtime: 90 + i,
        rating: (6 + (i % 4) + Math.random()).toFixed(1),
        overview: "Short mock overview for demo.",
        image: `data:image/svg+xml;utf8,${encodeURIComponent(
          `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='225'>
            <rect width='100%' height='100%' fill='hsl(${(i * 36) % 360} 60% 40%)'/>
            <text x='50%' y='50%' text-anchor='middle' dominant-baseline='middle'
              font-family='Arial' font-size='20' fill='white'>Movie ${i + 1}</text>
          </svg>`
        )}`,
      })),
    []
  );

  // States
  const [q, setQ] = useState("");
  const [dark, setDark] = useState(true);
  const [sel, setSel] = useState(null);
  const [filt, setFilt] = useState(movies);

  // Search filter
  useEffect(() => {
    const x = q.toLowerCase();
    setFilt(
      !x
        ? movies
        : movies.filter(
            (m) =>
              m.title.toLowerCase().includes(x) ||
              m.year.toString().includes(x)
          )
    );
  }, [q, movies]);

  const Row = ({ name, list }) => (
    <div style={{ marginBottom: 24 }}>
      <h3>{name}</h3>
      <div style={{ display: "flex", gap: 10, overflowX: "auto" }}>
        {list.map((m) => (
          <div
            key={m.id}
            onClick={() => setSel(m)}
            style={{
              minWidth: 200,
              cursor: "pointer",
              borderRadius: 8,
              background: dark ? "#111" : "#fff",
              color: dark ? "#eee" : "#111",
              boxShadow: "0 4px 12px rgba(0,0,0,.3)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <img src={m.image} alt={m.title} style={{ width: "100%" }} />
            <div style={{ padding: 6 }}>
              <b>{m.title}</b>
              <div style={{ fontSize: 12, opacity: 0.8 }}>
                {m.year} • {m.runtime}m
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      style={{
        background: dark ? "#050505" : "#fafafa",
        color: dark ? "#eee" : "#111",
        fontFamily: "sans-serif",
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: 14,
          position: "sticky",
          top: 0,
          background: dark ? "#111" : "#fff",
          zIndex: 10,
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease",
        }}
      >
        <b style={{ fontSize: 20 }}>NETFLIX</b>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search..."
          style={{
            flex: 1,
            padding: 6,
            borderRadius: 4,
            border: "none",
            background: dark ? "#222" : "#eee",
            color: dark ? "#eee" : "#111",
          }}
        />
        <button
          onClick={() => setDark(!dark)}
          style={{
            padding: "6px 12px",
            borderRadius: 4,
            border: "none",
            cursor: "pointer",
            background: dark ? "#333" : "#ddd",
            color: dark ? "#eee" : "#111",
            transition: "all 0.3s ease",
          }}
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>

      {/* Hero */}
      <div style={{ padding: 20, display: "grid", gap: 12 }}>
        <h2>Watch something you'll love</h2>
        {filt.length > 0 && (
          <img
            src={filt[0].image}
            alt="hero"
            style={{
              width: "100%",
              maxWidth: 600,
              borderRadius: 8,
              boxShadow: "0 4px 12px rgba(0,0,0,.4)",
            }}
          />
        )}

        {/* Movie Rows */}
        <Row name="Trending" list={filt.slice(0, 5)} />
        <Row name="Top Picks" list={filt.slice(5, 10)} />
      </div>

      {/* Modal */}
      {sel && (
        <div
          onClick={() => setSel(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(3px)",
            animation: "fadeIn 0.3s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: dark ? "#111" : "#fff",
              color: dark ? "#eee" : "#111",
              borderRadius: 10,
              display: "grid",
              gridTemplateColumns: "300px 1fr",
              overflow: "hidden",
              maxWidth: 800,
              width: "90%",
              boxShadow: "0 4px 20px rgba(0,0,0,.5)",
            }}
          >
            <img
              src={sel.image}
              alt="poster"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ padding: 16 }}>
              <h2>{sel.title}</h2>
              <div>
                {sel.year} • {sel.runtime}m • ⭐ {sel.rating}
              </div>
              <p style={{ marginTop: 10 }}>{sel.overview}</p>
              <button
                onClick={() => alert("Play")}
                style={{
                  marginRight: 8,
                  padding: "6px 12px",
                  borderRadius: 4,
                  border: "none",
                  cursor: "pointer",
                  background: "#e50914",
                  color: "#fff",
                }}
              >
                ▶ Play
              </button>
              <button
                onClick={() => alert("Added to list")}
                style={{
                  padding: "6px 12px",
                  borderRadius: 4,
                  border: "none",
                  cursor: "pointer",
                  background: dark ? "#333" : "#ddd",
                  color: dark ? "#eee" : "#111",
                }}
              >
                + My List
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
