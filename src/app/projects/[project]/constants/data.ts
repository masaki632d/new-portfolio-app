export const SECTION_TITLES = {
  OVERVIEW: 'OverView',
  TECHNOLOGY: 'Technology',
  PROBLEM: 'Problem',
  MAIN_PROJECT: ' Main Project',
  KEY_EXPERIENCE: 'Key Experience',
} as const

export const projectsData = [
  {
    id: 1,
    title: 'イーデス(SEO)',
    slug: 'edesu',
    image: '/projects/edesu.png',
    name: 'Ateam-LifeDesign',
    projectUrl: 'https://www.a-tm.co.jp/top/',
    overviewText: [
      'Ateam-LifeDesign社 で運営している、『暮らしの「まよい」を「よかった」に。』を理念メッセージとした、イーデスブランドとしての 金融商品比較・情報メディア（SEOアフィリエイト）',
      'デザイン開発部 の Developmentデザイナー として所属。<br>主に CVR改善 の目的で、各職能との施策優先度会議を元に、フロントエンド開発・Webデザイン・UI/UX / CVR改善・TailwindCSSへのリプレイス・VIとブランド構築のサイトへの反映・保守/運用 などを担当しました。',
    ],
    technologyText: [
      'Next.js / React / TypeScript / TailwindCSS / CSS Modules(※一部の機能レイアウトで使用)',
      'Storybook / VRT（reg-suit + storycap） / GraphQL / MSW / Recharts / Jest / Prettier / ESLint / Docker / Git',
      'Figma / Photoshop / Illustrator',
    ],
    problemText: [
      '<b>SEOサイトの検索順位向上・CVR改善</b><br>Googleに評価されるためのコンテンツとして、E-E-A-T「Experience（経験）/ Expertise（専門性）/ Authoritativeness（権威性）/ Trustworthiness（信頼性）」を考慮し、主に 新規コンテンツ制作 によって対応',
      '<b>CSS設計不全によるサイト保守性の大幅な低下</b><br>PJ初期段階では小規模なサービスを想定しており、事業としての初速を出すため、既存サイトの構成をテンプレートとして横展開。サイト運用していく中で規模が大きくなり、CSSにおける設計不全が原因で、リリース時の表示崩れが多発。<br>具体的な問題としては、コンポーネントによって CSS Modulesのスタイル と プレーンなCSSクラス を混在させて使用しており、CSSの二重読み込み や 詳細度の複雑性が高くなり、不安定な状態に陥っていた。',
    ],
    mainProjectText: [
      '<b>① 証券領域 - IPO情報コンテンツPJ（新規コンテンツ制作）</b><br>制作期間：2023年2月〜2023年7月<br>詳細内容：<a className="underline" href="https://prtimes.jp/main/html/rd/p/000002325.000001348.html" target="_blank" rel="noopener noreferrer">『PR TIMES：注目のIPO銘柄が一目でわかる！専門家の初値評価が確認できるIPO情報コンテンツ』</a>',

      '<b>② 証券領域 - 投資信託積立シミュレーションPJ（新規コンテンツ制作）</b><br>制作期間：2022年2月〜2022年7月<br>詳細内容：<a className="underline" href="https://prtimes.jp/main/html/rd/p/000002131.000001348.html" target="_blank" rel="noopener noreferrer">『PR TIMES：投資信託の選び方から購入方法までサポートするナビナビ積立シミュレーションコンテンツ』</a>',

      '<b>③ TailwindCSSリプレイスPJ</b><br>制作期間：2022年8月〜2023年1月<br>CSS Modules / プレーンなCSSクラス で運用されていたサイトを、負債解消の目的で TailwindCSS にリプレイスした PJ',

      '<b>苦労したこと</b><br>TailwindCSSのインライン記法に対する慣れと、既存スタイルの再現。<br>リプレイスするページ数の物量が多かったですが、ページ種別ごとに切り分けて洗い出し、着実に進捗を出せました。',

      '<b>成果</b><br>作成したコーディング規約の運用 と TailwindCSSへのリプレイスによって、CSSの二重読み込みの負債が解消。<br>表示崩れによる機会損失の回避・開発運用コスト削減・不要CSS削減によるPerformance改善 に繋がりました。',
    ],
    keyExperienceText: [
      'Next.js / Reactなどのモダンフロントエンド技術の経験',
      'TailwindCSS での CSSリプレイスPJ の遂行/完了経験',
      'コーディング規約の作成と周知',
      'storycap + reg-suit による StorybookベースのVRT',
    ],
  },
  {
    id: 2,
    title: 'ナビナビキャッシング(SEO)',
    slug: 'navinavi-seo',
    image: '/projects/navinavi_seo.png',
    name: 'Ateam-LifeDesign',
    projectUrl: 'https://a-cashing.com/',
    overviewText: [
      'Ateam-LifeDesign社 で運営している、「将来のお金の不安を解消するための金融知識・情報を提供する」をメッセージとした、ナビナビブランド内の キャッシング比較・情報メディア（SEOアフィリエイト）',
      'デザイン開発部 の Webデザイナー として所属。<br>主に CVR改善 の目的で、各職能との施策優先度会議を元に、サイト改善施策の遂行（フロントエンドUI実装・デザイン・社内ディレクション）を担当しました。',
    ],
    technologyText: [
      '<b>リプレイス後</b><br>Next.js / React / TypeScript / Emotion / axios / Prettier / ESLint / lint-staged / husky / Git<br>バックエンドは Ruby on Rails の API構築',
      '<b>リプレイス前</b><br>WordPress（コンテンツ管理システム） / Sass（スタイリング）<br>バックエンドは Symfony（PHPフレームワーク）',
      'Figma / Photoshop / Illustrator',
    ],
    problemText: [
      '<b>Wordpress・Symfony を継続使用した際の問題</b><br>固有の構成の都合上、社内共通ライブラリの恩恵を受けることができず、またWordpressのアップデートが難しい。<br>アップデートできないことによる、脆弱性に対する攻撃リスク（セキュリティ問題）や Performance悪化 の懸念がある。<br>また、構成や設定 が老朽化しており、改修するためには多大な工数がかかる。',
      '<b>その他の問題</b><br>CSSのスパゲッティコードの複雑性。<br>PC / SP 幅別デザインの二重管理による運用コストの増大。<br>古い技術の継続使用による、人材採用悪化の懸念。',
    ],
    mainProjectText: [
      '<b>SEOサイトのReact⼤規模リプレイス & Lighthouseスコア改善 PJ</b><br>Wordpress・Symfony で運用されていたサイトを、上記の課題解決 を目的として Next.js / React でリプレイスし、Lighthouseスコア改善も行った PJ（※並行して、リプレイスPJ以外のタスクも対応）',

      '<b>期間とスケジュール</b><br><b>[2020年1月〜2021年1月]</b><br>2020年1月〜2020年2月：PJの目的の精査 & 事業側との合意形成 & エンジニアとデザイナーのタスク切り分け<br>2020年2月〜2020年3月：PJのキックオフ & タスク内容の大枠洗い出し & 工数見積もり<br>2020年3月〜2020年4月：コーディング規約 と デザインガイドラインの策定 & CSS in JS の選定<br>2020年5月〜2020年7月：共通ページ の React UI実装<br>2020年7月〜2020年11月：各種ページ毎の React UI実装<br>2020年11月〜2020年12月：受け入れテスト（社内 / 社外）& 不具合の修正対応 & Lighthouseスコア改善<br>2021年1月〜2021年1月：リリース対応完了',

      '<b>苦労したこと</b><br>React の経験はほとんどない状態でしたが、書籍 や 既存コード からキャッチアップし、PJ に貢献できました。<br>リプレイスするページ数の物量が多かったですが、ページ種別ごとに切り分けて洗い出し、着実に進捗を出せました。<br>スタイリングの技術選定 は迷いましたが、2020年当時の CSS in JS としての使⽤実績 と 既存のデザイナーがCSSライクに記述できる点を一番のメリットとして、Emotion を採用しました。',

      '<b>成果</b><br><b>[Next.js / Reactでのリプレイスの効果]</b></b><br>社内の共通ライブラリの利用が可能に<br>セキュリティリスクの低減<br>サイトのレスポンシブ化で運用コストを1/2に削減<br>モダンな開発環境による開発者体験の向上<br><br><b>[表示速度改善]</b><br>トップページ：3s → 1s<br><br><b>[Lighthouseスコア改善]</b><br>トップページ (リプレイス前)：Performance：64pt / Accessibility：76pt / Best practices：64pt / SEO：83pt<br>トップページ (リプレイス後)：Performance：86pt / Accessibility：100pt / Best practices：95pt / SEO：100pt',
      '<b>その他の成果</b><br>デザイナー組織内で、Reactのメリットや実装方法、Atomic Design の設計方法などを社内共有会 で展開し、社内のデザイナーに対して知見を広める動きで貢献。',
    ],
    keyExperienceText: [
      '難易度と規模の大きいPJ の 遂行/完了経験',
      'タスクスケジュールのガントチャート管理',
      'デザインガイドライン / コーディング規約 の作成',
      'モダンなフロントエンド開発の経験（Next.js / React / TypeScript / Emotion）',
      'コンポーネント思考によるUI実装',
      'Lighthouseスコア改善のノウハウとスキル',
      'レビュー文化がある環境での レビュイー / レビュワー経験',
    ],
  },
  {
    id: 3,
    title: 'お金借りる？(SEO)',
    slug: 'karireru',
    image: '/projects/okane_kariru.png',
    name: 'W-ENDLESS',
    projectUrl: 'https://www.karireru.com/',
    overviewText: [
      'W-ENDLESS社 で運営していた、消費者金融の利用者 からの口コミ・審査データを元に、最適な商品を探せるカードローン比較メディア。<br>月間PV（ページの閲覧数）：約20万回規模の、SEOアフィリエイトサイト',
      'メディア課 の Webデザイナー として所属。<br>Webデザイナー / フロントエンドエンジニア / Webディレクターとして、Webサイト制作全般を担当しました。<br>具体的には、Performance改善・コーディング実装・UI/UX・CVR/SEO改善 を実施。<br>その他、社内 / 外注ディレクション・企画（施策）など。',
    ],
    technologyText: [
      'Wordpress / PHP / SQL / jQuery / HTML / CSS / Sass / JavaScript / Git / AWS S3 / Google Analytics / Google Search Console / Ahrefs',
      'Photoshop / Illustrator',
    ],
    problemText: [
      'ページ表示速度の改善',
      'Google検索順位向上',
      'コンテンツ・導線の改善',
    ],
    mainProjectText: [
      '<b>ページ表示速度の改善</b><br>カードローン商材 の SEO比較メディアとして、Google検索での表示順位 が CVR/売上 に直結するため、最優先課題 として ページ速度の改善 が必要でした。<br>Webサイトの権利譲渡後にサイト内を分析したところ、Wordpress や PHP のバージョン が古すぎることによるページ表示速度の大幅な低下 が見られたため、当時の最新バージョンにバージョンアップするための改善を行いました。<br>（調査 / Wordpressプラグインの見直し / PHPの記述方法改善 / J-Stream社 の CDN（Content Delivery Network）サービス導入 / さくらサーバー から AWS へのインフラ環境移行準備（外部パートナーと連携）など）<br>上記の施策を行い、トップページについては、表示完了に 約8s かかっていたものの、約1s に短縮することに成功。',
      '<b>Google検索順位向上のための、コンテンツ・導線の改善</b><br>「カードローン 口コミ」という検索キーワードでGoogle順位を狙うはずが、「カードローン 審査」などのキーワードも取りに行こうとして結果的に検索順位が下がっていると仮説。<br>404ページのリダイレクト対応、不要ページやコンテンツの削除（noindex）、Mierucaツールの分析に基づくコンテンツの構成順序の変更などを行い、狙ったキーワードの検索順位向上に貢献しました。',
      '<b>その他、保守/運用タスク</b>',
    ],
    keyExperienceText: [
      '内部SEOを意識した、Googleとユーザーから評価されるWebサイト制作',
      'HTML5/CSS3を用いたセマンティックなコーディング',
      '外部パートナーとの連携',
    ],
  },
  {
    id: 4,
    title: 'JRおでかけネット',
    slug: 'odekake-net',
    image: '/projects/odekake_net.png',
    name: 'Root-Sea',
    projectUrl: 'https://www.jr-odekake.net/',
    overviewText: [
      'Root-Sea社 で運営していた、旅客鉄道会社の観光情報サイトの「JRおでかけネット」。<br>北陸・近畿・中国地方の大部分を営業エリアとするJR西日本の、それぞれの地域の観光情報や列車時間などの情報を提供するポータルサイト。',
      'Web事業部 の Webデザイナー として所属。<br>PV数の獲得・改善 を目的とし、毎月のキャンペーン施策を元に、新規コンテンツ制作、Webサイト制作・保守運用（デザインからコーディングまで）、メルマガ制作 などを一貫して担当しました。<br>また、クライアント案件として、新規のWebサイト制作なども担当。',
    ],
    technologyText: [
      'Wordpress / PHP / jQuery / Git / Gulp / HTML / CSS / Sass / JavaScript',
      'Photoshop / Illustrator',
    ],
    problemText: ['ポータルサイトのPV数向上', '新規クライアントの利益向上'],
    mainProjectText: [
      '<b>キャンペーン施策に基づく、新規コンテンツ制作</b>',
      '<b>新規クライアントのWebサイト制作</b>',
      '<b>その他、保守/運用タスク</b><br>レギュレーションに沿った、ポータルサイト制作・更新業務・メルマガ運用など',
    ],
    keyExperienceText: [
      '大手クライアント特有のデザイン・コーディングルールを考慮しながらの、大規模サイトの改修・新規コンテンツ制作',
      '制作会社の中でのルールや仕組み化',
      'ユーザー目線に沿った情報の本質が伝わりやすいコンテンツ制作',
      '新規クライアントのWebサイト制作',
      'Gulp などのタスクランナーによるコーディングの仕組み化・自動化・効率化',
      'コンポーネント思考によるUIパーツの管理方法',
    ],
  },
  {
    id: 5,
    title: '医療ワーカー',
    slug: 'iryo-worker',
    image: '/projects/iryo_worker.png',
    name: 'Media-Made',
    projectUrl: 'https://iryouworker.com/search/',
    overviewText: [
      'Media-Made社 で運営していた、「医療・看護職」を専門とした求人情報・転職サイト。<br>求職者 と 求人企業 をマッチングさせるためのオンラインプラットフォームであり、看護師・准看護師・助産師・保健師など をメインに取り扱っている。<br>（※現在は「看護師ワーカー」に名称変更されている様子）',
      'Web事業部 の Webデザイナー として所属。<br>会員登録数の改善の目的で、求職者や営業からの要望を元に、サイト改善施策をディレクターやプログラマーと打ち合わせし、施策の遂行（デザインからコーディングまで）を一貫して担当しました。<br>また、施策によってはWebディレクターとして社内ディレクションを担当。',
    ],
    technologyText: [
      'Wordpress / CakePHP / jQuery /  HTML / CSS / Sass / JavaScript / Git / Subversion',
      'Photoshop / Illustrator / Fireworks',
    ],
    problemText: ['サイトの会員登録数の改善', '自社の人材採用'],
    mainProjectText: [
      '<b>コンテンツ・導線の改善</b><br>課題の改善を目的として、サイトの改善施策（ページ内の動線改善、見辛いコンテンツのUI/UX改善 や 画像の最適化など）を担当。',
      '<b>採用サイト制作</b><br>自社の新卒・中途社員採用を目的とした採用サイトを、Wordpressでデザインからコーディングまで一貫して制作（※現在はサイト閉鎖）。',
      '<b>その他、保守/運用タスク</b><br>サイトの新規コンテンツ制作。その他、サイトの保守・運用業務など',
    ],
    keyExperienceText: [
      '社会人・Webデザイナーとしての基礎',
      'ざまざまな役割の経験（デザイナー・コーダー・社内ディレクション）',
      'ユーザー（求職者・営業職）にとって使いやすいサイトにするための、制作ノウハウ',
      '成果や効率性 を重視したコンテンツ・デザイン制作',
      'Gitによる複数人でのチーム開発',
      '医療系サービス特有のドメイン知識 の獲得',
    ],
  },
]
