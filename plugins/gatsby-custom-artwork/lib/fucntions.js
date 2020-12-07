// const { logSuccses, logInfo } = require("./logger")
const { makeProduct, updateProduct } = require("./shopify")
const { addSyncDataToSanity } = require("./sanity")
const { logSuccses, logInfo } = require("./logger")

const checkIfUpdateNeeded = (sanity, shopify) => {
  const sa = new Date(sanity).getTime()
  const sh = new Date(shopify).getTime()
  return sa - sh > 10000
}

const SantityToShopify = async (type, sanityProduckts, products) => {
  for (const SanityProduct of sanityProduckts) {
    const { action = null, product = null } = checkNeededActions(
      products,
      SanityProduct
    )
    if (action === "create") {
      console.log(".................handle create")
      await createProduct(type, SanityProduct)
    }
    if (action === "update") {
      console.log(".................handle update")
      await updateProduct(type, SanityProduct, product.id)
    }
  }
}

const createProduct = async (type, artwork) => {
  const newProduct = await makeProduct(type, artwork)

  if (!newProduct) {
    console.log(
      "artwork " + artwork.title + " unable to create Shopify product"
    )
    return
  }
  await addSyncDataToSanity(newProduct, artwork)
}

checkNeededActions = (products, artwork) => {
  const isExistend = products.filter(product => product.handle === artwork.slug)
  const product = isExistend.length > 0 ? isExistend[0] : null

  if (!product) {
    logInfo("needs do be created")
    return { action: "create" }
  }

  if (checkIfUpdateNeeded(artwork._updatedAt, product.updated_at)) {
    logSuccses(
      " ----already exists ---- but needs update " + artwork.artworkName
    )
    return { action: "update", product }
  }

  logSuccses(" ----already exists ---- needs no update" + artwork.artworkName)

  return { action: null }
}

exports.SantityToShopify = SantityToShopify