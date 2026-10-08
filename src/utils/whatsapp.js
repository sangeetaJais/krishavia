export function buildWhatsAppOrderUrl(product, locationArea) {
  const lines = [
    '*KRISHAVIA THE LUXURY — Order Slip*',
    '',
    `Item: ${product.name}`,
    `SKU: ${product.id}`,
    `Category: ${product.category}`,
    `Price: ₹${product.sellingPrice}`,
    `MRP: ₹${product.originalPrice}`,
    `Tag: ${product.tag}`,
    '',
    `Delivery Area: ${locationArea || 'To confirm'}`,
    '',
    'Hi Krishavia! I would like to place this order. Please confirm availability and delivery.',
  ]

  const message = lines.join('\n')
  return `https://wa.me/?text=${encodeURIComponent(message)}`
}
