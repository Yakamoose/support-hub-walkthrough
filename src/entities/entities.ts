export interface Walkthrough {
  category: CategoryType;
  title: string;
  thumbnailImgPath: string;
  tags: Tags[];
  steps: WalkthroughStep[];
}

export interface Tags {
  text: string;
  color: string;
}

export interface WalkthroughStep {
    description: string; // innerHTML, will have <b> tags
    imagePath: string;
}

export enum CategoryType {
  Welcome = 'Welcome',
  Overview = 'Overview',
  HomePageSections = 'Home Page Sections',
  Features = 'Features',
  FindInfo = 'Find Information',
  Announcements = 'Announcementsand Visa Business News',
  Support = 'Support',
  TrainingAndEducastion = 'Training & Education',
}

// export const CategoryType = {
//     Welcome: 'Welcome',
//     Overview: 'Overview',
//     HomePageSections: 'Home Page Sections',
//     Features: 'Features',
//     FindInfo: 'Find Information',
//     Announcements: 'Announcements and Visa Business News',
//     Support: 'Support',
//     TrainingAndEducation: 'Training & Education',
//   };

export const WALKTHROUGHS: Walkthrough[] = [
    {
        category: CategoryType.HomePageSections,
        title: 'Popular Links',
        thumbnailImgPath: 'assets/images/popular_links/thumbnail.jpg',
        tags: [],
        steps: [
            {
                description: 'Diam mi venenatis scelerisque pulvinar. Proin sapien rhoncus quis non sed neque. Diam mi venenatis scelerisque pulvinar.',
                imagePath:  'assets/images/popular_links/step_0.jpg',
            },
            {
                description: '<b>Popular links</b> are organized by Pages, Documents and Searches during the previous week on Visa Online.',
                imagePath: 'assets/images/popular_links/step_1.jpg'
            },
            {
                description: '<b>Popular links</b> are filtered for <b>Global</b> or <b>My Region users. Links include the most accessed content, top searches and pages visited.',
                imagePath: 'assets/images/popular_links/step_1.jpg'
            }
        ]
    },
];
