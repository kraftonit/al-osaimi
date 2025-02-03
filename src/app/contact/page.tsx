import ContactSection from "@/components/ContactSection";
import Breadcrumb from "@/components/global/Breadcrumb";

export default function Contact() {
    return (
        <>
            <Breadcrumb title="Contact Us" imgUrl="/images/contact-breadcrumb.jpeg" />
            <ContactSection />
        </>
    );
}