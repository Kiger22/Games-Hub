import("./button.css");

export const createButton = (node, text, id) => {
  const button = document.createElement("button");
  button.className = "button";
  button.id = id
  button.innerText = text;
  button.type = "submit";
  document.body.append(button);
};


