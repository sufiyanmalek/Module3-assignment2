import React from "react";
const languageData = [
  { id: 1, name: "Arabic" },

  { id: 2, name: "Bengali" },

  { id: 3, name: "Bihari" },

  { id: 4, name: "kannad" },

  { id: 5, name: "Chinese" },

  { id: 6, name: "English" },

  { id: 7, name: "Gujarati" },

  { id: 8, name: "Hindi" },

  { id: 9, name: "Japanese" },
];

const FirstLanguage = () => {
  return (
    <div>
      <select
        className="form-control"
        name="selectLanguage"
        id="selectLanguage"
        aria-label="select language"
        required
      >
        <option defaultValue>Select Language</option>
        {languageData.map((e) => (
          <option value={e.name} key={e.id}>
            {e.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FirstLanguage;
