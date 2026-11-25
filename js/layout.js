/* Demo Three: shared header + bottom bands (Further Information, logo band, footer).
   Links with data-soon show a "coming soon" toast (demo only). */
(function () {
  const S = 'href="#" data-soon';

  // Demo crest logo (inline SVG shield, 4 quadrants)
  const crest = `
  <svg viewBox="0 0 60 70" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M30 2 L57 10 V34 C57 52 44 63 30 68 C16 63 3 52 3 34 V10 Z" fill="#fff"/>
    <path d="M30 6 L53 13 V34 C53 50 42 59 30 64 C18 59 7 50 7 34 V13 Z" fill="#003976"/>
    <rect x="7" y="34" width="23" height="2" fill="#fff"/><rect x="30" y="34" width="23" height="2" fill="#fff"/>
    <rect x="29" y="8" width="2" height="56" fill="#fff"/>
    <path d="M12 20 h12 v9 h-12z M18 20 v9" stroke="#00adef" stroke-width="1.6" fill="none"/>
    <path d="M42 17 c3 3 3 6 0 9 c-3 -3 -3 -6 0 -9z" fill="#e7006d"/><rect x="41" y="26" width="2" height="5" fill="#fff"/>
    <circle cx="18" cy="48" r="5" stroke="#00adef" stroke-width="1.6" fill="none"/><circle cx="18" cy="48" r="1.6" fill="#fff"/>
    <path d="M37 52 l5 -9 l5 9 z" fill="#e7006d"/>
  </svg>`;

  const logo = (cls = '') => `
    <a class="logo ${cls}" href="index.html" title="Crestwood International Study Centre">
      ${crest}
      <span class="name"><strong>CRESTWOOD</strong><small>International Study Centre</small></span>
    </a>`;

  const tiles = last => `
    <div class="tile"><span class="ic" style="background:#e7006d"><i class="fa-solid fa-book-open"></i></span><div><strong><a ${S}>Order a Prospectus</a></strong><span>Request a printed prospectus</span></div></div>
    <div class="tile"><span class="ic" style="background:#00adef"><i class="fa-solid fa-circle-question"></i></span><div><strong><a href="about.html">Why choose Crestwood</a></strong><span>Here's why to study with us</span></div></div>
    <div class="tile"><span class="ic" style="background:#005ec2"><i class="fa-solid fa-building-columns"></i></span><div><strong><a ${S}>Campus Tours</a></strong><span>Visit Crestwood International</span></div></div>
    <div class="tile"><span class="ic" style="background:#f5a100"><i class="fa-solid fa-graduation-cap"></i></span><div><strong><a ${S}>${last}</a></strong><span>Find a course</span></div></div>`;

  const li = (t, href) => `<li><a ${href ? `href="${href}"` : S}><i class="fa-solid fa-play"></i>${t}</a></li>`;
  const ind = '<i class="fa-solid fa-caret-down ind"></i>';

  const header = `
  <div id="Top_bar">
    <div class="wrap-1220">
      <div class="top_bar_left">
        ${logo()}
        <button class="menu-toggle" type="button" aria-label="Menu"><i class="fa-solid fa-bars me-1"></i> MENU</button>
        <div class="menu_wrapper">
          <ul id="mega-menu">
            <li><a href="index.html" class="icon-only" data-nav="home" aria-label="Home"><i class="fa-solid fa-house"></i></a></li>
            <li class="has-mega">
              <a href="#" data-nav="foundation">Foundation ${ind}</a>
              <div class="mega-sub">
                <div class="row g-0">
                  <div class="col-lg-3">${tiles('Undergraduate Courses')}</div>
                  <div class="col-lg-3 col-6">
                    <span class="grp">O' Level Equivalent<br>FD Programmes</span>
                    <ul>${li('FD in Business')}${li('FD in Sports')}</ul>
                    <span class="grp">A' Level Equivalent<br>ND Programmes</span>
                    <ul>${li('ND in IT')}${li('ND in Business')}${li('ND in Sports')}</ul>
                  </div>
                  <div class="col-lg-3 col-6">
                    <span class="grp">University Year 2 Equivalent<br>HND Programmes</span>
                    <ul>${li('HND in Computing', 'course.html')}${li('HND in Business')}${li('HND in English Law')}${li('HND in Sports Science')}</ul>
                    <span class="grp">Language Programme</span>
                    <ul>${li('English for Excellence')}${li('IELTS Preparation Course')}${li('English for Employment')}${li('Spoken English Course')}</ul>
                  </div>
                  <div class="col-lg-3"><a class="mimg tall" href="contact.html"><img src="https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&q=70" alt="Admission going on"></a></div>
                </div>
              </div>
            </li>
            <li class="has-mega">
              <a href="#">Undergraduate ${ind}</a>
              <div class="mega-sub">
                <div class="row g-0">
                  <div class="col-lg-3">${tiles('Foundation Courses')}</div>
                  <div class="col-lg-3"><span class="grp">Undergraduate Courses</span><ul>${li('BSc (Hons) Computing', 'course.html')}${li('BA (Hons) Business Management')}${li('LLB (Hons) Law')}${li('BSc (Hons) Sport Science')}</ul></div>
                  <div class="col-lg-6"><a class="mimg wide" ${S}><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=70" alt="Student blog"></a><a class="btn-be" ${S}>Read More</a></div>
                </div>
              </div>
            </li>
            <li class="has-mega">
              <a href="#">Postgraduate ${ind}</a>
              <div class="mega-sub">
                <div class="row g-0">
                  <div class="col-lg-3">${tiles('Undergraduate Courses')}</div>
                  <div class="col-lg-3"><span class="grp">Postgraduate Courses</span><ul>${li('UK MBA')}${li('LLM in Commercial Law')}</ul></div>
                  <div class="col-lg-6"><a class="mimg wide" ${S}><img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=70" alt="News"></a><a class="btn-be" ${S}>Read More</a></div>
                </div>
              </div>
            </li>
            <li><a href="about.html" data-nav="about">Why Crestwood International</a></li>
            <li class="has-mega">
              <a href="#">Students/Staff-Hubs ${ind}</a>
              <div class="mega-sub">
                <div class="row g-0">
                  <div class="col-lg-3 col-6"><span class="grp">Students Hubs</span><ul>${li('Class Schedules')}${li('Our Talent Pool')}</ul></div>
                  <div class="col-lg-3 col-6"><span class="grp">Students &amp; Staff</span><ul>${li('Student Login')}${li('Staff Login')}${li('Webmail')}</ul></div>
                  <div class="col-lg-6"><a class="mimg wide" ${S}><img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=70" alt="Student hub"></a></div>
                </div>
              </div>
            </li>
            <li><a href="contact.html" data-nav="contact">Contact</a></li>
            <li class="has-search">
              <a href="#" class="icon-only" aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></a>
              <div class="mega-search"><form data-demo="Search is a demo. Try the HND in Computing page!"><input type="text" placeholder="Enter your search"></form></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>`;

  const arrow = '<i class="fa-solid fa-chevron-right"></i>';
  const fl = (t, href) => `<li><a ${href ? `href="${href}"` : S}>${arrow}${t}</a></li>`;

  const bottom = `
  <div class="further">
    <div class="wrap-1220">
      <div class="row g-4">
        <div class="col-6 col-lg-3"><h4>Further Information</h4><div class="newupper-footer"><ul>${fl('About Us', 'about.html')}${fl('Our Campus')}${fl('Our Team')}</ul></div></div>
        <div class="col-6 col-lg-3"><h4 class="ghost">.</h4><div class="newupper-footer"><ul>${fl('Vision &amp; Mission')}${fl('Academic Calendar')}${fl('Crestwood eNewsletter')}</ul></div></div>
        <div class="col-6 col-lg-3"><h4>Popular</h4><div class="newupper-footer"><ul>${fl('Class Schedule')}${fl('Career')}${fl('How to find us', 'contact.html')}</ul></div></div>
        <div class="col-6 col-lg-3"><h4 class="ghost">.</h4><div class="newupper-footer"><ul>${fl('Contact Us', 'contact.html')}${fl('Webmail')}${fl('Privacy')}</ul></div></div>
      </div>
    </div>
  </div>
  <div class="logo-band">
    <div class="wrap-1220">
      <a class="acc-logo" ${S}><i class="fa-solid fa-award"></i><span>KINGSFORD<small>Awarding Body (demo)</small></span></a>
    </div>
  </div>
  <div class="footer-band">
    <div class="wrap-1220">
      <div class="row g-4">
        <div class="col-md-3">${logo('foot')}<p>Call: +880 1700-000000, +880 1700-000001<br>House # 00, Road # 0, Demo Area,<br>Dhaka-1200, Bangladesh</p></div>
        <div class="col-md-3">
          <div class="follow">Follow Crestwood International Study Centre</div>
          <div class="socials">
            <a class="s-fb" ${S} aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a class="s-tw" ${S} aria-label="X"><i class="fa-brands fa-x-twitter"></i></a>
            <a class="s-yt" ${S} aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
            <a class="s-in" ${S} aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="col-md-6"><p class="copy">© <span data-year></span> <b>Crestwood International Study Centre</b> - All rights reserved.<br><br><b>Crestwood International Study Centre</b> is a collaboration with<br>Westbridge University and Kingsford Awards (demo).</p></div>
      </div>
    </div>
  </div>
  <footer id="Footer">
    <div class="wrap-1220">
      <div class="copyright">© <span data-year></span> Crestwood. All Rights Reserved.</div>
      <ul class="social">
        <li><a ${S} aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a></li>
        <li><a ${S} aria-label="X"><i class="fa-brands fa-x-twitter"></i></a></li>
        <li><a ${S} aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a></li>
        <li><a ${S} aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></li>
        <li><a href="#" id="back_to_top" aria-label="Back to top"><i class="fa-solid fa-chevron-up"></i></a></li>
      </ul>
    </div>
  </footer>
  <div class="soon-toast" id="soonToast"><div class="inner"><i class="fa-solid fa-circle-info"></i><span>This page will be available in the full version.</span></div></div>`;

  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = bottom;

  const page = document.body.dataset.page;
  if (page) document.querySelectorAll(`[data-nav="${page}"]`).forEach(a => a.classList.add('active'));
})();
