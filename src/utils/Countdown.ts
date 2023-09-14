class Countdown {
  defaultSeconds: number
  seconds: number
  callback: VoidFunction
  timer: NodeJS.Timeout | undefined

  constructor(seconds: number, callback: () => void) {
    this.defaultSeconds = seconds
    this.seconds = seconds
    this.callback = callback
  }

  start() {
    this.seconds = this.defaultSeconds
    this.continue()
  }

  pause() {
    clearInterval(this.timer)
  }

  continue() {
    if (this.seconds <= 0) return
    this.timer = setInterval(() => {
      if (this.seconds <= 0) clearInterval(this.timer)
      else this.seconds--
    }, 1000)
  }
}

console.log('hi')
