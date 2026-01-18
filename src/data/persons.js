export const persons = [
  "Bate",
  "BenBer",
  "Chrorh",
  "Crevans",
  "Elusk",
  "Roder",
  "SaltMan",
  "Stobs",
  "Thohild",
  "Tolland",
].map((name) => ({
  id: name.toLowerCase(),
  name,
  images: {
    front: [
      `/images/${name}/front/f1.jpg`,
      `/images/${name}/front/f2.jpg`,
    ],
    left: [`/images/${name}/left/l.jpg`],
    right: [`/images/${name}/right/r.jpg`],
    back: [`/images/${name}/back/b.jpg`],
  },
}));
