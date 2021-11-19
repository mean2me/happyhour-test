export declare enum ActionType {
  // gameGroupList,
  GET_LOBBY_LIST_WITH_GAME_GROUPS_REQUEST,
  GET_LOBBY_LIST_WITH_GAME_GROUPS_RESPONSE,
  // gameGroupList,
  GET_LOBBY_GAME_GROUP_GAMES_REQUEST,
  GET_LOBBY_GAMES_GROUP_GAMES_RESPONSE,
  // gameGroupList,
  GET_GAME_GROUP_LIST_REQUEST,
  GET_GAME_GROUP_LIST_RESPONSE,
}

export declare interface IAction {
  type: ActionType
  payload?: any
}

export declare interface IConfig {
  ENDPOINT_URL: string
  LANG: string
}

export declare interface IGamesState {
  loading: boolean
  lobbies: Array<any>
  games: Array<any>
}

export declare interface IGameGroup {
  id: number
  name: string
  group_type: string
  group_sub_type: string
  game_asset_style: string
  game_group_order: number
  content: string
  metaTitle: string
  metaTags: string
  metaDescription: string
  multilingualUrlGameGroup: {
    cd?: string
    de?: string
    en?: string
    fi?: string
    ja?: string
    nl?: string
    no?: string
    nz?: string
  }
}

export declare interface ILobby {
  id: number
  name: string
  user_segment: string
  lobby_order: number
  content: string
  metaTitle: string
  metaTags: string
  metaDescription: string
  multilingualUrlLobby: {
    cd?: string
    de?: string
    en?: string
    fi?: string
    ja?: string
    nl?: string
    no?: string
    nz?: string
  }
  gameGroupList: Array<IGameGroup>
}

export declare interface IGame {
  gameCode: string
  gameType: string
  aspectRatio: number
  publishedDate: string
  aspectRatioValue: string
  hasDemo: number
  name: string
  externalAsset: string
  gdContent: string
  metaTitle: string
  metaTags: string
  url: string
  metaDescription: string
  vendorDisplayName: string
  vendorCode: string
  multilingualUrl: {
    cd?: string
    de?: string
    en?: string
    fi?: string
    ja?: string
    nl?: string
    no?: string
    nz?: string
  }
  tagList?: Array<string>
  displayOrder: number
  beGameTypeId: number
  vendorName: string
  pristineGameId: string
  vendorSlug: string
  gameGroupList?: Array<IGameGroup>
}
