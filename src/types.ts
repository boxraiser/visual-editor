import { FunctionComponent } from 'preact'

export type EditorComponentData = {
  _id: string
  _name: string
  [key: string]: any
}

export interface EditorField<V> {
  name: string
  field: FunctionComponent<EditorFieldProps<V>>
}

export interface IndexableObject {
  _id: string
}

export type EditorFieldProps<V> = { value?: V; onChange: (value: V) => void }

export type EditorComponentDefinition = {
  title: string
  label?: string
  fields: EditorField<any>[]
}

export type EditorComponentDefinitions = Record<
  string,
  EditorComponentDefinition
>
