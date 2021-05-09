/* This is the function that filters payloads according to a */
/* given set of rules */
const payloadsProcess = (payloads) => {
  const filteredPayloads = []
  payloads.forEach(function (show) {
    if (show.drm && show.drm === true && show.episodeCount && show.episodeCount > 0) {
      const extractedFields = {}
      extractedFields.image = show.image.showImage
      extractedFields.slug = show.slug
      extractedFields.title = show.title
      filteredPayloads.push(extractedFields)
    }
  })
  return filteredPayloads
}
module.exports = payloadsProcess
