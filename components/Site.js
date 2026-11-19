'use client';

import { useEffect, useState } from 'react';
import { site, photoSets, PHOTO_SET } from '../site.config';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const photo = (key) => `${basePath}${photoSets[PHOTO_SET][key]}`;

const Stars = () => <span aria-label="5 out of 5">★★★★★</span>;

export default function Site() {
  const [tab, setTab] = useState('hotel');
  const [lightbox, setLightbox] = useState(null);
  const [out, setOut] = useState(null);
  const [form, setForm] = useState({
    name: '', phone: '', checkIn: '', checkOut: '', room: site.stay.hotel[0].title, guests: 2, message: '',
  });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const [quick, setQuick] = useState({ checkIn: '', checkOut: '', guests: '2' });

  // fade-in on scroll
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((x) => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [tab]);

  const goContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const onQuick = (e) => {
    e.preventDefault();
    setForm((f) => ({ ...f, checkIn: quick.checkIn, checkOut: quick.checkOut, guests: parseInt(quick.guests) || 2 }));
    goContact();
  };
  const enquire = (room) => { setForm((f) => ({ ...f, room })); goContact(); };

  const onSend = (e) => {
    e.preventDefault();
    const msg = [
      `Enquiry for ${site.name}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Stay: ${form.room}`,
      `Dates: ${form.checkIn || '?'} to ${form.checkOut || '?'}`,
      `Guests: ${form.guests}`,
      form.message ? `Note: ${form.message}` : '',
    ].filter(Boolean).join('\n');
    setOut(msg);
  };

  const roomOptions = [...site.stay.hotel, ...site.stay.cottages].map((r) => r.title);
  const panel = site.stay[tab === 'hotel' ? 'hotel' : 'cottages'];

  return (
    <>
      <div className="preview">{site.bannerText}</div>

      <nav>
        <div className="wrap">
          <a href="#top" className="brand">{site.name}<small>{site.place}</small></a>
          <ul>
            <li><a href="#resort">The Resort</a></li>
            <li><a href="#rooms">Rooms &amp; Cottages</a></li>
            <li><a href="#dining">Dining</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a className="btn btn-clay" href="#contact">Enquire Direct</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <img className="bg" src={photo(site.hero.photo)} alt={`View from ${site.name}`} />
        <div className="wrap">
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1>{site.hero.title}</h1>
          <p className="lead">{site.hero.lead}</p>
          <form className="book" onSubmit={onQuick}>
            <label><span>Check-in</span><input type="date" value={quick.checkIn} onChange={(e) => setQuick({ ...quick, checkIn: e.target.value })} /></label>
            <label><span>Check-out</span><input type="date" value={quick.checkOut} onChange={(e) => setQuick({ ...quick, checkOut: e.target.value })} /></label>
            <label><span>Guests</span>
              <select value={quick.guests} onChange={(e) => setQuick({ ...quick, guests: e.target.value })}>
                {['1', '2', '3', '4', '5', '6'].map((g) => <option key={g}>{g}</option>)}
              </select></label>
            <button className="btn btn-clay" type="submit">Enquire</button>
          </form>
        </div>
      </header>

      <section className="info" aria-label="Property highlights">
        <div className="wrap grid">
          {site.info.map((i) => (
            <div className="cell" key={i.label}><small>{i.label}</small><p>{i.value}</p><em>{i.note}</em></div>
          ))}
        </div>
      </section>

      <section id="resort">
        <div className="wrap center">
          <p className="tag">{site.intro.tag}</p>
          <h2>{site.intro.title}</h2>
          <p className="sub">{site.intro.text}</p>
          <div className="features">
            {site.features.map((f) => (
              <div className="feat reveal" key={f.title}><i>{f.icon}</i><h3>{f.title}</h3><p>{f.text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="rooms" id="rooms">
        <div className="wrap center">
          <p className="tag">{site.stay.tag}</p>
          <h2>{site.stay.title}</h2>
          <p className="sub">{site.stay.text}</p>
          <div className="tabs" role="tablist">
            <button className={`tab ${tab === 'hotel' ? 'on' : ''}`} onClick={() => setTab('hotel')}>Hotel rooms</button>
            <button className={`tab ${tab === 'cot' ? 'on' : ''}`} onClick={() => setTab('cot')}>Cottages</button>
          </div>
          <div className="cards">
            {panel.map((r) => (
              <article className="card reveal" key={r.title}>
                <div className="img"><img src={photo(r.photo)} alt={r.alt} /></div>
                <div className="body">
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                  <div className="chips">{r.chips.map((c) => <span key={c}>{c}</span>)}</div>
                  <div className="row"><span className="rate">Rates on request</span>
                    <button className="btn btn-line" onClick={() => enquire(r.title)}>Enquire</button></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="dining">
        <div className="wrap dining">
          <div className="pic reveal"><img src={photo(site.dining.photo)} alt={site.dining.alt} /></div>
          <div className="reveal">
            <p className="tag">{site.dining.tag}</p>
            <h2>{site.dining.title}</h2>
            <p className="sub">{site.dining.text}</p>
            <ul className="ticks">{site.dining.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        </div>
      </section>

      <section id="gallery" style={{ background: 'var(--fog)' }}>
        <div className="wrap center">
          <p className="tag">{site.gallery.tag}</p>
          <h2>{site.gallery.title}</h2>
          <p className="sub">{site.gallery.text}</p>
          <div className="gal">
            {site.gallery.items.map((g) => (
              <figure className={g.cls} key={g.caption} onClick={() => setLightbox(photo(g.photo))}>
                <img src={photo(g.photo)} alt={g.caption} /><figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews">
        <div className="wrap center">
          <p className="tag">{site.reviewsSection.tag}</p>
          <h2>{site.reviewsSection.title}</h2>
          <p className="sub">{site.reviewsSection.text}</p>
          <div className="reviews2">
            {site.reviews.map((r, i) => (
              <figure className="rv reveal" key={i}>
                <div className="st"><Stars /></div>
                <blockquote>&ldquo;{r.text}&rdquo;</blockquote>
                <cite>{r.who} <span>&middot; {r.meta}</span></cite>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="enq" id="contact">
        <div className="wrap">
          <div className="cols">
            <div className="contact">
              <p className="tag">{site.contact.tag}</p>
              <h2>{site.contact.title}</h2>
              <p className="sub" style={{ marginBottom: 30 }}>{site.contact.text}</p>
              <p><b>Address</b>{site.address}</p>
              <p><b>Phone</b><a href={`tel:${site.phoneTel}`}>{site.phone}</a> <span style={{ opacity: 0.6 }}>{site.phoneNote}</span></p>
              <p><b>Front desk</b>{site.frontDesk}</p>
              <p style={{ marginTop: 24 }}><a className="btn btn-clay" href={site.mapsLink} target="_blank" rel="noopener noreferrer">Get directions</a></p>
            </div>

            <form onSubmit={onSend}>
              <div><label>Name<input required value={form.name} onChange={set('name')} /></label></div>
              <div><label>Phone / WhatsApp<input type="tel" required value={form.phone} onChange={set('phone')} /></label></div>
              <div><label>Check-in<input type="date" value={form.checkIn} onChange={set('checkIn')} /></label></div>
              <div><label>Check-out<input type="date" value={form.checkOut} onChange={set('checkOut')} /></label></div>
              <div><label>Stay type
                <select value={form.room} onChange={set('room')}>
                  {roomOptions.map((r) => <option key={r}>{r}</option>)}<option>Not sure yet</option>
                </select></label></div>
              <div><label>Guests<input type="number" min="1" value={form.guests} onChange={set('guests')} /></label></div>
              <div className="full"><label>Message<textarea placeholder="Anything we should know?" value={form.message} onChange={set('message')} /></label></div>
              <div className="full">
                <button className="btn btn-clay" type="submit" style={{ width: '100%' }}>Send enquiry</button>
                {out && (
                  <div id="out" style={{ display: 'block' }}>
                    {out}
                    <small>Preview only. On the live site this message goes straight to the resort&apos;s WhatsApp or email.</small>
                  </div>
                )}
              </div>
            </form>
          </div>
          <div className="mapwrap"><iframe title={`${site.name} location`} loading="lazy" src={site.mapEmbed} /></div>
        </div>
      </section>

      <footer>
        {site.name} &middot; {site.address.split(',').slice(0, 2).join(',')}
        <small>{site.footerNote}</small>
      </footer>

      <div className={`lb ${lightbox ? 'on' : ''}`} onClick={() => setLightbox(null)}>
        {lightbox && <img src={lightbox} alt="" />}
      </div>
    </>
  );
}
