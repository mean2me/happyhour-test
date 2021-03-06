import { IConfig } from '../types'

const cfg: IConfig = {
  ENDPOINT_URL: process.env.ENDPOINT_URL as string,
  LANG: process.env.LANG as string,
}

export default cfg
