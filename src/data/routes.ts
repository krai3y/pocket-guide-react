export interface IRoutes {
  id: number;
  name: string;
  link: string;
  time: string;
  distance: string;
  center: number[];
  img: string;
}

export const routes: IRoutes[] = [
  {id: 1, name: 'Путь в прошлое', link: 'way_to_past', time: '0 ч. 19 мин.', distance: '1 км 580 м', center: [64.54006439121255, 40.515819492732874],  img: '../../images/way_to_past/anons.jpg'},
  {id: 2, name: 'Культурное путешествие', link: 'cultural_journey', time: '0 ч. 18 мин.', distance: '1 км 510 м', center: [64.54006439121255, 40.515819492732874], img: '../../images/cultural_journey/anons.jpg',},
  {id: 3, name: 'Городские чудеса', link: 'city_wow', time: '0 ч. 20 мин.', distance: '1 км 670 м', center: [64.54006439121255, 40.515819492732874], img: '../../images/city_wow/anons.jpg',},
  {id: 4, name: 'Кулинарный квест', link: 'cult_quest', time: '0 ч. 57 мин.', distance: '4 км 800 м', center: [64.54006439121255, 40.515819492732874], img: '../../images/cult_quest/anons.jpg',},
  {id: 5, name: 'Лесные просторы', link: 'forest_prost', time: '1 ч. 17 мин.', distance: '6 км 400 м', center: [64.54006439121255, 40.515819492732874], img: '../../images/forest_prost/anons.jpg',},
  {id: 6, name: 'Прогулка Чумбарова-Лучинского', link: 'walk_ch', time: '0 ч. 11 мин.', distance: '0 км 920 м', center: [64.54006439121255, 40.515819492732874], img: '../../images/walk_ch/anons.jpg',},
];