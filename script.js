document.addEventListener("DOMContentLoaded", () => {

  const btnAlbums = document.getElementById("btn-albums");
  const btnTracks = document.getElementById("btn-tracks");
  const btnText = document.getElementById("btn-text");

  const albumsDiv = document.getElementById("albums");
  const tracksDiv = document.getElementById("tracks");
  const textDiv = document.getElementById("text");

  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");

  function showSection(section) {
    [albumsDiv, tracksDiv, textDiv].forEach(s => {
      if (s) s.classList.remove("active");
    });
    section.classList.add("active");
  }

  function removeActive() {
    [btnAlbums, btnTracks, btnText].forEach(b => b.classList.remove("active"));
  }

  btnAlbums.addEventListener("click", () => {
    showSection(albumsDiv);
    removeActive();
    btnAlbums.classList.add("active");
  });

  if (btnTracks) {
    btnTracks.addEventListener("click", () => {
      showSection(tracksDiv);
      removeActive();
      btnTracks.classList.add("active");
    });
  }

  if (btnText) {
    btnText.addEventListener("click", () => {
      showSection(textDiv);
      removeActive();
      btnText.classList.add("active");
    });
  }

  // ===== SETAS =====
  arrowLeft.addEventListener("click", () => {
    albumsDiv.scrollBy({ left: -400, behavior: "smooth" });
  });

  arrowRight.addEventListener("click", () => {
    albumsDiv.scrollBy({ left: 400, behavior: "smooth" });
  });

  // ===== DRAG =====
  let isDown = false;
  let startX;
  let scrollLeft;

  albumsDiv.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - albumsDiv.offsetLeft;
    scrollLeft = albumsDiv.scrollLeft;
  });

  albumsDiv.addEventListener("mouseleave", () => isDown = false);
  albumsDiv.addEventListener("mouseup", () => isDown = false);

  albumsDiv.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - albumsDiv.offsetLeft;
    const walk = (x - startX) * 2;
    albumsDiv.scrollLeft = scrollLeft - walk;
  });

});