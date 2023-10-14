type Notify  = {
  type: string
  send: (message: string) => void
}

const consoleNotification: Notify = {
  type: 'Console',
  send(message) {
    console.log('Console: ', message);
  },
}

const emailNotification: Notify = {
  type: 'Email',
  send(message) {
    console.log('Email: ', message);

  },
}

const phoneNotification: Notify = {
  type: 'Phone',
  send(message) {
    console.log(message);

  },
}

const notifications: Notify[] = [
  consoleNotification,
  emailNotification,
  phoneNotification
]

export default function progressNotification(message: string, type?: string): void {
  notifications.forEach((notification) => {
    if (notification.type === type) {
      notification.send(message)
    }
  })
}

// export default function progressNotification(
//   message: string,
//   notificationType?: string,
// ): void {
//   console.log(notificationType ? `${notificationType}: ${message}` : `${message}`);
// }
