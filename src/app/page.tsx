import { getWorks } from './lib/firestore';
import Profile from './components/profile';
import Activities from './components/activities';
import Works from './components/works';

// ISRの設定（60秒ごとに再生成）
export const revalidate = 60;

export default async function Home() {
  // ISRでFirestoreからデータを取得
  const works = await getWorks();
  console.log(works);

  return (
    <>
      <main className="mx-auto max-w-5xl flex flex-col items-center justify-center">
        <Profile />
        <Activities />
        <Works works={works} />
      </main>
    </>
  );
}
