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
    subtitle: 'Founder & CEO, Ventizo',
    description: 'Henk Verlinde is a product developer, entrepreneur, and technical writer with an M.Sc. in Economics and Business from Erasmus University Rotterdam.',
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
        // text: "I'm a product developer, entrepreneur, and technical writer with an M.Sc. [in economics and business] from Erasmus University Rotterdam, Netherlands. My goal is to solve real-world business and technology problems by leveraging business analytics, innovation, and experimentation methods.",
        text: "Henk Verlinde is a product developer, entrepreneur, and technical writer with an M.Sc. in Economics and Business from Erasmus University Rotterdam. He specializes in business model generation, value proposition design, and web development, aiming to solve real-world problems through business analytics and innovation.",
        image: {
            src: '/henk-verlinde.jpg',
            alt: 'The Revenge of the Soga Brothers — Utagawa Kunikazu',
            caption: 'The Revenge of the Soga Brothers — Utagawa Kunikazu'
        },
        actions: [
            {
                text: 'Read More',
                href: '/about/'
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
        title: 'Subscribe to Henk\'s Newsletter',
        text: 'Get tips, technical guides, and best practices. Once a month. Right in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 7,
    projectsPerPage: 7
};

export default siteConfig;
