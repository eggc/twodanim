(() => {
    const animationContainer = document.getElementsByClassName("js-animations-container")[0]
    const template = document.getElementsByClassName("js-template")[0]
    const titles = [
        "前進", "突き", "逃げる",
        "通常待機", "振り", "勝利",
        "詠唱待機", "飛び道具", "瀕死",
        "防御", "汎用スキル", "状態異常",
        "ダメージ", "魔法", "睡眠",
        "回避", "アイテム", "戦闘不能"
    ]
    titles.forEach((title, index) => {
        const x = (index % 3) + 1
        const y = Math.floor(index / 3) + 1
        const animationName = "sprite-animation" + y + "-" + x
        const newNode = template.cloneNode(true)
        newNode.classList.remove("js-template")
        const textNode = newNode.getElementsByClassName("js-text")[0]
        const codeNode = newNode.getElementsByClassName("js-code")[0]
        const spriteNode = newNode.getElementsByClassName("js-sprite")[0]
        const sprite = new Sprite(animationName, "character1")
        spriteNode.appendChild(sprite.node)
        textNode.appendChild(document.createTextNode(title))
        codeNode.appendChild(document.createTextNode(sprite.node.outerHTML))
        animationContainer.appendChild(newNode)
    })
    template.parentNode.removeChild(template)
})()
