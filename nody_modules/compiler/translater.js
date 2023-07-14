// this file does not using in this case
export function Translater(node) {
    const attr = Object.keys(node.attr)[0]
    const value = Object.values(node.attr)[0]
    return `Reacty.createElement('${node.tag}',{${attr}:'${value}'},'${node.innertext}')`;
}