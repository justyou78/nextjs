import Link from 'next/link';

export default function ProfileLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>hello2</nav>
      <Link href='/profile'>subProfile Nav</Link>
      {children}
    </section>
  );
}
