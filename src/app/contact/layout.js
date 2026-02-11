import PageHeading from '@/components/PageHeading';

export const metadata = {
    title: "Contact-Us",
    description: "Our contact-us page",
};

export default function ContactLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeading >C O N T A C T - U S</PageHeading>
            <div className="py-10">{children}</div>
        </div>
    );
}
