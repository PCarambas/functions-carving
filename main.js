const createWoodBlock = (woodBlock) => {

    // Return object with 4 properties

    return {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"


    }

}

const createBeautifulCarving = (woodObject) => {
    // Return String representation of the object

    return `The ${woodObject.length}-inch ${woodObject.material} ${woodObject.type} was carved into a wooden ${woodObject.purpose}.`
}


const woodBlock = createWoodBlock()
const carvingString = createBeautifulCarving(woodBlock)

console.log(carvingString)