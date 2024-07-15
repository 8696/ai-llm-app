import { ChatCompletion, setEnvVariable } from '@baiducloud/qianfan'
import config from './private.config'

setEnvVariable('QIANFAN_AK', config.qianFanConfig.apiKey)
setEnvVariable('QIANFAN_SK', config.qianFanConfig.secretKey)

const client = new  ChatCompletion()
async function main() {
  const resp = await client.chat({
    messages: [
      // {
      //   role: 'user',
      //   content: '你是谁'
      // },
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
    ]
  }, 'Yi-34B-Chat')
  console.log(resp)
}


main().then(console.log).catch(console.error)
