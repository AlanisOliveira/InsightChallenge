export type GlobalContextType = {
  data: ApiResponseType;
  isPending: boolean;
  error: null | unknown | string;
  newsQtd: number;
  maxNewsQtd: number;
  loadMoreNews: (qtd: number) => void;
  toggleFavoriteRender: () => void;
  favoriteRender: boolean;
};

export type ChildrenProviderProps = {
  children: React.ReactNode;
};

export type ApiResponseType = {
  count: number;
  imageIntro?: string;
  page: number;
  totalPages: number;
  nextPage: number;
  previousPage: number;
  showingFrom: number;
  showingTo: number;
  items: Item[];
};

export type Item = {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: string;
  imagens: string;
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
};

export type NewsArticleProps = {
  id: number;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  link: string;
};

export type State = {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
};

