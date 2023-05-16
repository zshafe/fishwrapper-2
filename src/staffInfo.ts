export interface StaffInfo {
  id: number;
  name: string;
  title: string;
  bio?: string;
  instagramLink?: string;
  twitterLink?: string;
}

const emilyVaughan: StaffInfo = {
  id: 1,
  name: "Emily Vaughan",
  title: "Editor In Chief",
  bio: "Unreliable narrator.",
  instagramLink: "https://www.instagram.com/oatmilkaunt/",
  twitterLink: "https://www.twitter.com/oatmilkaunt/",
};

const benOlsen: StaffInfo = {
  id: 2,
  name: "Ben Olsen",
  title: "Cunt In Chief",
  bio: "Honey, that's comedy gold! I'm living for it! You just slayed me with that one-liner, hunty! Werk! I can't stop laughing, it's like my laughter is on a runway, serving face, and strutting its stuff! You've got jokes for days, darling, and you're serving up the giggles like nobody's business. You better sashay away with that humor, because you just snatched my funny bone and left it gagging for more. Con-drag-ulations, you've got the laughter factor, and you're serving it up with charisma, uniqueness, nerve, and talent! Shantay, you stay in the funny lane, my fabulous friend!",
  instagramLink: "https://www.instagram.com/bolsen_24/",
  twitterLink: "https://www.twitter.com/ben_adjacent/",
};

const zackShafer: StaffInfo = {
  id: 3,
  name: "Zack Shafer",
  title: "Code Wench",
  instagramLink: "https://www.instagram.com/zackshaferr/",
  twitterLink: "https://www.twitter.com/szafir522/",
};

export const staffList: StaffInfo[] = [emilyVaughan, benOlsen, zackShafer];
