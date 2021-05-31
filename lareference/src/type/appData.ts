export interface IMedia {
    facebook?: string; 
    twitter?: string; 
    instagram?: string;
    youtube?: string;
    android?: string;
  }

export interface IUsers { 
    name: string, themeId: string, rang: number, media: IMedia 
}
  
export interface AppData {
    categorie: { theme: string, tag: string[], id: string }[]
    listUsers: IUsers[]
}

export interface StateInterface {
    produits: unknown;
  }