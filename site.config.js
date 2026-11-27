// All client-specific content lives here. To reuse this template for another
// resort or cafe, change this file (and the photos), not the components.

// 'placeholders' = neutral images committed to git (safe for a public repo).
// 'local'        = real photos in public/photos/ (gitignored; use only photos the owner approved).
// Defaults to placeholders so a pushed build never points at uncommitted photos.
// For a private preview with real photos, put NEXT_PUBLIC_PHOTO_SET=local in .env.local (gitignored).
export const PHOTO_SET = process.env.NEXT_PUBLIC_PHOTO_SET === 'local' ? 'local' : 'placeholders';

export const photoSets = {
  placeholders: {
    valley: '/placeholders/valley.svg', room: '/placeholders/room.svg', facade: '/placeholders/facade.svg',
    cottage: '/placeholders/cottage.svg', garden: '/placeholders/garden.svg', balcony: '/placeholders/balcony.svg',
  },
  local: {
    valley: '/photos/valley.jpg', room: '/photos/room.jpg', facade: '/photos/facade.jpg',
    cottage: '/photos/cottage.jpg', garden: '/photos/garden.jpg', balcony: '/photos/balcony.jpg',
  },
};

export const site = {
  name: 'Sai Valley Resort',
  place: 'Mahabaleshwar',
  bannerText: 'Concept preview, not the official Sai Valley Resort website. Prepared as a design proposal.',
  address: 'Lodwick Point Road, Mahabaleshwar, Maharashtra 412806',
  phone: '02168 261 091',
  phoneTel: '+912168261091',
  phoneNote: '(to confirm)',
  mapsLink: 'https://maps.app.goo.gl/puGWUzGB48e3VLwZ9',
  mapEmbed: 'https://maps.google.com/maps?q=17.926289,73.6457284&z=16&output=embed',
  frontDesk: '24 hours',
  // Real Instagram handle only (without @). Left empty = the Instagram link is hidden.
  instagram: '',

  hero: {
    eyebrow: 'Lodwick Point Road · Mahabaleshwar',
    title: 'Wake up to the valley, the forest and the quiet.',
    lead: 'Valley-view rooms and garden cottages, a swimming pool, lawns to wander and an in-house restaurant, on the road to Lodwick Point.',
    photo: 'valley',
  },

  // Verify every item with the owner before showing the site.
  info: [
    { label: 'Location', value: 'Lodwick Point Road', note: '1.2 km from Mahabaleshwar Market, near Dhobi Waterfall & Polo Grounds' },
    { label: 'Check-in / Check-out', value: '10:00 AM – 10:00 AM', note: 'A full 24-hour stay' },
    { label: 'Group & family stays', value: 'Rooms for couples and families', note: 'Group / bungalow stay for up to 30 guests' },
    { label: 'Dining', value: 'In-house pure veg restaurant', note: 'Quick service and room dining' },
  ],

  intro: {
    tag: 'The resort',
    title: 'A calm base in the hills',
    text: 'White balconies, tinted glass and wide lawns, set among the trees. Sai Valley Resort is made for slow weekends with family and friends.',
  },
  features: [
    { icon: '▲', title: 'Valley & forest balconies', text: 'Open your door to green Sahyadri views and cool morning air.' },
    { icon: '●', title: 'Pool & gardens', text: 'A swimming pool and landscaped lawns for easy afternoons and evening walks.' },
    { icon: '■', title: 'Easy family stays', text: 'Air-conditioned rooms, a restaurant on site, free private parking and a 24-hour front desk.' },
    { icon: '◆', title: 'On Lodwick Point Road', text: "Peaceful and tucked in nature, yet close to Mahabaleshwar's viewpoints." },
  ],

  stay: {
    tag: 'Stay',
    title: 'Rooms & cottages',
    text: 'Choose a room in the main building or a detached cottage in the garden. Group and bungalow stays for up to 30 guests are available too. Rates and availability on request.',
    hotel: [
      { title: 'Valley-view room', text: 'Bright, air-conditioned room with a private balcony facing the trees and the valley.', chips: ['Private balcony', 'Air-conditioned', 'Private bathroom'], photo: 'room', alt: 'Air-conditioned room with double bed' },
      { title: 'Garden & pool-view room', text: 'Rooms with a balcony over the garden or the pool, close to the lawns and the restaurant.', chips: ['Garden or pool view', 'Balcony', 'Family friendly'], photo: 'facade', alt: 'Curved balconies of the main building' },
    ],
    cottages: [
      { title: 'Garden cottage', text: 'A detached single-storey cottage among the trees. Private and quiet, good for families and groups.', chips: ['Detached', 'Garden setting', 'Details to confirm'], photo: 'cottage', alt: 'Garden cottage with green roof' },
    ],
  },

  dining: {
    tag: 'Dining',
    title: 'Meals on site',
    text: 'A pure vegetarian restaurant on site, with quick service. Eat after a day out, enjoy a meal in your room, or sit in the garden on a clear morning.',
    points: ['In-house pure veg restaurant', 'Breakfast, lunch and dinner, with room dining (timings to confirm)', 'Garden seating among the flowers'],
    photo: 'garden',
    alt: 'Flower-lined garden path with seating',
  },

  gallery: {
    tag: 'Gallery',
    title: 'Light, green and quiet',
    text: "Preview photos for the proposal. The resort's own photos will replace them before launch.",
    items: [
      { cls: 'a', photo: 'facade', caption: 'The main building' },
      { cls: 'b', photo: 'balcony', caption: 'From the balcony' },
      { cls: 'c', photo: 'garden', caption: 'The garden' },
      { cls: 'd', photo: 'cottage', caption: 'Cottage' },
      { cls: 'e', photo: 'valley', caption: 'The valley at golden hour' },
      { cls: 'f', photo: 'room', caption: 'A room' },
    ],
  },

  // Only add reviews you have matched to the real listing. Remove any you cannot verify.
  reviewsSection: { tag: 'Guests', title: 'What guests say', text: 'Calm, clean rooms, friendly staff and views that guests remember.' },
  reviews: [
    { text: 'Very good, silent, and peaceful atmosphere. Clean and hygienic rooms, a great restaurant with quick service and a wide variety of food, completely away from city noise at a reasonable price.', who: 'Manohar', meta: 'Navi Mumbai · 5.0' },
    { text: 'The mesmerizing view from the rooms just took my breath away. Well-maintained resort with very cordial reception staff and a great housekeeping team. Would definitely visit again.', who: 'Guest', meta: '5.0' },
    { text: 'Situated in a picturesque location with forest and valley-view rooms. Extremely friendly staff and delicious pure veg food add to the pleasure.', who: 'Google guest', meta: '5.0' },
    { text: 'Best rooms, best service, and best location on Lodwick Point Road. Superb breakfast, lunch, and dinner.', who: 'Google guest', meta: '5.0' },
  ],

  contact: { tag: 'Plan your stay', title: 'Enquire directly', text: 'Tell us your dates and we will reply with rooms and rates.' },
  footerNote: 'Concept preview · details subject to confirmation by the resort',
};
