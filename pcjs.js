const sections = [
  { title: 'Men Wallpapers', start: 1, end: 10 },
  { title: 'Women Wallpapers', start: 11, end: 20 },
  { title: 'Popular Wallpapers', start: 21, end: 30 },
  { title: 'Nature & Landscapes', start: 31, end: 40 },
  { title: 'Cyberpunk & Neon Dreams', start: 41, end: 50 },
  { title: 'Minimalist Aesthetic', start: 51, end: 60 },
  { title: 'Dark Mode Specials', start: 61, end: 70 },
  { title: 'Abstract & Geometry', start: 71, end: 80 },
  { title: 'Quotes & Typography', start: 81, end: 90 },
  { title: 'Anime & Gaming', start: 91, end: 100 }
];

const container = document.getElementById('wallpaper-sections');

sections.forEach(({ title, start, end }, index) => {
  const section = document.createElement('section');
  section.innerHTML = `
    <h2>${title}</h2>
    <div class="carousel-container">
      <button class="nav left" onclick="scrollLeft(this)">&#8249;</button>
      <div class="carousel-track">
        ${Array.from({ length: end - start + 1 }, (_, i) => {
          const num = start + i;
          return `
            <div class="slide">
              <img src="a${num}.jpg" alt="a${num}">
              <p>a${num}</p>
            </div>
          `;
        }).join('')}
      </div>
      <button class="nav right" onclick="scrollRight(this)">&#8250;</button>
    </div>
  `;
  container.appendChild(section);
});

function scrollLeft(btn) {
  const track = btn.nextElementSibling;
  const slideWidth = track.querySelector('.slide').offsetWidth + 16;
  track.scrollLeft -= slideWidth;
}

function scrollRight(btn) {
  const track = btn.previousElementSibling;
  const slideWidth = track.querySelector('.slide').offsetWidth + 16;
  track.scrollLeft += slideWidth;
}
