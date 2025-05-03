import Image from 'next/image';

export default function Activities() {
  return (
    <section
      id="activities"
      className='mt-20 flex flex-col items-center justify-center gap-6 sm:gap-14 text-left p-5 bg-white">'
    >
      <h1 className="w-full font-bold text-3xl sm:text-4xl underline-offset-3 underline decoration-2">
        Activities
      </h1>
      <article className="sm:flex contents items-center gap-12">
        <Image
          src="/pictures/hackathon_mosaic.png"
          alt="AHs 2025の画像"
          width={320}
          height={300}
          className="sm:order-2 rounded-xl"
        ></Image>
        <div className="sm:hidden -mt-4 self-end text-right text-sm text-gray-500">
          <p>2025年2月22日〜3月8日</p>
          <p>日本マイクロソフト品川本社オフィス</p>
        </div>
        <div className="sm:order-1 sm:mb-0 mb-16 flex flex-col text-left items-center justify-center sm:gap-6 gap-5">
          <p className="self-start text-[#3FABB9] text-sm">#Hackathon</p>
          <h2 className="w-full font-semibold text-xl sm:text-2xl -mt-4">
            ハッカソンへの出場
          </h2>
          <div className="-mt-2 sm:mt-0">
            <p>
              外資就活ドットコム主催のEngineer Guild
              Hackathon（全48チーム・188名参加）に研究室メンバーと出場。「生活のコマッタをテクノロジーで解決する」というテーマのもと、友人間の約束管理を支援するLINE連携サービスを提案・開発しました。日本マイクロソフト品川本社にて決勝発表を行い、3位に入賞しました。
            </p>
            <div className="hidden sm:flex flex-col mt-10 text-right text-sm text-gray-500">
              <p>2025年2月22日〜3月8日</p>
              <p>日本マイクロソフト品川本社オフィス</p>
            </div>
          </div>
        </div>
      </article>
      <article className="sm:flex contents items-center gap-12">
        <Image
          src="/pictures/ahs.png"
          alt="AHs 2025の画像"
          width={300}
          height={300}
          className="rounded-xl"
        ></Image>
        <div className="sm:hidden -mt-4 self-end text-right text-sm text-gray-500">
          <p>2024年3月16日〜20日</p>
          <p>アラブ首長国連邦アブダビ</p>
        </div>
        <div className="flex flex-col text-left items-center justify-center gap-6">
          <p className="self-start text-[#3FABB9] text-sm">#Research</p>
          <h2 className="w-full font-semibold text-xl sm:text-2xl -mt-4">
            国際学会への論文投稿
          </h2>
          <div>
            <p className="-mt-2 sm:mt-0">
              大学の卒業研究として「睡眠が人の意思決定に与える影響」について取り組み、国際学会
              Augmented Humans Conference
              2025に論文を投稿。現地でポスター発表を行い、Best Poster
              Award（最優秀ポスター賞）を受賞しました。
            </p>
            <div className="hidden sm:flex flex-col mt-10 text-right text-sm text-gray-500">
              <p>2024年3月16日〜20日</p>
              <p>アラブ首長国連邦アブダビ</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
