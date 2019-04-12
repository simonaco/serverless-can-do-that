module.exports = async function(context, req) {
  context.log('Processing')

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: 'Hello ' + req.query.name,
  }
}
