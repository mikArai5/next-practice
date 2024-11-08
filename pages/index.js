import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';

import Header from './components/header';
import Content from './components/content';

export default function Home() {
  let title = "ももも";
  const fetcher = url => fetch(url).then(r => r.json())

  const { data, error } = useSWR(
    '/api/message',
    fetcher
  );
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log({data, error});

  return (
    <Content>
        <Head>
          <title>{title}</title>
        </Head>
        <Header title={title}/>
        <p>{data.message}</p>
        <div>
          <Link href="/about">About</Link>
        </div>
    </Content>
  )
}