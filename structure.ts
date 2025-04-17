import {StructureBuilder} from 'sanity/desk'

export const defaultStructure = (S: StructureBuilder) =>
  S.list()
    .title('內容管理')
    .items([
      S.documentTypeListItem('post').title('貼文管理'),
    ])