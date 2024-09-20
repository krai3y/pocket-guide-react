export interface IPlaces {
  id: number;
  name: string;
  img: string;
  filter: string;
  coordX: number;
  coordY: number;
  route: number;

}

export const places: IPlaces[] = [
  {id: 1, name: 'Лютеранская церковь Святой Екатерины', img: '../../images/way_to_past/1.jpeg', filter: 'dost', coordX: 64.545457, coordY: 40.514938, route: 1,},
  {id: 2, name: 'Соловецким юнгам', img: '../../images/way_to_past/2.jpeg', filter: 'dost', coordX: 64.545452, coordY: 40.512031, route: 1},
  {id: 3, name: 'Памятник тюленю-спасителю', img: '../../images/way_to_past/3.jpeg', filter: 'dost', coordX: 64.544009, coordY: 40.510765, route: 1},
  {id: 4, name: 'Монумент победы в войне 1941-1945 ГГ.', img: '../../images/way_to_past/4.jpeg', filter: 'dost', coordX: 64.543626, coordY: 40.512653, route: 1},
  {id: 5, name: 'Участникам Северных конвоев', img: '../../images/way_to_past/5.jpeg', filter: 'dost', coordX: 64.543617, coordY: 40.510518, route: 1},
  {id: 6, name: 'Стела «Город воинской славы»', img: '../../images/way_to_past/6.jpeg', filter: 'dost', coordX: 64.541944, coordY: 40.510104, route: 1},
  {id: 7, name: 'Обелиск Севера', img: '../../images/way_to_past/7.jpeg', filter: 'dost', coordX: 64.540784, coordY: 40.514219, route: 1},
  {id: 8, name: 'Памятник Ленину', img: '../../images/way_to_past/8.jpeg', filter: 'dost', coordX: 64.540064, coordY: 40.515819, route: 1},
  {id: 9, name: 'Нулевая верста', img: '../../images/way_to_past/9.jpeg', filter: 'dost', coordX: 64.538394, coordY: 40.5138132, route: 1},
  {id: 10, name: 'Театр драмы имени М.В. Ломоносова', img: '../../images/cultural_journey/1.jpeg', filter: 'dost', coordX: 64.536475, coordY: 40.514928, route: 2},
  {id: 11, name: 'Беседка Грина', img: '../../images/cultural_journey/2.jpeg', filter: 'dost', coordX: 64.536133, coordY: 40.511966, route: 2},
  {id: 12, name: 'Окно в Арктику', img: '../../images/cultural_journey/3.jpeg', filter: 'dost', coordX: 64.535489, coordY: 40.512680, route: 2},
  {id: 13, name: 'Северный морской музей', img: '../../images/cultural_journey/4.jpeg', filter: 'dost', coordX: 64.533894, coordY: 40.516847, route: 2},
  {id: 14, name: 'Почтовая контора', img: '../../images/cultural_journey/5.jpeg', filter: 'cafe', coordX: 64.534460, coordY: 40.517030, route: 2},
  {id: 15, name: 'Церковь Зосимы и Савватия', img: '../../images/cultural_journey/6.jpeg', filter: 'dost', coordX: 64.534239, coordY: 40.518278, route: 2},
  {id: 16, name: 'Торговый корпус', img: '../../images/cultural_journey/7.jpeg', filter: 'dost', coordX: 64.533814, coordY: 40.520203, route: 2},
  {id: 17, name: 'Усадебный дом Е.К. Плотниковой', img: '../../images/cultural_journey/8.jpeg', filter: 'dost', coordX: 64.533575, coordY: 40.521745, route: 2},
  {id: 18, name: 'Молодёжный сквер', img: '../../images/cultural_journey/9.jpeg', filter: 'park', coordX: 64.532795, coordY: 40.521812, route: 2},
  {id: 19, name: 'ИС-3', img: '../../images/city_wow/1.jpg', filter: 'dost', coordX: 64.548053, coordY: 40.519770, route: 3},
  {id: 20, name: 'Дом Н.О. Шарвина', img: '../../images/city_wow/2.jpg', filter: 'dost', coordX: 64.549490, coordY: 40.519009, route: 3},
  {id: 21, name: 'Рябиновая аллея', img: '../../images/city_wow/3.jpg', filter: 'park', coordX: 64.550831, coordY: 40.520563, route: 3},
  {id: 22, name: 'Корабельная мачта', img: '../../images/city_wow/4.jpg', filter: 'dost', coordX: 64.551892, coordY: 40.515831, route: 3},
  {id: 23, name: 'Памятник Кузнецова Н. Г.', img: '../../images/city_wow/5.jpg', filter: 'dost', coordX: 64.552146, coordY: 40.515043, route: 3},
  {id: 24, name: 'Особняк А. Суркова', img: '../../images/city_wow/6.jpg', filter: 'dost', coordX: 64.550473, coordY: 40.514843, route: 3},
  {id: 25, name: 'Успенская церковь', img: '../../images/city_wow/7.jpg', filter: 'dost', coordX: 64.550059, coordY: 40.515245, route: 3},
  {id: 26, name: 'Римская кофейня', img: '../../images/cult_quest/1.jpg', filter: 'cafe', coordX: 64.545071, coordY: 40.550831, route: 4},
  {id: 27, name: 'Парк Зарусье', img: '../../images/cult_quest/2.jpg', filter: 'park', coordX: 64.543330, coordY: 40.561917, route: 4},
  {id: 28, name: 'Музей Бурса', img: '../../images/cult_quest/3.jpg', filter: 'dost', coordX: 64.542409, coordY: 40.557123, route: 4},
  {id: 29, name: 'Блин Виль', img: '../../images/cult_quest/4.jpg', filter: 'cafe', coordX: 64.542147, coordY: 40.570055, route: 4},
  {id: 30, name: 'Свято-Ильинский кафедральный собор', img: '../../images/cult_quest/5.jpg', filter: 'dost', coordX: 64.529912, coordY: 40.582413, route: 4},
  {id: 31, name: 'Кафе Старый город', img: '../../images/cult_quest/6.jpg', filter: 'dost', coordX: 64.536650, coordY: 40.583246, route: 4},
  {id: 32, name: 'Майский парк', img: '../../images/forest_prost/1.jpg', filter: 'park', coordX: 64.522244, coordY: 40.614974, route: 5},
  {id: 33, name: 'Ресторан Престо', img: '../../images/forest_prost/2.jpg', filter: 'cafe', coordX: 64.524859, coordY: 40.602625, route: 5},
  {id: 34, name: 'Дендрарий САФУ', img: '../../images/forest_prost/3.jpg', filter: 'park', coordX: 64.528414, coordY: 40.550486, route: 5},
  {id: 35, name: 'Памятник М. В. Ломоносову', img: '../../images/forest_prost/4.jpg', filter: 'dost', coordX: 64.528421, coordY: 40.548338, route: 5},
  {id: 36, name: 'Поморский сквер', img: '../../images/forest_prost/5.jpg', filter: 'dost', coordX: 64.533756, coordY: 40.523772, route: 5},
  {id: 37, name: 'Ресторан Поморский', img: '../../images/forest_prost/6.jpg', filter: 'cafe', coordX: 64.534684, coordY: 40.523607, route: 5},
  {id: 38, name: 'Петровский парк', img: '../../images/forest_prost/7.jpg', filter: 'park', coordX: 64.537156, coordY: 40.514228, route: 5},
  {id: 39, name: 'Столовая Грядка', img: '../../images/walk_ch/1.jpg', filter: 'cafe', coordX: 64.534325, coordY: 40.538887, route: 6},
  {id: 40, name: 'Кафе 1234', img: '../../images/walk_ch/2.jpg', filter: 'cafe', coordX: 64.532773, coordY: 40.534495, route: 6},
  {id: 41, name: 'Усадьба М. Т. Куницыной', img: '../../images/walk_ch/3.jpg', filter: 'dost', coordX: 64.533633, coordY: 40.532282, route: 6},
  {id: 42, name: 'Русским жёнам', img: '../../images/walk_ch/4.jpg', filter: 'dost', coordX: 64.533692, coordY: 40.532475, route: 6},
  {id: 43, name: 'Ресторан Генацвале', img: '../../images/walk_ch/5.jpg', filter: 'cafe', coordX: 64.534328, coordY: 40.531373, route: 6},
  {id: 44, name: 'Северница', img: '../../images/another/1.jpg', filter: 'gost', coordX: 64.530141, coordY: 40.540430, route: 0},
  {id: 45, name: 'Вега', img: '../../images/another/2.jpg', filter: 'gost', coordX: 64.528960, coordY: 40.556618, route: 0},
  {id: 46, name: 'Двина', img: '../../images/another/3.jpg', filter: 'gost', coordX: 64.535578, coordY: 40.523188, route: 0},
  {id: 47, name: 'Novotel', img: '../../images/another/4.jpg', filter: 'gost', coordX: 64.530973, coordY: 40.527102, route: 0},
  {id: 48, name: 'Roomi', img: '../../images/another/5.jpg', filter: 'gost', coordX: 64.538889, coordY: 40.531262, route: 0},
];