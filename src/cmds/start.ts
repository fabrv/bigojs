import { exec } from 'child_process'
import fs from 'fs'

const repos: any = {
  'blog': 'https://github.com/fabrv/bigojs-blog-template.git',
  'blank': ''
}

export function start(projectName: string, type: string = 'blank'): void {
  const repoLink = repos[type]
  if (!repoLink) {
    console.log('Error: Invalid project type')
    return;
  }

  console.log('Cloning blog template')
  exec(`git clone ${repoLink} ${projectName}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`${stderr}`)
      //return
    }
    console.log(`${stdout}`)

    fs.rmdir(`${projectName}/.git`, { recursive: true }, error => {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }
      console.log('Initializing git')
      exec(`cd ${projectName} && git init`, (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`)
          return
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`)
          return
        }
        console.log(`${stdout}`)

        console.log('Installing dependencies')
        exec(`cd ${projectName} && npm i`, (error, stdout, stderr) => {
          if (error) {
            console.log(`error: ${error.message}`)
            return
          }
          if (stderr) {
            console.log(`stderr: ${stderr}`)
            return
          }
          console.log(`${stdout}`)
        })
      })
    })
  })
}