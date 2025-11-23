import menuData from '../data/menu.json';
import { MenuItem } from '../types/menuTypes';

export const fetchMenuData = (): MenuItem[] => {
  return menuData;
};


