export const CATEGORIES = {
    GettingStarted: 'Getting Started',
    Overview: 'Overview',
    HomePage: 'Home Page',
    Features: 'Features',
    FindInfo: 'Find Information',
    Announcements: 'Announcements and Visa Business News',
    Support: 'Support',
    TrainingAndEducation: 'Training & Education',
};

export const TAGS = {
    featured: 'Featured',
    new: 'New',
    popular: 'Popular',
    requested: 'Most Requested',
}

// ***architecture / order in array = order presented in DOM
export const WALKTHROUGHS = [
    // Getting Started category
    // ***ONLY 1 to fit G3tting Started Layout (different than others)
    {
        category: "Getting Started",
        categoryDescription: "Lorem ipsum dolor sit amet. Nullam neque justo ante lorem amet. Ultrices eu nisl odio.",
        title: 'How to submit feedback',
        thumbnailPath: 'assets/images/popular_links/thumbnail.jpg',
        tags: [TAGS.featured, TAGS.new, TAGS.popular, TAGS.requested],
        steps: [
            {
                description: '<b>Getting Started</b> introduces you to the dashboard. Explore the key elements to navigate through easily.',
                imagePath: 'assets/images/popular_links/step_0.jpg',
            },
            {
                description: '<b>Getting Started</b> also provides tips and shortcuts for better productivity.',
                imagePath: 'assets/images/popular_links/step_1.jpg'
            }
        ]
    },

    // Overview category
    {
        category: "Overview",
        categoryDescription: "A comprehensive overview of the dashboard.",
        title: 'Dashboard Overview mock data 1',
        thumbnailPath: 'assets/images/popular_links/thumbnail.jpg',
        tags: [TAGS.new, TAGS.requested],
        steps: [
            {
                description: '<b>Dashboard Overview</b> #1 explains the main components you will interact with daily.',
                imagePath: 'assets/images/popular_links/step_0.jpg',
            }
        ]
    },
    {
        category: "Overview",
        categoryDescription: "A comprehensive overview of the dashboard.",
        title: 'Home Page Overview mock data 2',
        thumbnailPath: 'assets/images/popular_links/thumbnail.jpg',
        tags: [TAGS.featured, TAGS.popular],
        steps: [
            {
                description: '<b>Dashboard Overview</b> #2 provides insights into the analytics section.',
                imagePath: 'assets/images/popular_links/step_1.jpg',
            }
        ]
    },
    {
        category: "Overview",
        categoryDescription: "A comprehensive overview of the dashboard.",
        title: 'Features Overview mock data 3',
        thumbnailPath: 'assets/images/popular_links/thumbnail.jpg',
        tags: [TAGS.popular, TAGS.new],
        steps: [
            {
                description: '<b>Dashboard Overview</b> #3 breaks down the task management interface.',
                imagePath: 'assets/images/popular_links/step_2.jpg',
            }
        ]
    },
    {
        category: "Overview",
        categoryDescription: "A comprehensive overview of the dashboard.",
        title: 'Announcements Overview mock data 4',
        thumbnailPath: 'assets/images/popular_links/thumbnail.jpg',
        tags: [TAGS.featured, TAGS.requested],
        steps: [
            {
                description: '<b>Dashboard Overview</b> #4 discusses the user settings and customization.',
                imagePath: 'assets/images/popular_links/step_3.jpg',
            }
        ]
    },
    // HomePage category
    {
        category: "Home Page",
        categoryDescription: "Exploring the various sections on the home page.",
        title: 'How to change your display order',
        thumbnailPath: 'assets/images/home_page/change_display_order/thumbnail.jpg',
        tags: [TAGS.featured, TAGS.new],
        steps: [
            {
                description: "This tutorial will walk you through how to change the display order on your Visa Online homepage.",
                imagePath: 'assets/images/home_page/change_display_order/step_0.jpg',
            },
            {
                description: 'From the home page tab, click <b>Change Display Order</b> to change how you view your home page content.',
                imagePath: 'assets/images/home_page/change_display_order/step_1.jpg',
            },
            {
                description: 'From here you can customize the order of your <b>Home Page Sections</b>, as well as My Services Links and Favorites Links.',
                imagePath: 'assets/images/home_page/change_display_order/step_2.jpg',
            },
            {
                description: 'In the <b>Home Page Sections</b> tab, simply drag and drop section rows using the arrows <img src="assets/images/home_page/change_display_order/arrows-icon.png" width="30" height="30" style="display: inline;" /> to change the display order.',
                imagePath: 'assets/images/home_page/change_display_order/step_3.jpg',
            },
            {
                description: 'When you are done, click <b>Save Changes</b>.',
                imagePath: 'assets/images/home_page/change_display_order/step_4.jpg',
            },
            {
                description: 'A green success banner will appear at the top of the dialog box. <b>Click OK</b>.',
                imagePath: 'assets/images/home_page/change_display_order/step_5.jpg',
            },
            {
                description: 'You will now see the updated order reflected on your home page.',
                imagePath: 'assets/images/home_page/change_display_order/step_6.jpg',
            },
        ]
    },
    // Features category
    {
        category: "Features",
        categoryDescription: "Learn about the latest features and updates.",
        title: 'Introducing New Features',
        thumbnailPath: 'assets/images/popular_links/thumbnail.jpg',
        tags: [],
        steps: [
            {
                description: '<b>New Features</b> are added to improve your overall experience.',
                imagePath: 'assets/images/popular_links/step_0.jpg',
            },
            {
                description: '<b>New Features</b> are highlighted so you can quickly identify them.',
                imagePath: 'assets/images/popular_links/step_1.jpg',
            }
        ]
    },
    // FindInfo category
    {
        category: "Find Information",
        categoryDescription: "Tips for effective searching on the platform.",
        title: 'How to Search',
        thumbnailPath: 'assets/images/popular_links/thumbnail.jpg',
        tags: [TAGS.requested],
        steps: [
            {
                description: '<b>How to Search</b> covers the basic techniques to find the information you need.',
                imagePath: 'assets/images/popular_links/step_0.jpg',
            }
        ]
    },
    // Announcements category
    {
        category: "Announcements",
        categoryDescription: "Get the latest news and announcements.",
        title: 'Latest Announcements',
        thumbnailPath: 'assets/images/popular_links/thumbnail.jpg',
        tags: [TAGS.featured],
        steps: [
            {
                description: '<b>Latest Announcements</b> shows you where to find and how to interpret new updates.',
                imagePath: 'assets/images/popular_links/step_0.jpg',
            }
        ]
    },
    // Support category
    {
        category: "Support",
        categoryDescription: "Support resources and channels you can turn to.",
        title: 'Customer Support',
        thumbnailPath: 'assets/images/popular_links/thumbnail.jpg',
        tags: [TAGS.new],
        steps: [
            {
                description: '<b>Customer Support</b> offers multiple channels to assist you with any issues.',
                imagePath: 'assets/images/popular_links/step_0.jpg',
            },
            {
                description: '<b>Customer Support</b> is available around the clock for urgent matters.',
                imagePath: 'assets/images/popular_links/step_1.jpg',
            }
        ]
    },
    // TrainingAndEducation category
    {
        category: "Training and Education",
        categoryDescription: "Educational materials to improve your proficiency.",
        title: 'Online Training Modules',
        thumbnailPath: 'assets/images/popular_links/thumbnail.jpg',
        tags: [TAGS.popular],
        steps: [
            {
                description: '<b>Online Training Modules</b> offer a comprehensive guide to get you up to speed.',
                imagePath: 'assets/images/popular_links/step_0.jpg',
            },
            {
                description: '<b>Online Training Modules</b> are available for users at all levels of expertise.',
                imagePath: 'assets/images/popular_links/step_1.jpg',
            }
        ]
    },
];

