 'server-only'
 
const dictionaries:any = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ge: () => import('./dictionaries/ge.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: any) => dictionaries[locale]()