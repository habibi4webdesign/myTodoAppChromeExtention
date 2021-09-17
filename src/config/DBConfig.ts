export const DBConfig = {
  name: 'TodoDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'todos',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'id', keypath: 'id', options: { unique: true } },
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'isDone', keypath: 'isDone', options: { unique: false } },
        { name: 'date', keypath: 'date', options: { unique: false } },
        { name: 'time', keypath: 'time', options: { unique: false } },
        { name: 'repeat', keypath: 'repeat', options: { unique: false } },
        { name: 'notified', keypath: 'notified', options: { unique: false } },
        { name: 'dateCategoryOrigin', keypath: 'dateCategoryOrigin', options: { unique: false } },

      ],
    },
  ],
}
