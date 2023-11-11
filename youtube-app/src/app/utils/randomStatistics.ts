export default function (comments: boolean) {
  if (comments) return (Math.floor(Math.random() * 500)).toString()
  else return (Math.floor(Math.random() * 10000)).toString()
}
