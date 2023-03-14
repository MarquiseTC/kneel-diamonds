import { getcustomOrders, getMetals, getDiamondSizes, getStyles } from "./database.js"
import { Metals } from "./Metals.js"

const buildOrderListItem = (order) => { 
    const metals = getMetals()
    const foundMetal = metals.find((metal) =>
    {
    return (metal.id === order.metalId)})

const sizes = getDiamondSizes()
const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)

const styles = getStyles()
const foundStyle = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)

const totalCost = foundMetal.price + foundSize.price + foundStyle.price
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
 


    return `<li>
        Order #${order.id} costs ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getcustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

