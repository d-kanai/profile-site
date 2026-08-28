const careers = [
  {
    year: "2026",
    title: "大企業の開発組織立ち上げとFull AI Codingによる新規事業開発",
    body:
      "大企業の開発組織立ち上げに従事。新規事業をFull AI Codingで1人でリードし、開発からリリースまで推進。同時に、組織全体へのXP Practices、AI Agent Codingの普及・推進に従事。",
  },
  {
    year: "2024",
    title: "ToC新規事業のエンジニアマネージャ / Dev Lead",
    body:
      "スタートアップにて3年ほど従事。エンジニアマネージャ / Dev Leadとして0から事業の黒字化まで関わる。Scrum / XPのアイデアを実践しながら、毎日本番デプロイするチームの環境整備・プロセス改善・採用を実現。",
  },
  {
    year: "2020",
    title: "Scrum導入支援とCSD研修の提供",
    body:
      "事業会社でエンジニアとしてScrumを実践しつつ、Scrum Alliance認定 CSD Educator / Trainerライセンスを取得。CSD研修の提供、顧客企業へのScrum導入支援に従事。",
  },
  {
    year: "2016",
    title: "SIerにてウォーターフォール開発をリード",
    body:
      "2年弱のProjectを、約15名規模の開発チームでDev Leadとして設計・実装をリード。",
  },
];

export default function Home() {
  return (
    <main className="sheet" aria-label="プロフィール">
      <section className="profile-head">
        <p className="eyebrow">Profile</p>
        <h1>
          Daiki
          <br />
          Kanai
        </h1>
        <p className="role">
          大企業・スタートアップ・事業会社・SIerでの開発経験を持つ。Waterfallによる大規模開発から、XP
          / Scrumを軸にしたアジャイルな事業開発まで幅広く経験。
        </p>
      </section>

      <section className="career" aria-label="主な経歴">
        {careers.map((career) => (
          <article className="item" key={career.year}>
            <div className="year">{career.year}</div>
            <div>
              <h2>{career.title}</h2>
              <p>{career.body}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
