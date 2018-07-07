import * as path from 'path'
import * as QRCode from 'qrcode'
import { promisify } from 'util'

import _config from '../config'

const getQR = promisify(QRCode.toDataURL)
const setQR = promisify(QRCode.toFile)

async function createQR(str: string): Promise<boolean> {
  await setQR(path.join(__dirname, '../', 'images/') + str + '.png', 
    `${_config.hostUrl}/s/${str}`)
  return true
}

export {
  getQR,
  createQR
}