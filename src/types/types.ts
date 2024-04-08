interface Image {
  id?: string;
  width?: number;
  height?: number;
  url?: string;
  caption?: {
    plainText?: string;
    __typename?: string;
  };
  __typename?: string;
}

interface TitleType {
  text?: string;
  id?: string;
  isSeries?: boolean;
  isEpisode?: boolean;
  __typename?: string;
}

interface TitleText {
  text?: string;
  __typename?: string;
}

interface ReleaseDates {
  day?: string | number | null;
  month?: string | number | null;
  year?: number;
  endYear?: number | null;
  __typename?: string;
}

export interface MovieItem {
  _id?: string;
  id?: string;
  primaryImage?: Image | null;
  titleType?: TitleType;
  titleText?: TitleText;
  originalTitleText?: TitleText;
  releaseYear?: ReleaseDates | null;
  releaseDate?: ReleaseDates | null;
}
