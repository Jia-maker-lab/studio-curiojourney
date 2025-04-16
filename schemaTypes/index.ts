// index.ts

// file: schemas/post.ts
export default {
    name: 'post',
    title: 'Threads 發文內容',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: '貼文標題',
        type: 'string',
      },
      {
        name: 'mainContent',
        title: '主文內容',
        type: 'text',
        validation: Rule => Rule.required().max(500)
      },
      {
        name: 'mainImage',
        title: '主文圖片',
        type: 'image',
        options: { hotspot: true }
      },
      {
        name: 'followUpContents',
        title: '留言補充內容',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'content',
                title: '留言內容',
                type: 'text',
                validation: (Rule: { required: () => { (): any; new(): any; max: { (arg0: number): any; new(): any } } }) => Rule.required().max(500)
              },
              {
                name: 'image',
                title: '留言圖片',
                type: 'image',
                options: { hotspot: true }
              }
            ]
          }
        ]
      },
      {
        name: 'scheduledAt',
        title: '預計發佈時間',
        type: 'datetime',
      },
      {
        name: 'status',
        title: '發佈狀態',
        type: 'string',
        options: {
          list: [
            { title: '草稿', value: 'draft' },
            { title: '待審核', value: 'waiting_review' },
            { title: '已排程', value: 'unpublished' },
            { title: '已發佈', value: 'published' },
            { title: '發佈失敗', value: 'failed' }
          ]
        },
        initialValue: 'draft'
      }
    ]
  }