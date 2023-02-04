import { ipcRenderer, contextBridge } from "electron";


export default () => {
  contextBridge.exposeInMainWorld('db', {
    findAll: <T>(): Promise<T> => ipcRenderer.invoke('db-find-all')
  })

  contextBridge.exposeInMainWorld('process', {
    versions: {
      electron: process.versions.electron
    }
  })
}
