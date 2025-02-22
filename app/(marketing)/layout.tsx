import Footer from "@/components/marketing/Layout/Footer";
import Header from "@/components/marketing/Layout/Header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header />
            {children}
        <Footer />
    </>
  );
}
