import Image from 'next/image';

export default function Profile() {
  return (
    <section
      id="profile"
      className='mt-32 flex flex-col items-center justify-center gap-6 sm:gap-12 text-left p-5 bg-white">'
    >
      <h1 className="w-full font-bold text-3xl sm:text-4xl underline-offset-3 underline decoration-2">
        Profile
      </h1>
      <div className="sm:flex contents items-start gap-12">
        <Image
          src="/pictures/profile.png"
          alt="プロフィール写真"
          width={300}
          height={300}
          className="rounded-xl"
        ></Image>
        <div className="flex flex-col text-left items-center justify-center gap-6">
          <h2 className="w-full font-semibold text-xl sm:text-2xl">
            原 透真 | Toma Hara
          </h2>
          <div className="-mt-2 sm:mt-0">
            <p>大阪公立大学大学院で情報工学を学んでいます。</p>
            <p>
              技術を使って日常の「困った」を解決するがモットーです。データ収集を自動化するためにスクレイピングのコードを書いたり、カレンダーと連携して課題の期限が近づいたら通知してくれるBotを作ってみたり、要するにサボるために本気を出すタイプの人間です。新しい技術との出会いは、いつも「これで何をサボれるか」から始まります。
            </p>
          </div>
          <nav className="self-end -mt-4">
            <ul className="flex items-center gap-4">
              <li className="flex items-center cursor-pointer">
                <a
                  href="https://github.com/TomaHara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src="/icons/github.svg"
                    alt="GitHub"
                    width={50}
                    height={50}
                    className="w-7 sm:w-9"
                  />
                </a>
              </li>
              <li className="flex items-center cursor-pointer">
                <a
                  href="https://x.com/tomato_mechauma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src="/icons/x.svg"
                    alt="X (Twitter)"
                    width={50}
                    height={50}
                    className="w-8 sm:w-10"
                  />
                </a>
              </li>
              <li className="flex items-center cursor-pointer">
                <a
                  href="mailto:tomaa.hara@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src="/icons/gmail.svg"
                    alt="gmail"
                    width={50}
                    height={50}
                    className="w-9 sm:w-10"
                  />
                </a>
              </li>
              <li className="flex items-center cursor-pointer">
                <a
                  href="https://www.wantedly.com/id/toma_hara"
                  target="wantedly"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src="/icons/Wantedly_Mark_LightBG.svg"
                    alt="GitHub"
                    width={50}
                    height={50}
                    className="w-14 sm:w-16 -ml-2 sm:-ml-1"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
