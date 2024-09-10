export type PageTitleProps = {
    subtitle?: string;
};

export default function PageTitle({ subtitle }: PageTitleProps) {
    return (
        <div className="p-4 bg-[#010409] text-sm">
            <div className="text-gray-500">Tom Lausmann</div>
            <div className="font-bold">{subtitle ?? 'Unknown page'}</div>
        </div>
    );
}
