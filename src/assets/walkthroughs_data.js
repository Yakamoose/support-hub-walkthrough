export const CATEGORIES = {
    GettingStarted: 'Getting Started',
    NewFeatures: 'New Features',
    Overview: 'Overview',
    HomePage: 'Home Page',
    AdministrationPanel: 'Administration Panel',
    ProfileSettings: 'Profile Settings',
    SupportCases: 'Support Cases',
    CaseDashboard: 'Case Dashboard',
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
// group walkthroughs by Category
export const VSH_WALKTHROUGHS = [
    // Getting Started category
    // ***ONLY 1 to fit Getting Started Layout (different than others)
    {
        category: CATEGORIES.GettingStarted,
        categoryDescription: "See how to best share your thoughts and ideas with us through our new feedback form.",
        title: 'How to submit feedback',
        thumbnailPath: 'assets/images/popular_links/thumbnail.jpg',
        tags: [TAGS.featured, TAGS.new],
        steps: [
            {
                description: '<b>Getting Started</b> introduces you to the dashboard. Explore the key elements to navigate through easily.<br>In the left side of the <b>Case details page</b>, perform the following actions if needed',
                note: 'If recipients have access to Visa Online and the <b>Visa Support Hub</b>, they will see your case listed in their dashboard and can interact on your case. They will also receive email notifications unless they have turned these off in their profile settings. Only Issuers, Acquirers and Processors have access to the Visa Support Hub.',
                imagePath: 'assets/images/popular_links/step_0.jpg',
            },
            {
                description: '<b>Getting Started</b> also provides tips and shortcuts for better productivity.',
                imagePath: 'assets/images/popular_links/step_1.jpg'
            }
        ]
    },

    // Home Page Category
    {
        category: CATEGORIES.HomePage,
        categoryDescription: '*** Exploring the various sections of the home page. Exploring the various sections of the home page with longer text',
        title: 'How to navigate the home page',
        thumbnailPath: 'assets/images/VSH_assets/home_page/navigating/thumbnail.jpg',
        tags: [TAGS.popular],
        steps: [
            {
                description: `Your Visa Support Hub home page will help you find answers to commonly asked questions.<br><b>This tutorial will walk you through how to find answers to commonly asked questions on Visa Support Hub.</b>`,
                imagePath: 'assets/images/VSH_assets/home_page/navigating/step_0.jpg'
            },
            {
                description: `Search through Support Topics and FAQs using the Visa Support
                Hub home page <b>search field.</b>`,
                note: 'To search within existing cases, go to the Case Dashboard.',
                imagePath: 'assets/images/VSH_assets/home_page/navigating/step_1.jpg'
            },
            {
                description: `Search results display a brief description and links to the FAQs.`,
                imagePath: 'assets/images/VSH_assets/home_page/navigating/step_2.jpg'
            },
            {
                description: `A minimum of 3 characters is required to yield search results.`,
                note: 'NOTE: If the search criteria is not met an “Invalid Search [XYZ]” pop-up displays.',
                imagePath: 'assets/images/VSH_assets/home_page/navigating/step_3.jpg'
            },
            {
                description: `If there are no results matching your search, a 'No results' message is displayed.`,
                imagePath: 'assets/images/VSH_assets/home_page/navigating/step_4.jpg'
            },
            {
                description: `Support Topics are organized into key categories to help narrow your search.`,
                imagePath: 'assets/images/VSH_assets/home_page/navigating/step_5.jpg'
            },
            {
                description: `Select the topic that most closely relates to your question within the topic category.`,
                imagePath: 'assets/images/VSH_assets/home_page/navigating/step_6.jpg'
            },
            {
                description: `From the topic page, you will find <b>Frequently Asked Questions, Helpful Documents</b>, and a <b>Create a Case</b> button that will take you to the appropriate case form for your support topic to help expedite your request if needed.`,
                imagePath: 'assets/images/VSH_assets/home_page/navigating/step_7.jpg'
            },
            {
                description: `The Visa Support Hub will also support the Live Chat feature.
                To access Live Chat, <b>select the chat icon</b> on the right of the page to start Live Chat.`,
                imagePath: 'assets/images/VSH_assets/home_page/navigating/step_8.jpg'
            }
        ]
    },

    // Administration Panel
    {
        category: CATEGORIES.AdministrationPanel,
        categoryDescription: '*** Need a description for this category.',
        title: 'Role of Administrators',
        thumbnailPath: 'assets/images/VSH_assets/administration_panel/role_of_administrators/thumbnail.jpg',
        tags: [TAGS.popular, TAGS.requested],
        steps: [
            {
                description: 'The role of the Primary Administrators is to set the appropriate access level for all users within your organization. Administrators can manage user access for all roles, except the Primary Administrator.<br><b>This tutorial will walk you through the different levels of access on Visa Support Hub.</b>',
                imagePath: 'assets/images/VSH_assets/administration_panel/role_of_administrators/step_0.jpg',
            },
            {
                description: `Within VSH you can set three different levels to manage user access within your organization.`,
                imagePath: 'assets/images/VSH_assets/administration_panel/role_of_administrators/step_0.jpg',
            },
            {
                description: `<b>Standard Access</b> provides the user with access to only their cases within the Visa Support Hub. If they have multiple Visa Online Profiles, this would include their cases for any of those profiles.`,
                imagePath: 'assets/images/VSH_assets/administration_panel/role_of_administrators/step_1.jpg'
            },
            {
                description: `<b>Expanded Access</b> provides the user with access to all cases opened by anyone within their organization.`,
                imagePath: 'assets/images/VSH_assets/administration_panel/role_of_administrators/step_2.jpg'
            },
            {
                description: `<b>Administrator Access</b> provides administrator access and should be used sparingly and limited to anyone needed as a backup. The primary administrator will be designated in the Client Directory under the role of Visa Support Hub Administrator`,
                note: `The Primary Administrator role can only be changed through the Client Directory on Visa Online.`,
                imagePath: 'assets/images/VSH_assets/administration_panel/role_of_administrators/step_3.jpg'
            },
            {
                description: `Once you designate someone as an administrator, they will see the Administrator Settings link listed under their Visa Support Hub profile.`,
                imagePath: 'assets/images/VSH_assets/administration_panel/role_of_administrators/step_4.jpg'
            },
            {
                description: `Users will be able to see their own access level and who is their administrator through their Visa Support Hub Manage Profile Settings page.`,
                imagePath: 'assets/images/VSH_assets/administration_panel/role_of_administrators/step_5.jpg'
            },
            {
                description: `In addition, if you are designated as an administrator for multiple organizations, you will need to first select the BID and country for the organization you would like to view or change.`,
                imagePath: 'assets/images/VSH_assets/administration_panel/role_of_administrators/step_6.jpg'
            }
        ]
    },
    {
        category: CATEGORIES.AdministrationPanel,
        categoryDescription: '*** Need a description for this category.',
        title: 'How to Change User Access',
        thumbnailPath: 'assets/images/VSH_assets/administration_panel/change_user_access/thumbnail.jpg',
        tags: [TAGS.new],
        steps: [
            {
                description: `If you are designated as an administrator for your organization, you have the ability to set the appropriate access levels for the users within your organization.<br><b>This tutorial will walk you through how to change user access on Visa Support Hub.</b>`,
                imagePath: 'assets/images/VSH_assets/administration_panel/change_user_access/step_0.jpg',
            },
            {
                description: `As an administrator you can manage user access. All users will initially be set up with standard access and be able to view only their own cases or cases they have been copied on.`,
                imagePath: 'assets/images/VSH_assets/administration_panel/change_user_access/step_1.jpg',
            },
            {
                description: `As an administrator, to change user access, click on your initials at the top and select <b>Administration Settings</b>.`,
                imagePath: 'assets/images/VSH_assets/administration_panel/change_user_access/step_2.jpg',
            },
            {
                description: `<b>Search</b> by name or Visa Online ID, or <b>browse</b> to find the person you would like to change access.`,
                imagePath: 'assets/images/VSH_assets/administration_panel/change_user_access/step_3.jpg',
            },
            {
                description: `You can select one or more users to change access at the same time, and then click on <b>Edit Access.</b>`,
                note: `To select all users from one type of access to another, click on the access tab you which to change. Then select the top box at the left to select all users and <b>Edit Access</b>.`,
                imagePath: 'assets/images/VSH_assets/administration_panel/change_user_access/step_4.jpg',
            },
            {
                description: `A modal window will open where you can select the appropriate access level.`,
                imagePath: 'assets/images/VSH_assets/administration_panel/change_user_access/step_5.jpg',
            },
            {
                description: ``,
                note: `When granting Administrator access, the modal will prompt you to confirm this action before the <b>Apply</b> button is enabled.<br>Alternatively, you can click on the name of the user and perform the same functions and click <b>Save Changes</b>.`,
                imagePath: 'assets/images/VSH_assets/administration_panel/change_user_access/step_6.jpg',
            }
        ]
    },

    // Profile Settings
    {
        category: CATEGORIES.ProfileSettings,
        categoryDescription: '*** How to manage settings.',
        title: 'Email Notifications & Additional Recipients',
        thumbnailPath: 'assets/images/VSH_assets/manage_profile_settings/email/thumbnail.jpg',
        tags: [TAGS.popular, TAGS.featured, TAGS.requested],
        steps: [
            {
                description: `Managing your profile allows you to access Visa Support Hub help, change your email notification settings, view, and edit your favorite topics, and see more information about your account.<br><b>This tutorial will walk you through how to view or change your email notifications on Visa Hub.</b>`,
                imagePath: 'assets/images/VSH_assets/manage_profile_settings/email/step_0.jpg',
            },
            {
                description: `The Visa Support Hub allows you to update your email notification preferences. To view your email notification preferences, select <b>your initials</b> at the top and then select <b>Manage Profile Settings.</b>`,
                imagePath: 'assets/images/VSH_assets/manage_profile_settings/email/step_1.jpg',
            },
            {
                description: `To change your email notification preferences, click on the <b>Edit Notification Settings</b> button.`,
                note: `If you have more than one <b>BID</b> associated with your profile, select the <b>BID</b> you want to edit first.`,
                imagePath: 'assets/images/VSH_assets/manage_profile_settings/email/step_2.jpg',
            },
            {
                description: `From the Manage Notification Settings pop-up, the notification preference is defaulted to “<b>On</b>.” If you switch to “<b>OFF</b>” you will not receive any emails about your case(s).`,
                imagePath: 'assets/images/VSH_assets/manage_profile_settings/email/step_3.jpg',
            },
            {
                description: `As an option, you can add an additional email as a back-up to receive all case notifications by default.<br>Enter the additional email recipient in the field, accept the confirmation and click <b>Apply</b>.`,
                note: `Do not enter a personal email address.`,
                imagePath: 'assets/images/VSH_assets/manage_profile_settings/email/step_4.jpg',
            }
        ]
    },
    {
        category: CATEGORIES.ProfileSettings,
        categoryDescription: '*** How to manage settings.',
        title: 'Access & locating your Administrator',
        thumbnailPath: 'assets/images/VSH_assets/manage_profile_settings/access_and_administration/thumbnail.jpg',
        tags: [TAGS.requested],
        steps: [
            {
                description: `<b>This tutorial will walk you through how to view your access level and how to locate your Support Hub Administrator.</b>`,
                imagePath: 'assets/images/VSH_assets/manage_profile_settings/access_and_administration/step_0.jpg'
            },
            {
                description: `You may have one of two levels of Access to see cases: standard or expanded.`,
                imagePath: 'assets/images/VSH_assets/manage_profile_settings/access_and_administration/step_1.jpg'
            },
            {
                description: `The default setting is Expanded access: you will see all the cases within your organization`,
                imagePath: 'assets/images/VSH_assets/manage_profile_settings/access_and_administration/step_2.jpg'
            },
            {
                description: `Or your organization may assign you Standard access: you will only see your cases.`,
                imagePath: 'assets/images/VSH_assets/manage_profile_settings/access_and_administration/step_3.jpg'
            },
            {
                description: `If you have a local Administrator, you can find them under the Admin column.`,
                note: `If you have multiple Visa Online profiles, you will see any cases for those profiles included in your case dashboard.`,
                imagePath: 'assets/images/VSH_assets/manage_profile_settings/access_and_administration/step_4.jpg'
            }
        ]
    },
    {
        category: CATEGORIES.ProfileSettings,
        categoryDescription: '*** How to manage settings.',
        title: 'Edit Favorites',
        thumbnailPath: 'assets/images/VSH_assets/manage_profile_settings/edit_favorites/thumbnail.jpg',
        tags: [TAGS.new, TAGS.requested],
        steps: [
            {
                description: `The Visa Support Hub allows you to save your favorite topics so you can easily access them.<br><b>This tutorial will walk you through how to edit your favorites on Visa Support Hub.</b>`,
                imagePath: 'assets/images/VSH_assets/manage_profile_settings/edit_favorites/step_0.jpg'
            },
            {
                description: `To add a topic to your Favorites, click the Favorite (Star) icon next to your chosen topic.<br>Clicking it again will remove it as a favorite.`,
                imagePath: 'assets/images/VSH_assets/manage_profile_settings/edit_favorites/step_1.jpg'
            },
            {
                description: `To view and edit all your Favorites, Select your Initials icon and then click Favorite Topics.`,
                imagePath: 'assets/images/VSH_assets/manage_profile_settings/edit_favorites/step_2.jpg'
            },
            {
                description: `Access your favorite topics by clicking the Linked Title.`,
                imagePath: 'assets/images/VSH_assets/manage_profile_settings/edit_favorites/step_3.jpg'
            },
            {
                description: `Delete any topic from your favorites by clicking the Star icon.`,
                note: `If you do not have favorite topics, the window displays, “No Topics Found.”`,
                imagePath: 'assets/images/VSH_assets/manage_profile_settings/edit_favorites/step_4.jpg'
            },
        ]

    },

    // Support Cases Category
    {
        category: CATEGORIES.SupportCases,
        categoryDescription: `*** How to create and manage cases.`,
        title: 'How to Create a Case',
        thumbnailPath: 'assets/images/VSH_assets/case_dashboard/create_a_case/thumbnail.jpg',
        tags: [TAGS.featured],
        steps: [
            {
                description: `While the Visa Support Hub is designed to help you resolve independently, sometimes you may still need to create a case for additional assistance.<br><b>This tutorial will walk you through how to create a support case on Visa Support Hub.</b>`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_0.jpg'
            },
            {
                description: `If you have browsed the Visa Support Hub's Topic Knowledge page and are unable to find the answer you need, you can create a case from the topic you're viewing.<br>Click the <b>Create a Case</b> button at the bottom left of the page.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_1.jpg'
            },
            {
                description: ``,
                note: `If you know you need to create a specific type of case, you can access it quickly through the <b>Create a Case</b> button in the top navigation bar and then select the topic to load the appropriate form. You can also save any topic as a favorite for quick access.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_2.jpg'
            },
            {
                description: `The case form will display, and your case topic will be prepopulated at the top.`,
                note: `If this is not the topic you want associated with your case, click <b>Choose a different topic.</b>`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_3.jpg'
            },
            {
                description: `If you have multiple Visa Online profiles, use the BID field to select the profile you want to associate with the case.`,
                note: `If the case requires it, select the most appropriate option.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_4.jpg'
            },
            {
                description: `Enter a <b>Case Title.</b>`,
                note: `Keep the title short, but descriptive. It will display in your dashboard and is not editable once submitted.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_5.jpg'
            },
            {
                description: `Select the <b>Case Business Priority</b> from the drop-down.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_6.jpg'
            },
            {
                description: `<b>Enter a description</b> with details that will help us solve your case.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_7.jpg'
            },
            {
                description: `Use the <b>Account Number</b> button to enter PAN data. This information will be encrypted when the case is submitted.`,
                note: `This is only visible to the case owner and Visa.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_8.jpg'
            },
            {
                description: `The <b>Associated Case(s)</b> field can be used to enter case numbers for any previous cases you want to associate with this case.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_9.jpg'
            },
            {
                description: `You can add attachments by clicking the <b>Choose File...</b> button and selecting the file you want to upload or simply by dragging and dropping your file into the box.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_10.jpg'
            },
            {
                description: `You can add <b>Additional Contacts</b> to be notified about any updates to the case. They may contact you if they do not want to receive email notifications for this case. You can easily remove them later by selecting the 'x' next to their name.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_11.jpg'
            },
            {
                description: ``,
                note: `If recipients have access to Visa Online and the Visa Support Hub, they will see your case listed in their dashboard and can interact on your case. They will also receive email notifications unless they have turned these off in their profile settings. Only Issuers, Acquirers and Processors have access to the Visa Support Hub.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_12.jpg'
            },
            {
                description: `When your case form is complete, click <b>Submit.</b>`,
                note: `You can click <b>Save as Draft</b> if you would like to save the case without submitting it. It will display as a draft in your dashboard for up to 60 days.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_13.jpg'
            },
            {
                description: `Once you've submitted your case, a confirmation will appear.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_14.jpg'
            },
            {
                description: `Click <b>Manage Case</b> to edit, download, or add a message to your case, click <b>Dashboard</b> to return to the Case Dashboard, or click <b>Support Hub Home</b> to return home.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_15.jpg'
            },
            {
                description: `The case will now display on your <b>Case Dashboard.</b>`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/create_a_case/step_16.jpg'
            }
        ]
    },
    {
        category: CATEGORIES.SupportCases,
        categoryDescription: `*** How to create and manage cases.`,
        title: 'How to Manage a Case',
        thumbnailPath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/thumbnail.jpg',
        tags: [TAGS.featured],
        steps: [
            {
                description: `Managing your case is easier than ever through the Visa Support Hub. Your case dashboard provides you with a complete list of all your open and closed cases, as well as any cases that you are copied on.<br><b>This tutorial will walk you through how to manage your support case on Visa Support Hub.</b>`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_0.jpg'
            },
            {
                description: `When a case is updated or you need to edit a case, select <b>Case Dashboard</b> at the top of any Visa Support Hub page. From here, you can access your <b>Case Details.</b>`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_1.jpg'
            },
            {
                description: `<b>Search for your case</b> by entering key words, case numbers or phrases in the search field and clicking <b>Apply.</b> You can also simply scroll through the cases that appear below the filter tools.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_2.jpg'
            },
            {
                description: ``,
                note: `Any cases with new updates will appear for the case owner at the top with the bell icon at the left. Once the case owner clicks to view the case, the bell icon will disappear.<br>For additional help on searching for a case, refer to the <b>How to Use Your Dashboard tutorial.</b>`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_3.jpg'
            },
            {
                description: `When you find the desired case in the search results, click the <b>Case Number</b> link to open the case.`,
                note: `You can export the cases by clicking the <b>Export to Excel</b> button and a CSV file will be downloaded.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_4.jpg'
            },
            {
                description: `You can see, but not edit, the following details on the Case Details page: case topic, case number, status and last edit by Visa, case title, priority, and description.`,
                note: `Depending on the case topic you may see additional items on the case details. Any areas that are not editable are displayed with a dotted outline.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_5.jpg'
            },
            {
                description: `Use the <b>Activity pane</b> to review existing messages on the case.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_6.jpg'
            },
            {
                description: `Click the <img src="assets/images/VSH_assets/case_dashboard/manage_a_case/enlarge-icon.png"> symbol to enlarge the message, and the <img src="assets/images/VSH_assets/case_dashboard/manage_a_case/respond-icon.png"> symbol to respond to that specific message in the thread.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_7.jpg'
            },
            {
                description: `Click the <b>Attachments</b> tab to review attachments for the case.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_8.jpg'
            },
            {
                description: `Use the text area at the top of the Activity pane to <b>add a message</b> to the case.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_9.jpg'
            },
            {
                description: `Click the paper clip icon to <b>attach a file</b> to the message, if needed. `,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_10.jpg'
            },
            {
                description: `Click <b>Submit</b> to send your message to the support team.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_11.jpg'
            },
            {
                description: `In the left side of the Case details page, perform the following actions if needed:<br>Click the <b>Account Number</b> button to enter PAN data that will be encrypted once submitted.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_12.jpg'
            },
            {
                description: `On the left side of the case details page, perform the following actions if needed:<br>Use the <b>Associated Case(s)</b> field to add cases you wish to associate by entering the case number and pressing Enter.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_13.jpg'
            },
            {
                description: `Use the <b>Additional Notification Recipients</b> field to add or remove any users you have designated to receive notifications on the case. `,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_14.jpg'
            },
            {
                description: `Users with access to Visa Online and the Visa Support Hub will see your case listed in their dashboard and can interact on your case. They will also receive email notifications unless they have turned these off in their profile settings.<br>To remove an email, click the <b>'X'</b> next to it.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_15.jpg'
            },
            {
                description: `Click <b>Case History</b> to download a CSV file containing an audit trail of the case activities, and identification of who did them.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_16.jpg'
            },
            {
                description: `If needed, click <b>Request to Cancel</b> to request cancellation of a case.`,
                imagePath: 'assets/images/VSH_assets/case_dashboard/manage_a_case/step_17.jpg'
            }
        ]
    },

    // Case dashboard Category
    {
        category: CATEGORIES.CaseDashboard,
        categoryDescription: `*** How to use various dashboard tools.`,
        title: 'Overview of the dashboard',
        thumbnailPath: 'assets/images/VSH_assets/how_to_use_dashboard/overview/thumbnail.jpg',
        tags: [TAGS.new],
        steps: [
            {
                description: `Your Visa Support Hub dashboard provides greater visibility into all your support cases. It displays a complete list of your cases, open or closed, as well as any cases where you have been assigned as a notification recipient.<br><b>This tutorial will walk you through how to use your dashboard on Visa Support Hub.</b>`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/overview/step_0.jpg',
            },
            {
                description: `The Dashboard allows you to view active and inactive cases.<br>To access the Dashboard, Select <b>Case Dashboard</b> at the top of any Visa
                Support Hub page`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/overview/step_1.jpg',
            },
            {
                description: `From here, you can <b>Choose your dashboard view</b> to see either “My Cases,” “All Cases,” (if you have Expanded access) or “Cases I'm copied on”`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/overview/step_2.jpg',
            },
            {
                description: `You can <b>Select filters or search for cases</b> by Status, Topic, Priority, Date Created, Case Owner and BID.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/overview/step_3.jpg',
            },
            {
                description: `You can also <b>search for cases</b> by entering a key word, case number or phrase OR you can also search <b>Search within messages.</b>`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/overview/step_4.jpg',
            },
            {
                description: `The cases matching the filtered items will be displayed.`,
                note: `If you have Standard access, you will only see your cases. If you have Expanded access, you will see all the cases within your organization.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/overview/step_5.jpg',
            },
        ]
    },
    {
        category: CATEGORIES.CaseDashboard,
        categoryDescription: `*** How to use various dashboard tools.`,
        title: 'Case Dashboard Features',
        thumbnailPath: 'assets/images/VSH_assets/how_to_use_dashboard/features/thumbnail.jpg',
        tags: [TAGS.featured, TAGS.popular],
        steps: [
            {
                description: `<b>This tutorial will walk you through the features on your Case Dashboard.</b>`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/features/step_0.jpg',
            },
            {
                description: `You will have great visibility into all your cases through your own dashboard.<br>To access the Dashboard, Select <b>Case Dashboard</b> at the top of any Visa Support Hub page`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/features/step_1.jpg',
            },
            {
                description: `From here, you can:<br>Personalize your dashboard view.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/features/step_2.jpg',
            },
            {
                description: `From here, you can:<br><b>Search</b> cases and refine results
                using <b>filters</b>`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/features/step_3.jpg',
            },
            {
                description: `From here, you can:<br><b>Easily view, sort, or filter by case status.</b>`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/features/step_4.jpg',
            },
            {
                description: `From here, you can:<br><b>Easily see new updates.</b>`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/features/step_5.jpg',
            },
            {
                description: `From here, you can:<br><b>Quickly view case details and messaging with Visa.</b>`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/features/step_6.jpg',
            },
            {
                description: `From here, you can:<br><b>Quickly create a new case.</b>`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/features/step_7.jpg',
            },
            {
                description: `From here, you can:<br><b>Customize your columns view.</b>`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/features/step_8.jpg',
            },
            {
                description: `From here, you can:<br>Select or deselect the columns you want to display or select or deselect <b>All.</b>`,
                note: `Some columns are required and will always display.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/features/step_9.jpg',
            },
            {
                description: `From here, you can:<br><b>Consolidate access for users with multiple Visa Online profiles.</b>`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/features/step_10.jpg',
            },
            {
                description: `From here, you can:<br><b>Quickly generate reports.</b>`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/features/step_11.jpg',
            }
        ]
    },
    {
        category: CATEGORIES.CaseDashboard,
        categoryDescription: `*** How to use various dashboard tools.`,
        title: 'Searching for Cases',
        thumbnailPath: 'assets/images/VSH_assets/how_to_use_dashboard/searching_for_cases/thumbnail.jpg',
        tags: [],
        steps: [
            {
                description: `Searching for cases can be done very simply by making an entry in the Search field.<br><b>This tutorial will walk you through how to search for cases in your case dashboard on Visa Support Hub.</b>`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/searching_for_cases/step_0.jpg',
            },
            {
                description: `To search for a case, enter key words or case numbers in the Search field and press Enter.`,
                note: `The search option includes the ability to search attached messages and emails by selecting the Include messages box.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/searching_for_cases/step_1.jpg',
            },
            {
                description: `If you select any filters, click APPLY to include the selected filters.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/searching_for_cases/step_2.jpg',
            },
            {
                description: `The search results will be listed below.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/searching_for_cases/step_3.jpg',
            },
            {
                description: `You can open and view a case by clicking the Case Number.`,
                note: `You can export the cases by clicking the EXPORT TO EXCEL button and a CSV file will be downloaded.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/searching_for_cases/step_4.jpg',
            },
        ]
    },
    {
        category: CATEGORIES.CaseDashboard,
        categoryDescription: `*** How to use various dashboard tools.`,
        title: 'How to Use, Save and Edit Filters',
        thumbnailPath: 'assets/images/VSH_assets/how_to_use_dashboard/how_to_filters/thumbnail.jpg',
        tags: [TAGS.requested, TAGS.popular, TAGS.new],
        steps: [
            {
                description: `Filters help you refine a search for cases; for instance, you might want to review only cases with Critical priority. You can filter by Status, Topic, Priority, Created (date), Owner, and BID.<br><b>This tutorial will walk you through how to use, save, and edit filters in your case dashboard on Visa Support Hub.</b>`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/how_to_filters/step_0.jpg'
            },
            {
                description: `To use filters, select the drop-down for one or more filters to the right of “Your saved filter sets” tab.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/how_to_filters/step_1.jpg'
            },
            {
                description: `Select or deselect options or leave the default of All.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/how_to_filters/step_2.jpg'
            },
            {
                description: `After making changes to filters, click APPLY.`,
                note: `The Status filter drop-down options are grouped in two, “All Active Statuses” and “All Inactive Statuses.” Make sure to scroll down to see all options in that filter if selecting any.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/how_to_filters/step_3.jpg'
            },
            {
                description: `If you use a certain set of filters often, you can save the filter by clicking the SAVE FILTER SET button.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/how_to_filters/step_4.jpg'
            },
            {
                description: `In the pop-up display, Enter a Filter Name and click the Save button.`,
                note: `The saved filter will be listed in “Your saved filter sets” drop down.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/how_to_filters/step_5.jpg'
            },
            {
                description: `To rename or delete saved filters, Select the drop-down on “Your saved filter sets”.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/how_to_filters/step_6.jpg'
            },
            {
                description: `Click on the pencil symbol next to the name you assigned to a filter.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/how_to_filters/step_7.jpg'
            },
            {
                description: `From the pop-up display, Change the name and click on the SAVE button or click on DELETE FILTER SET and confirm.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/how_to_filters/step_8.jpg'
            },
            {
                description: `To update a saved filter:<br>While one of your filters is already applied to a search, and an additional filtering option is selected, you can update the applied filter by clicking on the UPDATE FILTER SET button.`,
                imagePath: 'assets/images/VSH_assets/how_to_use_dashboard/how_to_filters/step_9.jpg'
            },
        ]
    },

];

