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
      '『暮らしの「まよい」を「よかった」に。』を理念メッセージとして、複数の金融系Webメディア（アフィリエイト - SEO/PPC）のフロントエンド開発・Webデザイン・UI/UX / CVR改善・ブランド構築と反映・リプレイス・保守/運用などを担当してきました。',
    ],
    technologyText: [
      'Next.js / React / TypeScript / TailwindCSS / Sass',
      'HTML / CSS / CSS Modules / Storybook / VRT（reg-suit + storycap） / Prettier / ESLint / Git',
      'Figma / Photoshop / Illustrator',
    ],
    problemText: [
      'CVR改善',
      'サイトブランドの認知度不足',
      'サイト保守性の大きな低下',
    ],
    mainProjectText: ['<b>xxx</b><br>xxxxxx'],
    keyExperienceText: [
      'TailwindCSSでの、CSSリプレイスPJ の完遂',
      'コーディング規約の周知と徹底',
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
      'Ateam-LifeDesign社 で運営している、「将来のお金の不安を解消するための金融知識・情報を提供する」をメッセージとした、ナビナビブランド内の キャッシング比較・情報メディア（SEOアフィリエイト）。',
      'デザイン開発部 の Webデザイナー として所属。<br>主に CVR改善 の目的で、各職能との施策優先度会議を元に、サイト改善施策の遂行（フロントエンドUI実装・デザイン・社内ディレクション）を担当しました。',
    ],
    technologyText: [
      '<b>リプレイス後</b><br>Next.js / React / TypeScript / Emotion / axios / Prettier / ESLint / lint-staged / husky / Git',
      '<b>リプレイス前</b><br>Symfony（PHPフレームワーク） / WordPress（コンテンツ管理システム） / Sass（スタイリング）',
      'Figma / Photoshop / Illustrator',
    ],
    problemText: [
      '<b>Wordpress・Symfony の継続使用</b><br>固有の構成上、社内共通ライブラリ（主にバックエンドの機能）の恩恵を受けることができない。<br>　構成や設定 が老朽化しており、改修には多大な工数がかかる<br>固有の構成上、Wordpressのアップデートが難しい。<br>　アップデートできないことによる、脆弱性に対する攻撃リスク（セキュリティ問題）や Performance悪化 の懸念',
      '<b>その他</b><br>古い技術の継続使用による、人材採用悪化の懸念。<br>CSSのスパゲッティコードの複雑性。<br>PC / SP 幅別デザインの二重管理による運用コストの増大。',
    ],
    mainProjectText: [
      '<b>SEOサイト の リプレイスPJ</b><br>Wordpress・Symfony で運用されていたサイトを、上記の課題解決 を目的として、Next.js / React でリプレイスした PJ',

      '<b>期間</b><br>2020年1月〜2021年1月（※リプレイスPJ以外のタスク も同時並行）<br>　2020年1月〜2020年2月：PJの目的の精査 & 事業側との合意形成 & エンジニアとデザイナーのタスク切り分け<br>　2020年2月〜2020年3月：PJのキックオフ & タスク内容の大枠洗い出し & 工数見積もり<br>　2020年3月〜2020年4月：コーディング規約 と デザインガイドラインの策定 & CSS in JS の選定<br>　2020年5月〜2020年7月：共通ページ の React UI実装<br>　2020年7月〜2020年11月：各種ページ毎の React UI実装<br>　2020年11月〜2020年12月：受け入れテスト（社内 / 社外）& 不具合の修正対応 & Lighthouseスコア改善<br>　2021年1月：リリース対応完了',

      '<b>苦労したこと</b><br>　React の経験はほとんどない状態でしたが、書籍 や 既存コード からキャッチアップし、PJ に貢献できました。<br>　リプレイスするページ数の物量が多かったですが、ページ種別ごとに切り分けて洗い出し、着実に進捗を出せました。<br>　スタイリングの選定 は迷いましたが、CSSライクに記述できる点をメリットとして Emotion を採用しました。',

      '<b>成果</b><br>Next.js / Reactでのリプレイスの効果<br>　社内の共通ライブラリの利用が可能に<br>　セキュリティリスクの低減<br>　モダンな開発環境による開発者体験の向上<br>　サイトのレスポンシブ化による運用コスト削減<br>表示速度改善<br>　トップページ：3s → 1s<br>Lighthouseによるスコア改善（計測可能な主要4項目）<br>　トップページ（リプレイス前）：Performance：68 / Accessibility：67 / Best practices：58 / SEO：78<br>　トップページ（リプレイス後）：Performance：100 / Accessibility：100 / Best practices：100 / SEO：100',
      '<b>その他の成果</b><br>デザイナー組織内で、Reactのメリットや実装方法、Atomic Design の設計方法など を社内共有会 で展開し、社内のデザイナーに対して知見を広める動きで貢献。',
    ],
    keyExperienceText: [
      '難易度の高い大きなPJ の 遂行/完了経験',
      'タスクスケジュールのガントチャート管理',
      'コンポーネント思考によるUI実装',
      'デザインガイドライン / コーディング規約 の作成',
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
