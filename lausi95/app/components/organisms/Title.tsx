import Image from 'next/image';

export type PageTitleProps = {
    subtitle?: string;
};

export default function PageTitle({ subtitle }: PageTitleProps) {
    return (
        <div className="p-4 bg-[#010409] text-sm flex gap-4">
            <div>
                <Image src="/tl95.svg" alt="Logo" height={40} width={40} />
            </div>
            <div className="flex flex-col content-center justify-center">
                <div className="text-gray-400">Tom Lausmann</div>
                <div className="font-bold">{subtitle ?? 'Unknown page'}</div>
            </div>
        </div>
    );
}
