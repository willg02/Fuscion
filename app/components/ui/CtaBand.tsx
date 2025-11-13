import Link from 'next/link';
import Container from './Container';
import Section from './Section';
import Heading from './Heading';

type Props = {
  title: string;
  href: string;
  label: string;
};

export default function CtaBand({ title, href, label }: Props) {
  return (
    <Section variant="dark" className="bg-slate-900 border-t border-slate-800">
      <Container className="max-w-3xl text-center">
        <Heading as="h2" size="display2" align="center" className="mb-10 md:mb-12">
          {title}
        </Heading>
        <Link href={href} className="btn text-xl bg-white text-black hover:bg-gray-100 font-medium px-10 py-4 shadow-lg hover:shadow-xl transition-shadow">
          {label}
        </Link>
      </Container>
    </Section>
  );
}
