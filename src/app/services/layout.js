import PageHeading from '@/components/PageHeading';

export const metadata = {
    title: "Services",
    description: "Our Services page",
};

export default function ServicesLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeading >S E R V I C E S</PageHeading>
            <div className="py-10">{children}</div>
        </div>
    );
}
