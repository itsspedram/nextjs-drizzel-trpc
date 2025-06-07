'use client';

import { trpc } from '@/utils/trpc';
export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'client' });
  console.log(hello);
  if (hello.isPending) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello?.data?.greeting}</p>
    </div>
  );
}