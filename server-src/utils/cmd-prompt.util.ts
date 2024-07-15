import readline from 'readline'

interface TOptions {
  yesText?: string
  noText?: string
}

export const promptUserForCommand = async (question: string, options: TOptions = { yesText: 'yes', noText: 'no' }): Promise<boolean> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise((resolve) => {
    rl.question(`${question}(${options.yesText}/${options.noText})`, (answer: string) => {
      rl.close()
      if (answer === options.yesText) {
        resolve(true)
      } else if(answer === options.noText) {
        resolve(false)
      } else {
        console.log(`Invalid input. Please enter "${options.yesText}" or "${options.noText}".`)
      }
    })
  })
}


