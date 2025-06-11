export interface IRoutes {
  id: number;
  name: string;
  link: string;
  time: string;
  distance: string;
  center: number[];
  img: string;
  src: string;
}

export const routes: IRoutes[] = [
  {id: 1, name: 'Путь в прошлое', link: 'way_to_past', time: '0 ч. 19 мин.', distance: '1 км 580 м', center: [64.540913, 40.512960],  img: '../../images/way_to_past/anons.jpg', src: 'https://clck.ru/3MZemy'},
  {id: 2, name: 'Культурное путешествие', link: 'cultural_journey', time: '0 ч. 18 мин.', distance: '1 км 510 м', center: [64.534547, 40.517491], img: '../../images/cultural_journey/anons.jpg', src: 'https://clck.ru/3MZerM'},
  {id: 3, name: 'Городские чудеса', link: 'city_wow', time: '0 ч. 20 мин.', distance: '1 км 670 м', center: [64.550507, 40.520637], img: '../../images/city_wow/anons.jpg', src: 'https://clck.ru/3MZetY'},
  {id: 4, name: 'Кулинарный квест', link: 'cult_quest', time: '0 ч. 57 мин.', distance: '4 км 800 м', center: [64.538539, 40.570399], img: '../../images/cult_quest/anons.jpg', src: 'https://clck.ru/3MZevd'},
  {id: 5, name: 'Лесные просторы', link: 'forest_prost', time: '1 ч. 17 мин.', distance: '6 км 400 м', center: [64.532908, 40.533554], img: '../../images/forest_prost/anons.jpg', src: 'https://clck.ru/3MZez2'},
  {id: 6, name: 'Прогулка Чумбарова-Лучинского', link: 'walk_ch', time: '0 ч. 11 мин.', distance: '0 км 920 м', center: [64.533487, 40.535735], img: '../../images/walk_ch/anons.jpg', src: 'https://clck.ru/3MZf2t'},
];