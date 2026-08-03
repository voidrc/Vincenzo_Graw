const skillsList = document.getElementById('skills-list');
const experienceList = document.getElementById('experience-list');
const galleryGrid = document.getElementById('gallery-grid');

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function showError(message) {
  document.body.insertAdjacentHTML('afterbegin', `<p class="error container">${escapeHtml(message)}</p>`);
}

function renderPortfolio(data) {
  skillsList.innerHTML = data.skills.map(skill => `<li>${escapeHtml(skill)}</li>`).join('');

  experienceList.innerHTML = data.experience.map(item => {
    const title = item.title ? `<strong>${escapeHtml(item.title)}</strong>` : '';
    const desc = item.description ? escapeHtml(item.description).replace(/\n/g, '<br>') : '';
    return `<li>${title}${title && desc ? '<br>' : ''}${desc}</li>`;
  }).join('');

  if (data.gallery && data.gallery.length > 0) {
    galleryGrid.innerHTML = data.gallery
      .map(src => `<img src="${escapeHtml(src)}" alt="highlight">`)
      .join('');
  } else {
    galleryGrid.innerHTML = '<p>Gallery placeholder — upload highlights here later.</p>';
  }
}

fetch('data.json')
  .then(res => {
    if (!res.ok) throw new Error('Could not load data.json');
    return res.json();
  })
  .then(data => renderPortfolio(data))
  .catch(err => showError(`Failed to load portfolio data: ${err.message}`));
