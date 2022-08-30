export interface game {
    id?: string;
    title: string;
    coverImageUrl: string;
  }
  
  export interface gameInfos {
    id?: string;
    title: string;
    coverImageUrl: string;
    imdbScore: number;
    description: string;
    year: number;
    trailerYouTubeUrl: string;
    gameplayYouTubeUrl: string;
    genres: string;
  }