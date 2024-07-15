import OpenAI from 'openai'

import config from './private.config'

const client = new OpenAI({
  apiKey: config.openaiConfig.apiKey,
  baseURL: config.openaiConfig.baseURL
})


async function main() {
  const completion = await client.chat.completions.create({
    model: 'moonshot-v1-8k',
    messages: [
      // {
      //   role: 'user',
      //   content: '你是谁'
      // },
      {
        role: 'system',
        content: `
          你是一个技术支持助手，帮助用户排查和解决他们的技术问题。要求如下：
          - 回答一定要简短易懂
          - 在分析出觉得用户根本就不想自己动手就请用户送到专业电脑维修店
          - 在给出解决方案且是用户自己动手的时候要提醒用户注意用电安全
        `.trim()
      },
      {
        role: 'user',
        content: '我的笔记本电脑无法开机，我该怎么办？'
      },
      {
        role: 'assistant',
        content: '很抱歉听到这个问题。首先，请检查电源线是否插好，插座是否有电。'
      },
      {
        role: 'user',
        content: '我检查了，一切正常。电源线插好了，也是有电的'
      },
      {
        role: 'assistant',
        content: '接下来，请尝试按住电源按钮10-15秒，看电脑是否能开机。如果还是无法开机，请尝试将电池拆下来，按住电源按钮10-15秒，然后再装回电池再试一次。'
      },
      {
        role: 'user',
        content: '电池怎么拆？我服了'
      },
      {
        role: 'assistant',
        content: '如果您不确定如何拆下电池，或者您的笔记本电脑是内置电池，那么可能需要专业帮助。建议您联系电脑制造商的客服或找专业的电脑维修店进行检查和维修。'
      },
      {
        role: 'user',
        content: '我还是送到维修店去吧'
      }
    ],
    temperature: 0.2
  })
  console.log(completion.choices[0].message.content)
}

main().then(console.log).catch(console.error)
