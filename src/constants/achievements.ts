export interface Achievement {
    id: string;
    title: string;
    subtitle: string;
    tag?: string;
    mediaCoverages?: {
        name: string;
        url: string;
    }[];
    isFeatured?: boolean;
}

export const achievementsData: Achievement[] = [
    {
        id: "agri-ignite",
        title: "Agri-IGNITE Accomplishment",
        subtitle: "2nd Place • Competition",
        tag: "Agri-IGNITE",
        isFeatured: true,
        mediaCoverages: [
            {
                name: "Mindanao Sentinel",
                url: "https://themindanaosentinel.com/2025/10/agri-ignite-sparks-tech-driven-future-for-agriculture-in-agusan-del-sur/?fbclid=IwY2xjawPwFh9leHRuA2FlbQIxMABicmlkETFxVEZlaFQzQjJzNHRZVDJCc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrSKqLyjxJnZVx9Yisv5KmHU1ayWS1ECiszr98jnXFbctAyX5exTWIm7FEPx_aem_BnqSDHBGn8hUkVWLhCgvxA"
            },
            {
                name: "Boracay Island News",
                url: "https://www.boracayislandnews.com/agri-ignite-sets-it-students-in-agsur-state-college-aflame-with-agri-innovation-and-creativity/"
            }
        ]
    }
];
