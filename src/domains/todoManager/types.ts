export interface ITodo {
  id: string
  name: string
  description?: string
  isDone: boolean
  date: string
  time: string
  dateCategory?: string
  dateCategoryOrigin?:string
  repeat: boolean
}
