import Link from "next/link";

export type NavPage = "home" | "blog";

export type NavigationProps = {
    page?: NavPage;
};

type NavItem = {
    text: string;
    href: string;
    active: boolean;
};

export default function Navigation({ page }: NavigationProps) {
    const items: NavItem[] = [
        {
            text: 'Home',
            href: '/',
            active: page == 'home',
        },
        {
            text: 'Blog',
            href: '/blog',
            active: page == 'blog',
        },
    ];

    return (
        <div className="flex bg-[#010409]">
            <div className="p-2 border-b border-gray-700"></div>
            {items.map(item => (
                <Link key={item.href} className={item.active ? 'p-2 border-b-2 border-emerald-300 font-bold' : 'p-2 border-b border-gray-700'} href={item.href}>{item.text}</Link>
            ))}
            <div className="grow border-b border-gray-700"></div>
        </div>
    );
}

