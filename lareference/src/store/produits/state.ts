import { AppData } from 'src/type/appData';

function state(): AppData {
  return {
    categorie: [
      { theme: 'trading', tag: ['mix', 'dancehall'], id: 'xvg6425' },
      { theme: 'crypto', tag: ['mix', 'dancehall'], id: 'xvg5213' },
      { theme: 'applis', tag: ['mix', 'dancehall'], id: 'xvg6515' },
    ],
    listUsers: [
      {  name: 'CryptOrganiz', themeId: 'xvg5213', rang: 0, media: { youtube: 'UC_kiCOCi0VDqVTGfmoGC8Ig', instagram: 'cryptorganiz' } },
      { name: 'Humbled Trader', themeId: 'xvg6425', rang: 1, media: { youtube: 'UCcIvNGMBSQWwo1v3n-ZRBCw', facebook: 'HumbledTrader', twitter: 'HumbledTrader18', instagram: 'humbledtrader' } },
      { name: 'Warrior Trading', themeId: 'xvg6425', rang: 2, media: { youtube: 'DaytradeWarrior', facebook: 'warriortrading', twitter: 'WarriorTrading', instagram: 'warriortrading' } },
      { name: 'Coinbase (Crypto)', themeId: 'xvg6515', rang: 3, media: { android: 'com.coinbase.android' } },
      { name: 'Libertex (Trading)', themeId: 'xvg6515', rang: 3, media: { android: 'com.libertex.mobile' } },
      { name: 'Binance (Trading)', themeId: 'xvg6515', rang: 3, media: { android: 'com.binance.dev' } },
      { name: 'Mixlr (Music)', themeId: 'xvg6515', rang: 3, media: { android: 'com.mixlr.android' } },
      { name: 'Brave (Browser)', themeId: 'xvg6515', rang: 3, media: { android: 'com.mixlr.android' } },
      { name: 'LeDenicheur (Comparateur)', themeId: 'xvg6515', rang: 3, media: { android: 'se.prisjakt.pricespy' } },
    ]
  }
};
 
export default state;
