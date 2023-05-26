import Link from 'next/link';
import { Navigation } from './Navigation';

export default function Page() {
  const numbers = [];

  for (var i = 1; i <= 100; i++) {
    numbers.push(i);
  }

  return (
    <div>
      <h1>Profile2</h1>
      {numbers.map((a) => {
        console.log(a);
        return (
          <div key={a}>
            {/* dynamic routes */}
            {/* <Link id={String(a)} href={`/profile/subprofile2/#${a}`}>
              {a}
            </Link> */}
          </div>
        );
      })}
      <Navigation />
    </div>
  );
}
