export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type About = {
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Henk Verlinde',
    subtitle: 'Founder & CEO Ventizo',
    description: 'Product developer, entrepreneur, and technical writer with an M.Sc. from Erasmus University Rotterdam, Netherlands.',
    image: {
        src: '/henk-verlinde.jpg',
        alt: 'The Revenge of the Soga Brothers — Utagawa Kunikazu'
    },
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
            text: 'Tags',
            href: '/tags/'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about/'
        },
        {
            text: 'Contact',
            href: '/contact/'
        },
        {
            text: 'Privacy',
            href: '/privacy/'
        },
        {
            text: 'Terms',
            href: '/terms/'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/henkverlinde'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/h-enk'
        },
        {
            text: 'Mastodon',
            href: 'https://fosstodon.org/@henkverlinde'
        }
    ],
    hero: {
        title: '',
        text: "I'm a product developer, entrepreneur, and technical writer with an M.Sc. [in economics and business] from Erasmus University Rotterdam, Netherlands. My goal is to solve real-world business and technology problems by leveraging business analytics, innovation, and experimentation methods.",
        image: {
            src: '/henk-verlinde.jpg',
            alt: 'The Revenge of the Soga Brothers — Utagawa Kunikazu',
            caption: 'The Revenge of the Soga Brothers — Utagawa Kunikazu'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact/'
            }
        ]
    },
    about: {
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact/'
            }
        ]
    },
    subscribe: {
        title: 'Join my email newsletter',
        text: 'Get all my new posts delivered directly to your inbox. Unsubscribe anytime.',
        formUrl: '#'
    },
    postsPerPage: 7,
    projectsPerPage: 7
};

export default siteConfig;
