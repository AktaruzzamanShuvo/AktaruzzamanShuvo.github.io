/**
 * site.js — Shared page builder
 * Reads SITE_DATA and injects sidebar + nav on every page.
 * Each page calls: buildPage({ page, navActive, assetPrefix })
 */

function buildPage({ page = 'home', navActive = '', assetPrefix = '../' } = {}) {
  // For root index.html assetPrefix = '' (or 'assets/')
  // For sub-folders assetPrefix = '../'
  injectNav(navActive, assetPrefix);
  injectSidebar(assetPrefix);
}

/* ---- NAV ---- */
function injectNav(active, pre) {
  const p = SITE_DATA.profile;
  const links = [
    { href: pre === '' ? '/' : '/',     label: 'Home',     key: 'home' },
    { href: `${pre.replace('../','')}${pre==='' ? 'research/' : '../research/'}`, label: 'Research',  key: 'research' },
    { href: `${pre.replace('../','')}${pre==='' ? 'academic/' : '../academic/'}`, label: 'Academic',  key: 'academic' },
    { href: `${pre.replace('../','')}${pre==='' ? 'projects/' : '../projects/'}`, label: 'Projects',  key: 'projects' },
    { href: `${pre.replace('../','')}${pre==='' ? 'blog/' : '../blog/'}`,         label: 'Blog',      key: 'blog' },
    { href: pre === '' ? p.cv : '../' + p.cv, label: 'CV', key: 'cv', download: true }
  ];

  // Fix links for sub-folder pages
  const fixedLinks = links.map(l => {
    let href = l.href;
    if (pre !== '') {
      // We're in a subfolder
      if (l.key === 'home')     href = '/';
      if (l.key === 'research') href = '/research/';
      if (l.key === 'academic') href = '/academic/';
      if (l.key === 'projects') href = '/projects/';
      if (l.key === 'blog')     href = '/blog/';
      if (l.key === 'cv')       href = '../' + p.cv;
    } else {
      if (l.key === 'cv') href = p.cv;
    }
    return { ...l, href };
  });

  const nav = document.querySelector('nav') || document.createElement('nav');
  nav.innerHTML = `<ul>
    ${fixedLinks.map(l =>
      `<li><a href="${l.href}"${l.download ? ' download' : ''}${l.key === active ? ' class="active"' : ''}>${l.label}</a></li>`
    ).join('')}
  </ul>`;
  if (!document.querySelector('nav')) document.body.prepend(nav);
}

/* ---- SIDEBAR ---- */
function injectSidebar(pre) {
  const p = SITE_DATA.profile;
  const photo = pre === '' ? p.photoRoot : p.photo;
  const cvHref = pre === '' ? p.cv : '../' + p.cv;

  const aside = document.querySelector('.sidebar') || document.createElement('aside');
  aside.className = 'sidebar';
  aside.innerHTML = `
    <div class="profile-container">
      <div class="profile-img-container">
        <img src="${photo}" alt="${p.name}" class="profile-img" onerror="this.src='https://ui-avatars.com/api/?name=AKM+Shuvo&background=0a192f&color=64ffda&size=200'">
      </div>
      <div class="profile-info">
        <h3>${p.name}</h3>
        <p class="role">${p.role}</p>
        <p class="subtitle">${p.subtitle}</p>
      </div>
      <div class="sidebar-divider"></div>
      <div class="contact-info">
        <div class="contact-item"><i class="fas fa-university"></i><span>${p.affiliation}</span></div>
        <div class="contact-item"><i class="fas fa-map-marker-alt"></i><span>${p.location}</span></div>
        <div class="contact-item"><i class="fas fa-phone"></i><a href="${p.phoneLink}">${p.phone}</a></div>
        <div class="contact-item"><i class="fas fa-envelope"></i><a href="mailto:${p.email}">${p.email}</a></div>
        <div class="contact-item"><i class="fas fa-graduation-cap"></i><a href="${p.scholar}" target="_blank">Google Scholar</a></div>
        <div class="contact-item"><i class="fas fa-file-pdf"></i><a href="${cvHref}" download>Download CV</a></div>
      </div>
      <div class="social-links">
        <a href="${p.social.facebook}"  target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="${p.social.instagram}" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="${p.social.linkedin}"  target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="${p.social.twitter}"   target="_blank" title="Twitter"><i class="fab fa-x-twitter"></i></a>
        <a href="${p.social.youtube}"   target="_blank" title="YouTube"><i class="fab fa-youtube"></i></a>
      </div>
    </div>`;
  if (!document.querySelector('.sidebar')) {
    document.body.insertBefore(aside, document.querySelector('.main-content'));
  }
}

/* ---- SLIDESHOW helper ---- */
function initSlideshows() {
  document.querySelectorAll('.slideshow-container').forEach(container => {
    const slides = container.querySelectorAll('.slide');
    if (!slides.length) return;
    let idx = 0;
    const show = () => {
      slides.forEach(s => s.style.display = 'none');
      slides[idx].style.display = 'block';
      idx = (idx + 1) % slides.length;
    };
    show();
    setInterval(show, 3000);
  });
}
