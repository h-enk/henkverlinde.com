import hero from '../assets/images/anton-maksimov-5642-su-68CW-bC_5Pk-unsplash.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://henkverlinde.com',
    domain: 'henkverlinde.com',
    /*
    avatar: {
        src: avatar,
        alt: 'Ethan Donovan'
    },
    */
    title: 'Henk Verlinde',
    subtitle: 'Digital Innovation Lead',
    description: 'Henk Verlinde — Digital Innovation Lead building open-source tools and practical digital solutions. Explore my work, projects, and latest insights.',
    /*
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    */
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects/'
        },
        {
            text: 'Blog',
            href: '/blog/'
        },
        {
            text: 'About',
            href: '/about/'
        },
        {
            text: 'Contact',
            href: '/contact/'
        }
    ],
    footerNavLinks: [
        {
            text: 'Privacy Policy',
            href: '/privacy/'
        },
        {
            text: 'Terms of Service',
            href: '/terms/'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/h-enk'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/henkverlinde'
        },
        /*
        {
            text: 'Mastodon',
            href: 'https://fosstodon.org/@henkverlinde'
        }
        */
    ],
    hero: {
        title: 'Innovation with impact',
        /*
        text: "**Henk Verlinde** is the Founder & CEO and Digital Innovation Lead at Ventizo, building open-source tools and digital solutions that empower developers and organizations. With a background in international banking and an MSc in Economics and Business, he turns ideas into practical, future-ready innovation.",
        */
        text: "I'm the Founder & CEO at <a href=\"https://ventizo.com/\">Ventizo</a>, where I build open-source tools and digital solutions that empower developers and organizations. With a background in international banking and an MSc in Economics and Business, I focus on turning ideas into practical, future-ready innovation.",
        image: {
            src: hero,
            alt: 'Abstract black and white light painting with curved and vertical streaks on a dark background.'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact/'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Get the monthly update',
        text: 'One email. Insights on digital innovation and open-source tools. No noise.',
        form: {
            action: '/newsletter/success/',
        }
    },
    announcement: {
        enabled: true,
        text: 'Ventizo is closing — Thulite continues',
        link: {
            text: 'Read more',
            href: 'https://ventizo.com/news/closing-ventizo-personal-note/'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8,
    defaultEmail: "support@henkverlinde.com"
};

export default siteConfig;
