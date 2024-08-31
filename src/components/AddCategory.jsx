import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const updateInputValue = ({ target }) => {
    setInputValue(target.value);
  };

  const recargarCampos = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue);
    setInputValue("");
  };

  return (
    <form id="submitGif" onSubmit={(e) => recargarCampos(e)}>
      <input
        type="text"
        value={inputValue}
        placeholder="Buscar GIFs"
        onChange={updateInputValue}
      />
    </form>
  );
};
