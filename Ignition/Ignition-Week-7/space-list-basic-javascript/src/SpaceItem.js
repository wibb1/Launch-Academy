// your SpaceItem code, here
class SpaceItem {
  constructor(item_name, item_price, item_quantity){
    this.name = item_name
    this.price = item_price
    this.quantity = item_quantity || 1
  }
}