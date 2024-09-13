import { faBook, faHouse, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export type NavPage = "home" | "blog";

export type NavigationProps = {
    page?: NavPage;
};

type NavItem = {
    text: string;
    href: string;
    active: boolean;
    icon: IconDefinition;
};

export default function Navigation({ page }: NavigationProps) {
    const items: NavItem[] = [
        {
            text: 'Home',
            href: '/',
            active: page == 'home',
            icon: faHouse,
        },
        {
            text: 'Blog',
            href: '/blog',
            active: page == 'blog',
            icon: faBook,
        },
    ];

    return (
        <div className="flex bg-[#010409]">
            <div className="p-2 border-b border-gray-700"></div>
            {items.map(item => (
                <Link key={item.href}
                    className={'px-4 py-2 ' + (item.active ? 'border-emerald-300 border-b-2 font-bold' : 'border-gray-700 border-b')}
                    href={item.href}>
                    <div className="flex justify-center items-center gap-4">
                        <div><FontAwesomeIcon icon={item.icon} className="h-[20px]" /></div>
                        <div>{item.text}</div>
                    </div>
                </Link>
            ))}
            <div className="grow border-b border-gray-700"></div>
        </div>
    );
}

