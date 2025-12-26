/**
 * 広告データと広告表示ロジックを管理するスクリプト
 */

// 広告データ定義
const AD_DATA = {
    // A8.net 広告
    "a8_1": {
        id: "a8_1",
        title: "Relliant BATH（リリアント バス）",
        description: "水素×炭酸×エプソムソルトのトリプル処方。極上の温浴体験を自宅で。",
        url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+BPIX2Q+2L6G+ZQV5T",
        category: "入浴剤",
        image: "https://www18.a8.net/0.gif?a8mat=45KNK8+BPIX2Q+2L6G+ZQV5T" // Pixel tracker primarily, placeholder implied if not visible
    },
    "a8_2": {
        id: "a8_2",
        title: "アースコンシャス エプソムソルト",
        description: "国産・最高級グレードのエプソムソルト。追い焚きもOK、無色無臭で使いやすい。",
        url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+E2NWKY+R12+6AC5D",
        category: "入浴剤"
    },
    "a8_3": {
        id: "a8_3",
        title: "イルコルポ ミネラルバスパウダー",
        description: "雪塩と海藻エキス配合。発汗を促し、身体の芯から温める本格派。",
        url: "https://px.a8.net/svt/ejp?a8mat=45KMSG+B89CJ6+31RE+ZSSLT",
        category: "入浴剤"
    },
    "a8_4": {
        id: "a8_4",
        title: "みんなの肌潤風呂",
        description: "ガサガサ・ゴワゴワ肌のためのスキンケア入浴剤。湯船に浸かるだけで全身保湿。",
        url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+EGCVHU+1KO+2Z7YC1",
        category: "スキンケア"
    },
    "a8_5": {
        id: "a8_5",
        title: "Dr Teal's (ティールズ) フレグランスエプソムソルト",
        description: "全米バスケア売上No.1。エッセンシャルオイル配合でリラックス効果抜群。",
        url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+E3URSI+4GRI+HXKQP",
        category: "入浴剤"
    },
    "a8_6": {
        id: "a8_6",
        title: "イルコルポ ミネラルボディクリーム",
        description: "お風呂上がりの保湿に。ミネラル豊富なボディクリームでしっとり肌へ。",
        url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+E5N2LU+31RE+2BF9A9",
        category: "ボディケア"
    },
    "a8_7": {
        id: "a8_7",
        title: "NALC 薬用ミルクローション",
        description: "ヘパリン類似物質配合。顔も体もこれ1本で乾燥対策。",
        url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+EYTB8Y+425O+BZO4H",
        category: "ボディケア"
    },
    "a8_8": {
        id: "a8_8",
        title: "ALOBABY for mom",
        description: "妊娠線ケアクリーム。敏感肌の方や赤ちゃんにも使える優しさ。",
        url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+F006GI+3PSY+ZU2WH",
        category: "ママ・ベビー"
    },
     "a8_9": { id: "a8_9", title: "おすすめ入浴アイテム", description: "毎日のバスタイムを特別にする厳選アイテム。", url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+F1SH9U+1USQ+CDLO1", category: "その他" },
     "a8_10": { id: "a8_10", title: "おすすめバスグッズ", description: "リラックスタイムを格上げする便利グッズ。", url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+EO3ICY+1USQ+25HS3L", category: "その他" },
     "a8_11": { id: "a8_11", title: "バスタイム充実アイテム", description: "お風呂時間をより楽しく快適に。", url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+F2ZCHE+31RE+BXB8X", category: "その他" },
     "a8_12": { id: "a8_12", title: "リラックス・バス用品", description: "疲れを癒やすためのこだわりアイテム。", url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+F467OY+4GDM+TSBE9", category: "その他" },
     "a8_13": { id: "a8_13", title: "お風呂のお供に", description: "快適なバスライフをサポート。", url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+ESUZ76+4GDM+NTZCH", category: "その他" },
     "a8_14": { id: "a8_14", title: "美容・バスケア", description: "お風呂でできる簡単美容ケア。", url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+F5D2WI+5QLS+BZ0Z5", category: "その他" },
     "a8_15": { id: "a8_15", title: "バス・リラクゼーション", description: "心身ともにリフレッシュ。", url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+F5YIIA+53VQ+62U35", category: "その他" },
     "a8_16": { id: "a8_16", title: "おすすめアイテム", description: "詳細をチェック。", url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+FK8X0Y+5LHW+5YZ75", category: "その他" },
     "a8_17": { id: "a8_17", title: "おすすめアイテム", description: "詳細をチェック。", url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+F8XOJ6+2HEW+5YDJSH", category: "その他" },
     "a8_18": { id: "a8_18", title: "おすすめアイテム", description: "詳細をチェック。", url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+G0X1YQ+40T2+6E71D", category: "その他" },
     "a8_19": { id: "a8_19", title: "おすすめアイテム", description: "詳細をチェック。", url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+G69YEQ+4N6C+639IP", category: "その他" },
     "a8_20": { id: "a8_20", title: "おすすめアイテム", description: "詳細をチェック。", url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+G994FM+3D3Q+61C2P", category: "その他" },
     "a8_21": { id: "a8_21", title: "おすすめアイテム", description: "詳細をチェック。", url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+FHV6LU+5S3O+5ZEMP", category: "その他" },
     "a8_22": { id: "a8_22", title: "おすすめアイテム", description: "詳細をチェック。", url: "https://px.a8.net/svt/ejp?a8mat=45KNK8+G8NOTU+5FZU+5Z6WX", category: "その他" },

    // Amazon 広告
    "amz_1": {
        id: "amz_1",
        title: "Amazonギフトカード",
        description: "入浴剤やバスグッズの購入に便利。プレゼントにも最適。",
        url: "https://www.amazon.co.jp/b?node=3131877051&tag=noteshuekika1-22",
        category: "ギフト"
    },
    "amz_2": {
        id: "amz_2",
        title: "Audible（お風呂で聴く読書）",
        description: "防水スピーカーでお風呂読書。月額会員なら聴き放題。",
        url: "https://www.amazon.co.jp/hz/audible/mlp?tag=noteshuekika1-22",
        category: "サービス"
    },
    "amz_3": {
        id: "amz_3",
        title: "Kindle Unlimited",
        description: "お風呂にスマホを持ち込んで読書三昧。200万冊以上が読み放題。",
        url: "https://www.amazon.co.jp/kindle-dbs/hz/signup?tag=noteshuekika1-22",
        category: "サービス"
    }
};

/**
 * 広告カードのHTMLを生成する
 */
function createAdCardHtml(adId) {
    const ad = AD_DATA[adId];
    if (!ad) return '';

    // イメージ画像がない場合はプレースホルダー（または省略）
    // ここではシンプルにアイコンで代用するロジックなども考えられるが、
    // いったんテキスト+背景色等で構成
    
    // トラッキング用ピクセルがあれば追加
    const trackingPixel = ad.url.includes('a8.net') ? `<img src="https://www18.a8.net/0.gif?a8mat=${ad.url.split('a8mat=')[1]}" alt="" border="0" style="width:1px;height:1px;position:absolute;visibility:hidden;">` : '';

    return `
    <a href="${ad.url}" target="_blank" rel="nofollow noopener" class="ad-card group">
        <span class="ad-label">PR</span>
        <div class="ad-content">
            <h3 class="ad-title group-hover:text-pink-500 transition-colors">${ad.title}</h3>
            <p class="ad-description">${ad.description}</p>
            <span class="ad-cta">詳細を見る →</span>
        </div>
        ${trackingPixel}
    </a>
    `;
}

/**
 * 自動的に広告を記事内に挿入する
 * @param {Array<string>} selectedAdIds - この記事で表示したい広告IDのリスト（最大5個）
 */
function insertAds(selectedAdIds) {
    if (!selectedAdIds || selectedAdIds.length === 0) return;

    // 記事本文の要素を取得 (Tailwindのproseクラスがついている想定)
    const prose = document.querySelector('.prose');
    if (!prose) return;

    // H2タグを取得
    const h2Tags = Array.from(prose.querySelectorAll('h2'));
    
    // 挿入位置の計算（H2の後に分散させる）
    // H2が少ない場合は記事末尾などにも配置
    
    let injectedCount = 0;
    
    // 戦略: H2タグの直後に広告を挿入していく
    // H2の数と広告の数（最大5）を考慮してバランス良く配置
    
    selectedAdIds.forEach((adId, index) => {
        if (injectedCount >= 5) return;

        const adHtml = createAdCardHtml(adId);
        const wrapper = document.createElement('div');
        wrapper.innerHTML = adHtml;
        
        // ターゲットにする要素（H2または記事末尾）
        let targetElement;
        
        if (index < h2Tags.length) {
            // H2タグがあればその直後の要素の後に挿入（セクションの区切り）
            // H2の直後は通常Pタグなど。H2の次の次の兄弟要素くらいに入れると自然？
            // ここではH2の直前（セクションの終わり）に入れるか、H2の直後に入れるか。
            // 「H2の直前」＝「前のセクションの終わり」が見やすい。
            // ただし最初のH2の前には入れない（目次の直後になるため、それは別途制御可だが）
            
            // シンプルに「H2タグの直前」に挿入する場合（最初のH2を除く）
            if (index + 1 < h2Tags.length) {
                targetElement = h2Tags[index + 1]; // 2つ目のH2の前、3つ目のH2の前...
                targetElement.parentNode.insertBefore(wrapper, targetElement);
            } else {
                // H2が足りなくなったら最後の要素の後ろ
                prose.appendChild(wrapper);
            }
        } else {
            // H2が足りない場合は記事末尾へ
             prose.appendChild(wrapper);
        }
    });
}

/**
 * 簡易版: 指定されたコンテナIDに広告をレンダリングする
 * HTML側に <div id="ad-slot-1"></div> などがある場合に使用
 */
function renderAdsToSlots(mapping) {
    // mapping = { "ad-slot-1": "a8_1", "ad-slot-2": "amz_1" }
    for (const [slotId, adId] of Object.entries(mapping)) {
        const slot = document.getElementById(slotId);
        if (slot) {
            slot.innerHTML = createAdCardHtml(adId);
        }
    }
}

// 外部から利用可能にする
window.BathCheckAds = {
    insertAds: insertAds,
    renderAdsToSlots: renderAdsToSlots,
    data: AD_DATA
};
