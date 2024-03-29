(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : (global.translate = factory());
})(this, function () {
  'use strict';
  var iso = [
    'aa',
    'ab',
    'ae',
    'af',
    'ak',
    'am',
    'an',
    'ar',
    'as',
    'av',
    'ay',
    'az',
    'ba',
    'be',
    'bg',
    'bh',
    'bi',
    'bm',
    'bn',
    'bo',
    'br',
    'bs',
    'ca',
    'ce',
    'ch',
    'co',
    'cr',
    'cs',
    'cu',
    'cv',
    'cy',
    'da',
    'de',
    'dv',
    'dz',
    'ee',
    'el',
    'en',
    'eo',
    'es',
    'et',
    'eu',
    'fa',
    'ff',
    'fi',
    'fj',
    'fo',
    'fr',
    'fy',
    'ga',
    'gd',
    'gl',
    'gn',
    'gu',
    'gv',
    'ha',
    'he',
    'hi',
    'ho',
    'hr',
    'ht',
    'hu',
    'hy',
    'hz',
    'ia',
    'id',
    'ie',
    'ig',
    'ii',
    'ik',
    'io',
    'is',
    'it',
    'iu',
    'ja',
    'jv',
    'ka',
    'kg',
    'ki',
    'kj',
    'kk',
    'kl',
    'km',
    'kn',
    'ko',
    'kr',
    'ks',
    'ku',
    'kv',
    'kw',
    'ky',
    'la',
    'lb',
    'lg',
    'li',
    'ln',
    'lo',
    'lt',
    'lu',
    'lv',
    'mg',
    'mh',
    'mi',
    'mk',
    'ml',
    'mn',
    'mr',
    'ms',
    'mt',
    'my',
    'na',
    'nb',
    'nd',
    'ne',
    'ng',
    'nl',
    'nn',
    'no',
    'nr',
    'nv',
    'ny',
    'oc',
    'oj',
    'om',
    'or',
    'os',
    'pa',
    'pi',
    'pl',
    'ps',
    'pt',
    'qu',
    'rm',
    'rn',
    'ro',
    'ru',
    'rw',
    'sa',
    'sc',
    'sd',
    'se',
    'sg',
    'si',
    'sk',
    'sl',
    'sm',
    'sn',
    'so',
    'sq',
    'sr',
    'ss',
    'st',
    'su',
    'sv',
    'sw',
    'ta',
    'te',
    'tg',
    'th',
    'ti',
    'tk',
    'tl',
    'tn',
    'to',
    'tr',
    'ts',
    'tt',
    'tw',
    'ty',
    'ug',
    'uk',
    'ur',
    'uz',
    've',
    'vi',
    'vo',
    'wa',
    'wo',
    'xh',
    'yi',
    'yo',
    'za',
    'zh',
    'zu',
  ];
  var iso2 = {
    aar: 'aa',
    abk: 'ab',
    afr: 'af',
    aka: 'ak',
    alb: 'sq',
    amh: 'am',
    ara: 'ar',
    arg: 'an',
    arm: 'hy',
    asm: 'as',
    ava: 'av',
    ave: 'ae',
    aym: 'ay',
    aze: 'az',
    bak: 'ba',
    bam: 'bm',
    baq: 'eu',
    bel: 'be',
    ben: 'bn',
    bih: 'bh',
    bis: 'bi',
    bos: 'bs',
    bre: 'br',
    bul: 'bg',
    bur: 'my',
    cat: 'ca',
    cha: 'ch',
    che: 'ce',
    chi: 'zh',
    chu: 'cu',
    chv: 'cv',
    cor: 'kw',
    cos: 'co',
    cre: 'cr',
    cze: 'cs',
    dan: 'da',
    div: 'dv',
    dut: 'nl',
    dzo: 'dz',
    eng: 'en',
    epo: 'eo',
    est: 'et',
    ewe: 'ee',
    fao: 'fo',
    fij: 'fj',
    fin: 'fi',
    fre: 'fr',
    fry: 'fy',
    ful: 'ff',
    geo: 'ka',
    ger: 'de',
    gla: 'gd',
    gle: 'ga',
    glg: 'gl',
    glv: 'gv',
    gre: 'el',
    grn: 'gn',
    guj: 'gu',
    hat: 'ht',
    hau: 'ha',
    heb: 'he',
    her: 'hz',
    hin: 'hi',
    hmo: 'ho',
    hrv: 'hr',
    hun: 'hu',
    ibo: 'ig',
    ice: 'is',
    ido: 'io',
    iii: 'ii',
    iku: 'iu',
    ile: 'ie',
    ina: 'ia',
    ind: 'id',
    ipk: 'ik',
    ita: 'it',
    jav: 'jv',
    jpn: 'ja',
    kal: 'kl',
    kan: 'kn',
    kas: 'ks',
    kau: 'kr',
    kaz: 'kk',
    khm: 'km',
    kik: 'ki',
    kin: 'rw',
    kir: 'ky',
    kom: 'kv',
    kon: 'kg',
    kor: 'ko',
    kua: 'kj',
    kur: 'ku',
    lao: 'lo',
    lat: 'la',
    lav: 'lv',
    lim: 'li',
    lin: 'ln',
    lit: 'lt',
    ltz: 'lb',
    lub: 'lu',
    lug: 'lg',
    mac: 'mk',
    mah: 'mh',
    mal: 'ml',
    mao: 'mi',
    mar: 'mr',
    may: 'ms',
    mlg: 'mg',
    mlt: 'mt',
    mon: 'mn',
    nau: 'na',
    nav: 'nv',
    nbl: 'nr',
    nde: 'nd',
    ndo: 'ng',
    nep: 'ne',
    nno: 'nn',
    nob: 'nb',
    nor: 'no',
    nya: 'ny',
    oci: 'oc',
    oji: 'oj',
    ori: 'or',
    orm: 'om',
    oss: 'os',
    pan: 'pa',
    per: 'fa',
    pli: 'pi',
    pol: 'pl',
    por: 'pt',
    pus: 'ps',
    que: 'qu',
    roh: 'rm',
    rum: 'ro',
    run: 'rn',
    rus: 'ru',
    sag: 'sg',
    san: 'sa',
    sin: 'si',
    slo: 'sk',
    slv: 'sl',
    sme: 'se',
    smo: 'sm',
    sna: 'sn',
    snd: 'sd',
    som: 'so',
    sot: 'st',
    spa: 'es',
    srd: 'sc',
    srp: 'sr',
    ssw: 'ss',
    sun: 'su',
    swa: 'sw',
    swe: 'sv',
    tah: 'ty',
    tam: 'ta',
    tat: 'tt',
    tel: 'te',
    tgk: 'tg',
    tgl: 'tl',
    tha: 'th',
    tib: 'bo',
    tir: 'ti',
    ton: 'to',
    tsn: 'tn',
    tso: 'ts',
    tuk: 'tk',
    tur: 'tr',
    twi: 'tw',
    uig: 'ug',
    ukr: 'uk',
    urd: 'ur',
    uzb: 'uz',
    ven: 've',
    vie: 'vi',
    vol: 'vo',
    wel: 'cy',
    wln: 'wa',
    wol: 'wo',
    xho: 'xh',
    yid: 'yi',
    yor: 'yo',
    zha: 'za',
    zul: 'zu',
  };
  var map = {
    afar: 'aa',
    abkhazian: 'ab',
    afrikaans: 'af',
    akan: 'ak',
    albanian: 'sq',
    amharic: 'am',
    arabic: 'ar',
    aragonese: 'an',
    armenian: 'hy',
    assamese: 'as',
    avaric: 'av',
    avestan: 'ae',
    aymara: 'ay',
    azerbaijani: 'az',
    bashkir: 'ba',
    bambara: 'bm',
    basque: 'eu',
    belarusian: 'be',
    bengali: 'bn',
    'bihari languages': 'bh',
    bislama: 'bi',
    tibetan: 'bo',
    bosnian: 'bs',
    breton: 'br',
    bulgarian: 'bg',
    burmese: 'my',
    catalan: 'ca',
    valencian: 'ca',
    czech: 'cs',
    chamorro: 'ch',
    chechen: 'ce',
    chinese: 'zh',
    'church slavic': 'cu',
    'old slavonic': 'cu',
    'church slavonic': 'cu',
    'old bulgarian': 'cu',
    'old church slavonic': 'cu',
    chuvash: 'cv',
    cornish: 'kw',
    corsican: 'co',
    cree: 'cr',
    welsh: 'cy',
    danish: 'da',
    german: 'de',
    divehi: 'dv',
    dhivehi: 'dv',
    maldivian: 'dv',
    dutch: 'nl',
    flemish: 'nl',
    dzongkha: 'dz',
    greek: 'el',
    english: 'en',
    esperanto: 'eo',
    estonian: 'et',
    ewe: 'ee',
    faroese: 'fo',
    persian: 'fa',
    fijian: 'fj',
    finnish: 'fi',
    french: 'fr',
    'western frisian': 'fy',
    fulah: 'ff',
    georgian: 'ka',
    gaelic: 'gd',
    'scottish gaelic': 'gd',
    irish: 'ga',
    galician: 'gl',
    manx: 'gv',
    guarani: 'gn',
    gujarati: 'gu',
    haitian: 'ht',
    'haitian creole': 'ht',
    hausa: 'ha',
    hebrew: 'he',
    herero: 'hz',
    hindi: 'hi',
    'hiri motu': 'ho',
    croatian: 'hr',
    hungarian: 'hu',
    igbo: 'ig',
    icelandic: 'is',
    ido: 'io',
    'sichuan yi': 'ii',
    nuosu: 'ii',
    inuktitut: 'iu',
    interlingue: 'ie',
    occidental: 'ie',
    interlingua: 'ia',
    indonesian: 'id',
    inupiaq: 'ik',
    italian: 'it',
    javanese: 'jv',
    japanese: 'ja',
    kalaallisut: 'kl',
    greenlandic: 'kl',
    kannada: 'kn',
    kashmiri: 'ks',
    kanuri: 'kr',
    kazakh: 'kk',
    'central khmer': 'km',
    kikuyu: 'ki',
    gikuyu: 'ki',
    kinyarwanda: 'rw',
    kirghiz: 'ky',
    kyrgyz: 'ky',
    komi: 'kv',
    kongo: 'kg',
    korean: 'ko',
    kuanyama: 'kj',
    kwanyama: 'kj',
    kurdish: 'ku',
    lao: 'lo',
    latin: 'la',
    latvian: 'lv',
    limburgan: 'li',
    limburger: 'li',
    limburgish: 'li',
    lingala: 'ln',
    lithuanian: 'lt',
    luxembourgish: 'lb',
    letzeburgesch: 'lb',
    'luba-katanga': 'lu',
    ganda: 'lg',
    macedonian: 'mk',
    marshallese: 'mh',
    malayalam: 'ml',
    maori: 'mi',
    marathi: 'mr',
    malay: 'ms',
    malagasy: 'mg',
    maltese: 'mt',
    mongolian: 'mn',
    nauru: 'na',
    navajo: 'nv',
    navaho: 'nv',
    'ndebele, south': 'nr',
    'south ndebele': 'nr',
    'ndebele, north': 'nd',
    'north ndebele': 'nd',
    ndonga: 'ng',
    nepali: 'ne',
    'norwegian nynorsk': 'nn',
    'nynorsk, norwegian': 'nn',
    'norwegian bokmål': 'nb',
    'bokmål, norwegian': 'nb',
    norwegian: 'no',
    chichewa: 'ny',
    chewa: 'ny',
    nyanja: 'ny',
    occitan: 'oc',
    ojibwa: 'oj',
    oriya: 'or',
    oromo: 'om',
    ossetian: 'os',
    ossetic: 'os',
    panjabi: 'pa',
    punjabi: 'pa',
    pali: 'pi',
    polish: 'pl',
    portuguese: 'pt',
    pushto: 'ps',
    pashto: 'ps',
    quechua: 'qu',
    romansh: 'rm',
    romanian: 'ro',
    moldavian: 'ro',
    moldovan: 'ro',
    rundi: 'rn',
    russian: 'ru',
    sango: 'sg',
    sanskrit: 'sa',
    sinhala: 'si',
    sinhalese: 'si',
    slovak: 'sk',
    slovenian: 'sl',
    'northern sami': 'se',
    samoan: 'sm',
    shona: 'sn',
    sindhi: 'sd',
    somali: 'so',
    'sotho, southern': 'st',
    spanish: 'es',
    castilian: 'es',
    sardinian: 'sc',
    serbian: 'sr',
    swati: 'ss',
    sundanese: 'su',
    swahili: 'sw',
    swedish: 'sv',
    tahitian: 'ty',
    tamil: 'ta',
    tatar: 'tt',
    telugu: 'te',
    tajik: 'tg',
    tagalog: 'tl',
    thai: 'th',
    tigrinya: 'ti',
    tonga: 'to',
    tswana: 'tn',
    tsonga: 'ts',
    turkmen: 'tk',
    turkish: 'tr',
    twi: 'tw',
    uighur: 'ug',
    uyghur: 'ug',
    ukrainian: 'uk',
    urdu: 'ur',
    uzbek: 'uz',
    venda: 've',
    vietnamese: 'vi',
    volapük: 'vo',
    walloon: 'wa',
    wolof: 'wo',
    xhosa: 'xh',
    yiddish: 'yi',
    yoruba: 'yo',
    zhuang: 'za',
    chuang: 'za',
    zulu: 'zu',
  };
  var languages = (name) => {
    if (typeof name !== 'string') {
      throw new Error(
        `The "language" must be a string, received ${typeof name}`
      );
    }
    if (name.length > 100) {
      throw new Error(
        `The "language" is too long at ${name.length} characters`
      );
    }
    name = name.toLowerCase();
    name = map[name] || iso2[name] || name;
    if (!iso.includes(name)) {
      throw new Error(`The language "${name}" is not part of the ISO 639-1`);
    }
    return name;
  };
  function Cache() {
    var _cache = Object.create(null);
    this.put = function (key, value, time, timeoutCallback) {
      if (
        typeof time !== 'undefined' &&
        (typeof time !== 'number' || isNaN(time) || time <= 0)
      ) {
        throw new Error('Cache timeout must be a positive number');
      } else if (
        typeof timeoutCallback !== 'undefined' &&
        typeof timeoutCallback !== 'function'
      ) {
        throw new Error('Cache timeout callback must be a function');
      }
      var oldRecord = _cache[key];
      if (oldRecord) {
        clearTimeout(oldRecord.timeout);
      } else {
      }
      var record = { value: value, expire: time + Date.now() };
      if (!isNaN(record.expire)) {
        record.timeout = setTimeout(
          function () {
            _del(key);
            if (timeoutCallback) {
              timeoutCallback(key, value);
            }
          }.bind(this),
          time
        );
      }
      _cache[key] = record;
      return value;
    };
    this.del = function (key) {
      var canDelete = true;
      var oldRecord = _cache[key];
      if (oldRecord) {
        clearTimeout(oldRecord.timeout);
        if (!isNaN(oldRecord.expire) && oldRecord.expire < Date.now()) {
          canDelete = false;
        }
      } else {
        canDelete = false;
      }
      if (canDelete) {
        _del(key);
      }
      return canDelete;
    };
    function _del(key) {
      delete _cache[key];
    }
    this.clear = function () {
      for (var key in _cache) {
        clearTimeout(_cache[key].timeout);
      }
      _cache = Object.create(null);
    };
    this.get = function (key) {
      var data = _cache[key];
      if (typeof data != 'undefined') {
        if (isNaN(data.expire) || data.expire >= Date.now()) {
          return data.value;
        } else {
          delete _cache[key];
        }
      }
      return null;
    };
  }
  const exp$2 = new Cache();
  exp$2.Cache = Cache;
  const base = 'https://translate.googleapis.com/translate_a/single';
  var google = {
    fetch: ({ key: key, from: from, to: to, text: text }) => [
      `${base}?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURI(text)}`,
    ],
    parse: (res) =>
      res.json().then((body) => {
        body =
          body && body[0] && body[0][0] && body[0].map((s) => s[0]).join('');
        if (!body) throw new Error('Translation not found');
        return body;
      }),
  };
  var yandex = {
    needkey: true,
    fetch: ({ key: key, from: from, to: to, text: text }) => [
      `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&lang=${from}-${to}&text=${encodeURIComponent(
        text
      )}`,
      { method: 'POST', body: '' },
    ],
    parse: (res) =>
      res.json().then((body) => {
        if (body.code !== 200) {
          throw new Error(body.message);
        }
        return body.text[0];
      }),
  };
  const libreUrl = 'https://libretranslate.com/translate';
  var libre = {
    needkey: false,
    fetch: ({
      url: url = libreUrl,
      key: key,
      from: from,
      to: to,
      text: text,
    }) => {
      const body = JSON.stringify({
        q: text,
        source: from,
        target: to,
        api_key: key,
      });
      const headers = { 'Content-Type': 'application/json' };
      return [url, { method: 'POST', body: body, headers: headers }];
    },
    parse: (res) =>
      res.json().then((body) => {
        if (!body) {
          throw new Error('No response found');
        }
        if (body.error) {
          throw new Error(body.error);
        }
        if (!body.translatedText) {
          throw new Error('No response found');
        }
        return body.translatedText;
      }),
  };
  var deepl = {
    needkey: true,
    fetch: ({ key: key, from: from, to: to, text: text }) => {
      const suffix = /:fx$/.test(key) ? '-free' : '';
      text = encodeURIComponent(text);
      return [
        `https://api${suffix}.deepl.com/v2/translate?auth_key=${key}&source_lang=${from}&target_lang=${to}&text=${text}`,
        { method: 'POST', body: '' },
      ];
    },
    parse: async (res) => {
      if (!res.ok) {
        if (res.status === 403) {
          throw new Error('Auth Error, please review the key for DeepL');
        }
        throw new Error(`Error ${res.status}`);
      }
      return res.json().then((body) => body.translations[0].text);
    },
  };
  var engines = { google: google, yandex: yandex, libre: libre, deepl: deepl };
  if (typeof fetch === 'undefined') {
    try {
      global.fetch = require('node-fetch');
    } catch (error) {
      console.warn('Please make sure node-fetch is available');
    }
  }
  const Translate = function (options = {}) {
    if (!(this instanceof Translate)) {
      return new Translate(options);
    }
    const defaults = {
      from: 'en',
      to: 'en',
      cache: undefined,
      languages: languages,
      engines: engines,
      engine: 'google',
      keys: {},
    };
    const translate = async (text, opts = {}) => {
      if (typeof opts === 'string') opts = { to: opts };
      opts.text = text;
      opts.from = languages(opts.from || translate.from);
      opts.to = languages(opts.to || translate.to);
      opts.cache = opts.cache || translate.cache;
      opts.engines = opts.engines || {};
      opts.engine = opts.engine || translate.engine;
      opts.url = opts.url || translate.url;
      opts.id =
        opts.id ||
        `${opts.url}:${opts.from}:${opts.to}:${opts.engine}:${opts.text}`;
      opts.keys = opts.keys || translate.keys || {};
      for (let name in translate.keys) {
        opts.keys[name] = opts.keys[name] || translate.keys[name];
      }
      opts.key = opts.key || translate.key || opts.keys[opts.engine];
      const engine =
        opts.engines[opts.engine] || translate.engines[opts.engine];
      const cached = exp$2.get(opts.id);
      if (cached) return Promise.resolve(cached);
      if (opts.to === opts.from) {
        return Promise.resolve(opts.text);
      }
      if (engine.needkey && !opts.key) {
        throw new Error(
          `The engine "${opts.engine}" needs a key, please provide it`
        );
      }
      const fetchOpts = engine.fetch(opts);
      return fetch(...fetchOpts)
        .then(engine.parse)
        .then((translated) => exp$2.put(opts.id, translated, opts.cache));
    };
    for (let key in defaults) {
      translate[key] =
        typeof options[key] === 'undefined' ? defaults[key] : options[key];
    }
    return translate;
  };
  const exp = new Translate();
  exp.Translate = Translate;
  return exp;
});
