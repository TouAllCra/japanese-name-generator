console.log("脚本开始加载");

// 扩充姓氏数据库
const largeSurnameDatabase = [
  { kanji: "佐藤", romaji: "Sato", meaning: "助左卫门,佐助", frequency: "高", origin: "农业", region: "东北" },
  { kanji: "鈴木", romaji: "Suzuki", meaning: "铃木,铃之木", frequency: "高", origin: "工匠", region: "关东" },
  { kanji: "高橋", romaji: "Takahashi", meaning: "高处的桥", frequency: "高", origin: "地理", region: "全国" },
  { kanji: "田中", romaji: "Tanaka", meaning: "田地中间", frequency: "高", origin: "农业", region: "全国" },
  { kanji: "渡辺", romaji: "Watanabe", meaning: "渡边,渡部", frequency: "高", origin: "地理", region: "关东" },
  { kanji: "伊藤", romaji: "Ito", meaning: "伊予地方的藤原氏", frequency: "高", origin: "贵族", region: "中部" },
  { kanji: "山本", romaji: "Yamamoto", meaning: "山的根部", frequency: "高", origin: "地理", region: "全国" },
  { kanji: "中村", romaji: "Nakamura", meaning: "中间的村", frequency: "高", origin: "地理", region: "全国" },
  { kanji: "小林", romaji: "Kobayashi", meaning: "小树林", frequency: "高", origin: "地理", region: "全国" },
  { kanji: "加藤", romaji: "Kato", meaning: "加入藤原氏", frequency: "高", origin: "贵族", region: "全国" },
  { kanji: "吉田", romaji: "Yoshida", meaning: "吉祥的田地", frequency: "高", origin: "农业", region: "全国" },
  { kanji: "山田", romaji: "Yamada", meaning: "山中的田地", frequency: "高", origin: "农业", region: "全国" },
  { kanji: "佐々木", romaji: "Sasaki", meaning: "小竹", frequency: "中", origin: "植物", region: "东北" },
  { kanji: "山口", romaji: "Yamaguchi", meaning: "山口", frequency: "中", origin: "地理", region: "中国" },
  { kanji: "松本", romaji: "Matsumoto", meaning: "松树根部", frequency: "中", origin: "植物", region: "中部" },
  { kanji: "井上", romaji: "Inoue", meaning: "井的上方", frequency: "中", origin: "地理", region: "关西" },
  { kanji: "木村", romaji: "Kimura", meaning: "木村", frequency: "中", origin: "地理", region: "全国" },
  { kanji: "林", romaji: "Hayashi", meaning: "森林", frequency: "中", origin: "地理", region: "全国" },
  { kanji: "斎藤", romaji: "Saito", meaning: "斎藤", frequency: "中", origin: "贵族", region: "东北" },
  { kanji: "清水", romaji: "Shimizu", meaning: "清澈的水", frequency: "中", origin: "地理", region: "全国" },
  { kanji: "源", romaji: "Minamoto", meaning: "源氏", frequency: "低", origin: "贵族", region: "全国", historicalSignificance: "平安时代著名氏族" },
  { kanji: "平", romaji: "Taira", meaning: "平氏", frequency: "低", origin: "贵族", region: "全国", historicalSignificance: "平安时代著名氏族" },
  { kanji: "藤原", romaji: "Fujiwara", meaning: "藤原氏", frequency: "低", origin: "贵族", region: "全国", historicalSignificance: "平安时代最有权势的氏族" },
  { kanji: "北条", romaji: "Hojo", meaning: "北条氏", frequency: "低", origin: "武士", region: "关东", historicalSignificance: "镰仓幕府的实际统治者" },
  { kanji: "徳川", romaji: "Tokugawa", meaning: "德川氏", frequency: "低", origin: "武士", region: "关东", historicalSignificance: "江户幕府的创立者" },
];

// 扩充名字数据库
const largeGivenNameDatabase = {
  male: [
    { kanji: "大翔", romaji: "Hiroto", meaning: "宽广飞翔", popularity: "高", characteristics: ["现代", "活力"], socialClass: "中产" },
    { kanji: "蓮", romaji: "Ren", meaning: "莲花", popularity: "高", characteristics: ["优雅", "纯洁"], socialClass: "中产" },
    { kanji: "悠太", romaji: "Yuta", meaning: "悠闲,宽广", popularity: "中", characteristics: ["平和", "宽容"], socialClass: "中产" },
    { kanji: "颯太", romaji: "Sota", meaning: "爽快,矫健", popularity: "中", characteristics: ["活力", "阳光"], socialClass: "中产" },
    { kanji: "樹", romaji: "Itsuki", meaning: "树木", popularity: "高", characteristics: ["坚强", "成长"], socialClass: "中产" },
    { kanji: "大和", romaji: "Yamato", meaning: "日本的古称", popularity: "中", characteristics: ["传统", "爱国"], socialClass: "上层" },
    { kanji: "陽斗", romaji: "Haruto", meaning: "阳光,斗志", popularity: "高", characteristics: ["积极", "勇敢"], socialClass: "中产" },
    { kanji: "海斗", romaji: "Kaito", meaning: "海洋,斗志", popularity: "中", characteristics: ["广阔", "进取"], socialClass: "中产" },
    { kanji: "翔太", romaji: "Shota", meaning: "翱翔,太阳", popularity: "中", characteristics: ["活力", "光明"], socialClass: "中产" },
    { kanji: "拓海", romaji: "Takumi", meaning: "开拓,海洋", popularity: "中", characteristics: ["进取", "广阔"], socialClass: "中产" },
    { kanji: "一郎", romaji: "Ichiro", meaning: "第一个儿子", popularity: "低", characteristics: ["传统", "长子"], socialClass: "上层" },
    { kanji: "健太", romaji: "Kenta", meaning: "健康,强壮", popularity: "中", characteristics: ["健康", "活力"], socialClass: "中产" },
    { kanji: "誠", romaji: "Makoto", meaning: "诚实", popularity: "中", characteristics: ["诚实", "正直"], socialClass: "中产" },
    { kanji: "隆太", romaji: "Ryuta", meaning: "隆盛,太阳", popularity: "低", characteristics: ["繁荣", "光明"], socialClass: "上层" },
    { kanji: "勇人", romaji: "Hayato", meaning: "勇敢的人", popularity: "中", characteristics: ["勇敢", "坚强"], socialClass: "中产" },
    { kanji: "源義経", romaji: "Minamoto no Yoshitsune", meaning: "源氏的义经", popularity: "低", characteristics: ["武士", "传奇"], socialClass: "上层", era: "平安" },
    { kanji: "武蔵", romaji: "Musashi", meaning: "武藏", popularity: "低", characteristics: ["武士", "剑术"], socialClass: "中层", era: "江户" },
    { kanji: "慶喜", romaji: "Yoshinobu", meaning: "庆贺喜悦", popularity: "低", characteristics: ["传统", "政治"], socialClass: "上层", era: "江户" },
  ],
  female: [
    { kanji: "さくら", romaji: "Sakura", meaning: "樱花", popularity: "高", characteristics: ["优雅", "美丽"], socialClass: "中产" },
    { kanji: "美咲", romaji: "Misaki", meaning: "美丽绽放", popularity: "高", characteristics: ["美丽", "活力"], socialClass: "中产" },
    { kanji: "陽菜", romaji: "Hina", meaning: "向阳的菜", popularity: "高", characteristics: ["阳光", "成长"], socialClass: "中产" },
    { kanji: "七海", romaji: "Nanami", meaning: "七个海洋", popularity: "中", characteristics: ["广阔", "神秘"], socialClass: "中产" },
    { kanji: "心愛", romaji: "Kokoa", meaning: "心中的爱", popularity: "中", characteristics: ["温柔", "爱心"], socialClass: "中产" },
    { kanji: "優花", romaji: "Yuka", meaning: "优雅的花", popularity: "中", characteristics: ["优雅", "美丽"], socialClass: "中产" },
    { kanji: "彩乃", romaji: "Ayano", meaning: "彩色的", popularity: "中", characteristics: ["多彩", "活泼"], socialClass: "中产" },
    { kanji: "葵", romaji: "Aoi", meaning: "葵花", popularity: "高", characteristics: ["高贵", "坚强"], socialClass: "上层" },
    { kanji: "結衣", romaji: "Yui", meaning: "结合,衣服", popularity: "高", characteristics: ["和谐", "温柔"], socialClass: "中产" },
    { kanji: "莉子", romaji: "Riko", meaning: "茉莉花", popularity: "中", characteristics: ["纯洁", "优雅"], socialClass: "中产" },
    { kanji: "千代", romaji: "Chiyo", meaning: "千代", popularity: "低", characteristics: ["长寿", "传统"], socialClass: "上层" },
    { kanji: "舞", romaji: "Mai", meaning: "舞蹈", popularity: "中", characteristics: ["优雅", "艺术"], socialClass: "中产" },
    { kanji: "美緒", romaji: "Mio", meaning: "美丽的绳子", popularity: "中", characteristics: ["美丽", "连结"], socialClass: "中产" },
    { kanji: "香織", romaji: "Kaori", meaning: "香气,织物", popularity: "中", characteristics: ["芳香", "细腻"], socialClass: "中产" },
    { kanji: "真央", romaji: "Mao", meaning: "真实的中心", popularity: "中", characteristics: ["真诚", "核心"], socialClass: "中产" },
    { kanji: "紫式部", romaji: "Murasaki Shikibu", meaning: "紫色的官职", popularity: "低", characteristics: ["文学", "优雅"], socialClass: "上层", era: "平安" },
    { kanji: "お龍", romaji: "Oryu", meaning: "龙", popularity: "低", characteristics: ["强势", "传奇"], socialClass: "中层", era: "江户" },
    { kanji: "篤姫", romaji: "Atsuhime", meaning: "忠诚的公主", popularity: "低", characteristics: ["高贵", "政治"], socialClass: "上层", era: "江户" },
  ]
};

// 日本历史时期及其特征
const historicalPeriods = [
  { name: "平安", yearRange: "794-1185", characteristics: ["优雅", "文学"], namingTrends: ["长名", "汉字复杂"], socialStructure: "贵族社会", namingRules: ["贵族常用长名，如'藤原道長'", "女性名字常用优雅的自然意象，如'紫'、'花'", "避讳天皇名讳"], namingTaboos: ["平民不得使用与贵族相同的名字", "避免使用不吉利的字，如'死'、'病'"] },
  { name: "鎌倉", yearRange: "1185-1333", characteristics: ["武士", "简朴"], namingTrends: ["武士名", "简单"], socialStructure: "武士统治", namingRules: ["武士名字常用简单的自然意象", "避讳天皇名讳"], namingTaboos: ["平民不得使用与贵族相同的名字", "避免使用不吉利的字，如'死'、'病'"] },
  { name: "室町", yearRange: "1336-1573", characteristics: ["艺术", "文化"], namingTrends: ["艺术名", "雅号"], socialStructure: "武士与贵族并存", namingRules: ["武士名字常用简单的自然意象", "贵族名字常用雅号"], namingTaboos: ["平民不得使用与贵族相同的名字", "避免使用不吉利的字，如'死'、'病'"] },
  { name: "戦国", yearRange: "1467-1615", characteristics: ["战争", "力量"], namingTrends: ["强势名", "军事相关"], socialStructure: "群雄割据", namingRules: ["武士名字常用简单的自然意象", "贵族名字常用雅号"], namingTaboos: ["平民不得使用与贵族相同的名字", "避免使用不吉利的字，如'死'、'病'"] },
  { name: "江戸", yearRange: "1603-1868", characteristics: ["传统", "封建"], namingTrends: ["传统名", "地名相关"], socialStructure: "严格的等级制度", namingRules: ["武士名字常用简单的自然意象", "贵族名字常用雅号"], namingTaboos: ["平民不得使用与贵族相同的名字", "避免使用不吉利的字，如'死'、'病'"] },
  { name: "明治", yearRange: "1868-1912", characteristics: ["现代化", "西化"], namingTrends: ["新式名", "西方影响"], socialStructure: "废除武士阶级", namingRules: ["现代名字常用西方名字", "避讳天皇名讳"], namingTaboos: ["避免使用不吉利的字，如'死'、'病'"] },
  { name: "大正", yearRange: "1912-1926", characteristics: ["民主", "自由"], namingTrends: ["自由名", "个性化"], socialStructure: "新兴中产阶级", namingRules: ["现代名字常用西方名字", "避讳天皇名讳"], namingTaboos: ["避免使用不吉利的字，如'死'、'病'"] },
  { name: "昭和", yearRange: "1926-1989", characteristics: ["战争", "复兴"], namingTrends: ["爱国名", "复古名"], socialStructure: "战后重建", namingRules: ["现代名字常用西方名字", "避讳天皇名讳"], namingTaboos: ["避免使用不吉利的字，如'死'、'病'"] },
  { name: "平成", yearRange: "1989-2019", characteristics: ["和平", "国际化"], namingTrends: ["国际名", "独特名"], socialStructure: "经济泡沫后的调整", namingRules: ["现代名字常用西方名字", "避讳天皇名讳"], namingTaboos: ["避免使用不吉利的字，如'死'、'病'"] },
  { name: "令和", yearRange: "2019-现在", characteristics: ["调和", "希望"], namingTrends: ["和谐名", "希望相关"], socialStructure: "少子高龄化社会", namingRules: ["现代名字常用西方名字", "避讳天皇名讳"], namingTaboos: ["避免使用不吉利的字，如'死'、'病'"] }
];

// 在文件顶部添加这个全局变量
let currentLanguage = 'en';

// 更新 switchLanguage 函数
function switchLanguage(lang) {
  currentLanguage = lang;
  const translations = {
    en: {
      generateButton: "Generate Names",
      generateRandomButton: "Generate Random Name",
      // ... 其他英语翻译 ...
    },
    zh: {
      generateButton: "生成名字",
      generateRandomButton: "生成随机名字",
      // ... 其他中文翻译 ...
    },
    ja: {
      generateButton: "名前を生成",
      generateRandomButton: "ランダムな名前を生成",
      // ... 其他日语翻译 ...
    }
  };

  const translation = translations[lang];
  if (translation) {
    // 更新按钮文本
    updateButtonText('generate', translation.generateButton);
    updateButtonText('generate-random', translation.generateRandomButton);

    // ... 其他元素的更新 ...
  }
}

// 添加这个新函数来更新按钮文本
function updateButtonText(buttonId, text) {
  const button = document.getElementById(buttonId);
  if (button) {
    button.textContent = text;
  } else {
    console.warn(`Button with id "${buttonId}" not found`);
  }
}

// 在 DOMContentLoaded 事件监听器中添加初始化语言的调用
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM内容加载完成");
  
  // 初始化语言为英语
  switchLanguage('en');
  
  const generateButton = document.getElementById('generate');
  const generateRandomButton = document.getElementById('generate-random');
  
  if (generateButton) {
    generateButton.addEventListener('click', generateNames);
  } else {
    console.error("找不到 generate 按钮");
  }
  
  if (generateRandomButton) {
    generateRandomButton.addEventListener('click', generateRandomName);
  } else {
    console.error("找不到 generate-random 按钮");
  }
  
  // 生成初始名字列表
  generateNames();
});

// 添加这个新函数来生成随机名字
function generateRandomName() {
  const gender = Math.random() < 0.5 ? 'male' : 'female';
  const name = generateFullJapaneseName(gender, {});
  displayGeneratedName(name);
}

// 添加 displayGeneratedName 函数
function displayGeneratedName(name) {
  const nameList = document.getElementById('name-list');
  nameList.innerHTML = '';
  const li = document.createElement('li');
  li.textContent = name.kanji;
  li.onclick = () => showNameDetails(name);
  nameList.appendChild(li);
}

// 改进名字选择逻辑
function selectNameBasedOnPeriod(nameDatabase, period, options = {}) {
  console.log("选择的时期:", period);
  console.log("名字数据库:", nameDatabase);

  if (!period || !period.namingTrends) {
    console.warn("未指定时期或时期没有命名趋势，随机选择名字");
    return nameDatabase[Math.floor(Math.random() * nameDatabase.length)];
  }

  // 根据时期特征和社会结构筛选名字
  const filteredNames = nameDatabase.filter(name => {
    if (!name.characteristics) {
      console.warn("名字缺少特征:", name);
      return false;
    }
    
    const matchesTrend = period.namingTrends.some(trend => 
      name.characteristics.includes(trend) || 
      (name.meaning && name.meaning.includes(trend))
    );
    
    const matchesSocialClass = options.socialClass ? 
      name.socialClass === options.socialClass : true;
    
    const matchesPopularity = options.popularity ? 
      name.popularity === options.popularity : true;
    
    return matchesTrend && matchesSocialClass && matchesPopularity;
  });

  console.log("筛选后的名字:", filteredNames);

  if (filteredNames.length === 0) {
    console.warn("没有符合时期特征的名字，随机选择");
    return nameDatabase[Math.floor(Math.random() * nameDatabase.length)];
  }

  return filteredNames[Math.floor(Math.random() * filteredNames.length)];
}

// 改进的罗马字转换系统
function improvedRomajiConversion(kanji) {
  // 这里应该实现一个更复杂的转换逻辑
  // 考虑到日语发音的细节，如长音、促音等
  // 为了演示，我们只是简单地返回原有的罗马字
  return kanji.romaji;
}

// 名字寓意解析
function analyzeNameMeaning(surname, givenName) {
  const surnameMeaning = surname.meaning;
  const givenNameMeaning = givenName.meaning;
  
  return `Surname "${surname.kanji}" means ${surnameMeaning}. This surname originates from ${surname.origin} and is common in the ${surname.region} region.
           Given name "${givenName.kanji}" means ${givenNameMeaning}. This name has the characteristics of ${givenName.characteristics.join(', ')}.
           In the ${givenName.era} era, it was popular among the ${givenName.socialClass} class.
           Combined, this name may symbolize a person with ${givenName.characteristics.join(' and ')} qualities from a ${surname.origin} background.`;
}

// 名字组合逻辑
function isNameCombinationHarmonious(surname, givenName) {
  // 这里实现名字组合的协调性检查
  // 例如，检查音节数量、音调等
  const surnameLength = surname.kanji.length;
  const givenNameLength = givenName.kanji.length;
  
  // 简单的规则：姓氏和名字的长度之和最好是奇数
  return (surnameLength + givenNameLength) % 2 !== 0;
}

// 生成完整的日本名字（包括姓氏）
function generateFullJapaneseName(gender, options = {}) {
  console.log("生成名字，性别:", gender, "选项:", options);

  let period;
  if (options.period) {
    period = historicalPeriods.find(p => p.name === options.period);
  }
  if (!period) {
    period = historicalPeriods[Math.floor(Math.random() * historicalPeriods.length)];
    console.log("未指定时期或找不到指定时期，随机选择时期:", period.name);
  }
  
  let surname, givenName;
  do {
    surname = selectNameBasedOnPeriod(largeSurnameDatabase, period, options);
    givenName = selectNameBasedOnPeriod(largeGivenNameDatabase[gender], period, options);
  } while (!isNameCombinationHarmonious(surname, givenName));

  console.log("选择的姓氏:", surname);
  console.log("选择的名字:", givenName);

  const fullNameKanji = `${surname.kanji} ${givenName.kanji}`;
  const fullNameRomaji = `${surname.romaji} ${givenName.romaji}`;
  const nameMeaning = analyzeNameMeaning(surname, givenName);

  return {
    kanji: fullNameKanji,
    romaji: fullNameRomaji,
    meaning: nameMeaning,
    surname: surname.kanji,
    surnameOrigin: surname.origin,
    givenName: givenName.kanji,
    givenNamePopularity: givenName.popularity,
    period: period.name,
    region: surname.region,
    socialClass: givenName.socialClass,
    historicalContext: `${period.name} period (${period.yearRange}) is characterized by ${period.characteristics.join(', ')}. 
                        The social structure was ${period.socialStructure}, and naming trends included ${period.namingTrends.join(', ')}. 
                        Naming rules included: ${period.namingRules.join('; ')}. 
                        Naming taboos included: ${period.namingTaboos.join('; ')}.`,
    culturalSignificance: givenName.culturalSignificance || surname.culturalSignificance || null
  };
}

function getJapaneseNames(gender, count, options = {}) {
  const names = [];
  for (let i = 0; i < count; i++) {
    names.push(generateFullJapaneseName(gender, options));
  }
  return names;
}

// 添加动漫角色名字生成功能
function generateAnimeName(gender) {
  const animeTropes = ["元气", "天才", "神秘", "英雄", "反派"];
  const name = generateFullJapaneseName(gender, { popularity: "高" });
  const trope = animeTropes[Math.floor(Math.random() * animeTropes.length)];
  return {
    ...name,
    animeCharacterType: trope
  };
}

// 添加历史名人名字生成功能
function generateHistoricalName(gender, period) {
  return generateFullJapaneseName(gender, { period: period, socialClass: "上层" });
}

// 修改 generateNames 函数
function generateNames() {
  console.log("generateNames function called");
  const gender = document.getElementById('gender').value;
  const period = document.getElementById('period').value;
  const isAnime = document.getElementById('anime-checkbox').checked;
  const isHistorical = document.getElementById('historical-checkbox').checked;
  console.log(`Selected gender: ${gender}, period: ${period}, anime: ${isAnime}, historical: ${isHistorical}`);
  
  const nameList = document.getElementById('name-list');
  nameList.innerHTML = '<li>Loading...</li>';
  
  setTimeout(() => {
    let names;
    if (isAnime) {
      names = Array(5).fill().map(() => generateAnimeName(gender));
    } else if (isHistorical) {
      names = Array(5).fill().map(() => generateHistoricalName(gender, period));
    } else {
      names = getJapaneseNames(gender, 5, { period: period });
    }
    console.log("Generated names:", names);
    
    nameList.innerHTML = '';
    names.forEach(name => {
      const li = document.createElement('li');
      li.textContent = name.kanji;
      li.onclick = () => showNameDetails(name);
      nameList.appendChild(li);
    });
    console.log("Name list updated");
  }, 1000);
}

function showNameDetails(name) {
  console.log("显示名字详情:", name);
  const modal = document.getElementById('name-modal');
  const details = document.querySelector('.modal-content');
  if (!modal || !details) {
    console.error("找不到模态框或详情元素");
    return;
  }
  modal.style.display = 'block';
  
  const translations = {
    en: {
      nameKanji: "Full Name (Kanji)",
      nameRomaji: "Full Name (Romaji)",
      nameMeaning: "Name Meaning",
      nameSurname: "Surname",
      nameGiven: "Given Name",
      namePeriod: "Historical Period",
      historicalContext: "Historical Context",
      culturalSignificance: "Cultural Significance",
      animeCharacter: "Anime Character",
      historicalFigure: "Historical Figure",
      relatedContent: "Related Content",
      japaneseNameMeanings: "Japanese Name Meanings",
      japaneseNamingCustoms: "Japanese Naming Customs",
      popularJapaneseNames: "Popular Japanese Names",
      animeCharacterNames: "Anime Character Names"
    },
    zh: {
      nameKanji: "全名（汉字）",
      nameRomaji: "全名（罗马字）",
      nameMeaning: "名字寓意",
      nameSurname: "姓氏",
      nameGiven: "名",
      namePeriod: "历史时期",
      historicalContext: "历史背景",
      culturalSignificance: "文化意义",
      animeCharacter: "动漫角色",
      historicalFigure: "历史名人",
      relatedContent: "相关内容",
      japaneseNameMeanings: "日本名字的含义",
      japaneseNamingCustoms: "日本的命名习俗",
      popularJapaneseNames: "流行的日本名字",
      animeCharacterNames: "动漫角色名字大全"
    },
    ja: {
      nameKanji: "フルネーム（漢字）",
      nameRomaji: "フルネーム（ローマ字）",
      nameMeaning: "名前の意味",
      nameSurname: "姓",
      nameGiven: "名",
      namePeriod: "歴史的な時代",
      historicalContext: "歴史的背景",
      culturalSignificance: "文化的意義",
      animeCharacter: "アニメキャラクター",
      historicalFigure: "歴史上の人物",
      relatedContent: "関連コンテンツ",
      japaneseNameMeanings: "日本の名前の意味",
      japaneseNamingCustoms: "日本の命名習慣",
      popularJapaneseNames: "人気の日本の名前",
      animeCharacterNames: "アニメキャラクターの名前集"
    }
  };

  const translation = translations[currentLanguage];

  const elements = [
    { id: 'name-kanji', label: translation.nameKanji, text: name.kanji },
    { id: 'name-romaji', label: translation.nameRomaji, text: name.romaji },
    { id: 'name-meaning', label: translation.nameMeaning, text: name.meaning },
    { id: 'name-surname', label: translation.nameSurname, text: `${name.surname} (${name.surnameOrigin})` },
    { id: 'name-given', label: translation.nameGiven, text: `${name.givenName} (${name.givenNamePopularity})` },
    { id: 'name-period', label: translation.namePeriod, text: name.period },
    { id: 'historical-context', label: translation.historicalContext, text: name.historicalContext },
    { id: 'name-cultural-significance', label: translation.culturalSignificance, text: name.culturalSignificance || 'No information available / 无可用信息 / 情報なし' }
  ];

  elements.forEach(({ id, label, text }) => {
    const element = document.getElementById(id);
    if (element) {
      const labelElement = element.previousElementSibling;
      if (labelElement) {
        labelElement.textContent = `${label}: `;
      }
      element.textContent = text;
    } else {
      console.warn(`找不到元素: ${id}`);
    }
  });
}

// 关闭模态框
document.querySelector('.close').onclick = function() {
  document.getElementById('name-modal').style.display = 'none';
};

console.log("脚本加载完成");