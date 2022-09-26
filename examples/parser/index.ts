import { Parser } from 'youtubei.js.ts';

import SectionList from 'youtubei.js/dist/src/parser/classes/SectionList.ts';
import SingleColumnBrowseResults from 'youtubei.js/dist/src/parser/classes/SingleColumnBrowseResults.ts';

import MusicVisualHeader from 'youtubei.js/dist/src/parser/classes/MusicVisualHeader.ts';
import MusicImmersiveHeader from 'youtubei.js/dist/src/parser/classes/MusicImmersiveHeader.ts';
import MusicCarouselShelf from 'youtubei.js/dist/src/parser/classes/MusicCarouselShelf.ts';
import MusicDescriptionShelf from 'youtubei.js/dist/src/parser/classes/MusicDescriptionShelf.ts';
import MusicShelf from 'youtubei.js/dist/src/parser/classes/MusicShelf.ts';

import { readFileSync } from 'fs.ts';

// Artist page response from YouTube Music
const data = readFileSync('./artist.json').toString();

const page = Parser.parseResponse(JSON.parse(data));

const header = page.header.item().as(MusicImmersiveHeader, MusicVisualHeader);

console.info('Header:', header);

// The parser encapsulates all arrays in a proxy object.
// A proxy intercepts access to the actual data, allowing
// the parser to add type safety and many utility methods
// that make working with InnerTube much easier.
const tab = page.contents.item().as(SingleColumnBrowseResults).tabs.get({
  selected: false,
});

if (!tab) {
  throw new Error('Target tab not found');
}

if (!tab.content) {
  throw new Error('Target tab appears to be empty');
}

const sections = tab.content?.as(SectionList).contents.array().as(
  MusicCarouselShelf,
  MusicDescriptionShelf,
  MusicShelf,
);

console.info('Sections:', sections);
