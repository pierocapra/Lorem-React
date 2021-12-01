import React, { useState } from "react";
import data from "./data";
function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    let input = parseInt(e.target.value);
    if (input <= 0) {
      setNumber(0);
    } else {
      setNumber(input);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newParagraphs = data.slice(0, number);
    setParagraphs(newParagraphs);
  };
  return (
    <main>
      <section className="section-center">
        <h3>Tired of boring lorem ipsum?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="numParagraph">Paragraph</label>
          <input
            type="number"
            id="numParagraph"
            name="numParagraph"
            value={number}
            onChange={handleChange}
          />
          <button type="submit" className="btn">
            generate
          </button>
        </form>
        <article className="lorem-text">
          {paragraphs.map((paragraph, index) => {
            return (
              <p key={index} className="result">
                {paragraph}
              </p>
            );
          })}
        </article>
      </section>
    </main>
  );
}

export default App;
