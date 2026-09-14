async function loadPage(page) {
  let content = document.querySelector("#content");
  try {
    await fetch(page)
      .then((res) => res.text())
      .then((data) => {
        const fragment = document.createRange().createContextualFragment(data);

        content.innerHTML = ""; // Clear container
        content.appendChild(fragment); // Scripts run instantly
        content.innerHTML = data;
      });
  } catch (error) {
    console.error("Failed to load page:", error);
  }
}
