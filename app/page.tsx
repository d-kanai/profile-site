const careers = [
  {
    year: "2026",
    title: "大企業の開発組織立ち上げとFull AI Codingによる新規事業開発",
    body:
      "大企業の開発組織立ち上げに従事。新規事業をFull AI Codingで1人でリードし、開発からリリースまで推進。同時に、組織全体へのXP Practices・DORA、AI Agent Codingの普及・推進に従事。",
  },
  {
    year: "2024",
    title: "ToC新規事業のエンジニアマネージャ / Dev Lead",
    body:
      "スタートアップにて3年ほど従事。最大7名のエンジニアマネージャ / Dev Leadとして0から事業の黒字化まで関わる。Scrum / XPのアイデアを実践しながら、毎日本番デプロイするチームの環境整備・プロセス改善・採用を実現。",
  },
  {
    year: "2020",
    title: "Scrum導入支援とCSD研修の提供",
    body:
      "事業会社でエンジニアとしてScrumを実践しつつ、シンガポールのTrainer 2名から推薦状を受け、Scrum Alliance認定 Certified Scrum Developer Educator / Trainerライセンスを取得。CSD研修の提供、顧客企業へのScrum導入支援に従事。計50回・500人以上へ、2026年現在まで定期的にCSD研修の提供を続けている。",
  },
  {
    year: "2016",
    title: "SIerにてウォーターフォール開発をリード",
    body:
      "2年弱のProjectを、約15名規模の開発チームでDev Leadとして設計・実装をリード。",
  },
];

const csdVoices = [
  {
    body:
      "AIを満遍なく利用することができて楽しかった。なんとなく理解していると思っていた部分でも言語化できないことが多々あったが、理論的に順序立てて学習できたことで、なんとなくの理解をしっかり固めることができた。",
  },
  {
    body:
      "Scrum、Agile、XPについて、なぜそれが必要か、どういう旨みがあってそれをやるのかというのが腹落ちできる内容で、より理解が深まりました。またAIを使用する内容だったので、より自分の働き方とリンクさせながら学ぶことができました。",
  },
  {
    body:
      "講義→実践という流れだったので理解しやすかった。AIの実装の質をコントロールするにはTDDが不可欠だなぁと、演習を通じて改めて感じたので、現場でも実践したい。",
  },
  {
    body:
      "全てのイベントや手法が「変化に適応する」という価値観に集約していくことを改めて実感できた。「TDD x AI」の組み合わせによる相乗効果がかなり感じ取れた。",
  },
  {
    body:
      "アジャイルの進め方や思想について、実感を持って理解できるコンテンツだったと思う。AIにコーディングさせるにあたっての便利な部分、困る部分、AIを使うからこそのTDDの重要性を体験できたのは貴重な機会だった。",
  },
  {
    body:
      "AIが使えるこの時代のエンジニアになったからにはAIを使いこなす必要があると感じました。そのために、どんどんAIを使って経験をたくさん積みたいです。",
  },
  {
    body:
      "実際に経験した話をもとに説明していただけたのでとてもわかりやすかったです。考え方についても、解釈しやすいように言い換えたりしてもらえたので、理解が進んだと思います。",
  },
  {
    body:
      "講師の方が過去に実際にあったエピソードやペアプロを交えた説明等、具体的な話＆画面をたくさん共有していただき、理解が深まったと思います。自分では経験のない話や操作が多かったのでとても新鮮でした。",
  },
  {
    body:
      "実際の現場で起こりうること、ありがちなことを交えて説明いただけたことが、自分のチームや業務を振り返るきっかけになりました。一貫した考え方、マインドをところどころで挟んでいただいたので理解が深まりました。",
  },
  {
    body:
      "考え方や取り入れ方など経験や具体例を交えて説明して頂けたことでイメージしやすかったと感じています。経験を語られる際に伝えたいという熱意を感じられ、ここが考えどころと感じました。",
  },
  {
    body:
      "私自身がこれまでWFで開発してきたため、講師目線でのWFと比較してアジャイルの何が良いか、という話を聞き、アジャイルの素晴らしさを理解できました。体系的な知識を教えつつ、講師目線での考え方をたくさん伝えて下さり、話を受け止めやすかったです。",
  },
  {
    body:
      "現状のWFに取り組むことで凝り固まっていた考え方が、アジャイルの考え方を学ぶことで大きく動かされた。一般論に具体例を織り交ぜながらの解説のおかげで、自分の業務の現状とも絡めながら理解を深めることができた。",
  },
  {
    body:
      "これまで一つ一つの手段 / Stepとして認識していたTDDやペアプログラミング、設計、CIといったところが、講義の中で繋がっていったのがとても興味深かった。",
  },
  {
    body:
      "とにかくTDDとペアプロが楽しすぎた。改めて開発の楽しさに気づけたワークだった。もっと開発者としてのレベルを上げたいと思った。",
  },
  {
    body:
      "アジャイル開発はユーザー目線に寄った開発手法だと思っていたが、「現在地・問題点を明らかにする」という開発者目線・チームビルディング目線のメリットもあると知ることができたのが特に大きかった。",
  },
  {
    body:
      "説明が一連の流れになっており、ストーリーチックでとても内容が入ってきやすかったです。説明内容に具体例が多く、現場で扱う想像がしやすかったです。声のトーンも話すスピードもちょうど良く、とても聞き取りやすかったです。",
  },
];

export default function Home() {
  return (
    <main className="sheet" aria-label="プロフィール">
      <section className="profile-head">
        <div className="profile-copy">
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
        </div>
        <div className="profile-photo">
          <img src="/profile-photo-cropped.png" alt="Daiki Kanai" />
        </div>
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

      <section className="voices" aria-label="CSD研修受講者の声">
        <div className="section-head">
          <p className="eyebrow">CSD Training</p>
          <h2>CSD研修受講者の声</h2>
        </div>
        <div className="voice-list">
          {csdVoices.map((voice, index) => (
            <article className="voice" key={voice.body}>
              <div className="voice-number">{String(index + 1).padStart(2, "0")}</div>
              <p>“{voice.body}”</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
