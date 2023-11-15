export default function randomStatistics(comments: boolean) {
  if (comments) return (Math.floor(Math.random() * 500)).toString();
  return (Math.floor(Math.random() * 10000)).toString();
}
