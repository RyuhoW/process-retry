function hello(retry_count: number): boolean | void {
  switch (retry_count) {
    case 0:
      process.exit(1)
    case 1:
      process.exit(1)
    case 2:
      console.log("ダーーーーッ")
      process.exit(0)
    default:
      process.exit(1)

  }
}

const args = process.argv.slice(2); 
const num = parseInt(args[0], 10); 
if (!isNaN(num)) {
  hello(num);
} else {
  console.log("Please provide a valid number!");
}
