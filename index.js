(() => {
    const animationContainer = document.getElementsByClassName("js-animations-container")[0]
    const template = document.getElementsByClassName("js-template")[0]
    Sprite.ANIMATION_TITLES.forEach((title, index) => {
        const newNode = template.cloneNode(true)
        newNode.classList.remove("js-template")
        const textNode = newNode.getElementsByClassName("js-text")[0]
        const codeNode = newNode.getElementsByClassName("js-code")[0]
        const spriteNode = newNode.getElementsByClassName("js-sprite")[0]
        const sprite = new Sprite(0, index)
        spriteNode.appendChild(sprite.node)
        textNode.appendChild(document.createTextNode(title))
        codeNode.appendChild(document.createTextNode(sprite.node.outerHTML))
        animationContainer.appendChild(newNode)
    })
    template.parentNode.removeChild(template)

    const node = document.getElementById("js-target")
    const sprite = new Sprite(0, 0)
    node.appendChild(sprite.node)
    setInterval(()=>{
        const n = (sprite.animationIndex) % (Sprite.LAST_ANIMATION_INDEX + 1) + 1
        sprite.setAnimation(n)
    }, 500)
})()
