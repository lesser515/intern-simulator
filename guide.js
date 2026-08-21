(() => {
  const storageKey = "intern-simulator-guide-hidden";
  const dialog = document.getElementById("guide-dialog");
  const helpButton = document.getElementById("guide-help-button");
  const closeButton = document.getElementById("guide-close-button");
  const startButton = document.getElementById("guide-start-button");
  const hideNextTime = document.getElementById("guide-hide-next-time");

  if (!dialog || !helpButton || !closeButton || !startButton || !hideNextTime) return;

  const openGuide = () => {
    hideNextTime.checked = localStorage.getItem(storageKey) === "true";
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    helpButton.hidden = true;
  };

  const closeGuide = () => {
    localStorage.setItem(storageKey, String(hideNextTime.checked));
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
    helpButton.hidden = false;
  };

  helpButton.addEventListener("click", openGuide);
  closeButton.addEventListener("click", closeGuide);
  startButton.addEventListener("click", closeGuide);
  dialog.addEventListener("cancel", (event) => { event.preventDefault(); closeGuide(); });
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) closeGuide();
  });

  if (localStorage.getItem(storageKey) !== "true") openGuide();
})();
