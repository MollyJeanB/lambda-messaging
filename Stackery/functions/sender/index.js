module.exports = async message => {
  const ports = JSON.parse(process.env.STACKERY_PORTS);
  const functionName = ports[0][0].functionName
  console.dir(ports);
  console.log(functionName)

  return {};
}
