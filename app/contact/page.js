import ContactForm from "@/components/ContactForm";
import Container from "@/components/container";

export default function Contact() {
  return (
    <Container>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Contact
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a here to help.</p>
      </div>

      <div className="grid my-10 md:grid-cols-2">
        <div className="my-10">
          <h2 className="text-2xl font-semibold dark:text-white">Ostad</h2>
          <p className="max-w-sm mt-5">
            Have something to say? We are here to help. Fill up the form or send
            email or call phone.
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
