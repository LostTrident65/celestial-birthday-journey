
import { Memory, StarPoint } from './types';
import * as Img from './constants/images';



export const BIRTHDAY_PERSON_NAME = "✨Aswathy✨";
export const BIRTHDAY_DATE = "January 1st";

// MEMORY GARDEN DATA
export const MEMORIES: Memory[] = [
  {
    id: '1',
    imageUrl: Img.ASWATHY_SCARY_PHOTO, 
    title: 'The Scary One o-o',
    note: 'Always beats the shit out of me 😔.'
  },
  {
    id: '2',
    imageUrl: Img.MEMORY_PHOTO_2,
    title: 'Mature & Immature One',
    note: 'Old soul, young heart — beautifully both.'
  },
  {
    id: '3',
    imageUrl: Img.MEMORY_PHOTO_3,
    title: 'Weird ?',
    note: 'Certified weirdo, lovingly.'
  },
  {
    id: '4',
    imageUrl: Img.MEMORY_PHOTO_4,
    title: 'Doesnt listen to anything I say',
    note: 'Hears everything, follows nothing.'
  },
];

// STAR MAP DATA (Constellation positions)
export const STAR_CONSTELLATION: StarPoint[] = [
  { id: 1, x: 20, y: 30, delay: 0.2, note: "Born to shine, doomed to overthink.", image: Img.STAR_PHOTO_1 },
  { id: 2, x: 35, y: 15, delay: 0.4, note: "A star with main-character syndrome.", image: Img.STAR_PHOTO_2 },
  { id: 3, x: 50, y: 40, delay: 0.6, note: "Glows brighter than her decision-making skills.", image: Img.STAR_PHOTO_3 },
  { id: 4, x: 65, y: 20, delay: 0.8, note: "Universe’s finest creation… still can’t reply on time.", image: Img.STAR_PHOTO_4 },
  { id: 5, x: 80, y: 35, delay: 1.0, note: "Proof that even chaos can sparkle.", image: Img.STAR_PHOTO_5 },
];
