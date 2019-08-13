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
        const animationName = "sprite-animation" + index
        const newNode = template.cloneNode(true)
        newNode.classList.remove("js-template")
        const textNode = newNode.getElementsByClassName("js-text")[0]
        const codeNode = newNode.getElementsByClassName("js-code")[0]
        const spriteNode = newNode.getElementsByClassName("js-sprite")[0]
        const sprite = new Sprite("sprite-character1", animationName)
        spriteNode.appendChild(sprite.node)
        textNode.appendChild(document.createTextNode(title))
        codeNode.appendChild(document.createTextNode(sprite.node.outerHTML))
        animationContainer.appendChild(newNode)
    })
    template.parentNode.removeChild(template)

    const node = document.getElementById("js-target")
    const sprite1 = new Sprite("sprite-character1", "sprite-animation0")
    const sprite2 = new Sprite("1", "2")
    node.appendChild(sprite1.node)
    node.appendChild(sprite2.node)
    setInterval(()=>{
        if(sprite1.animationName == "sprite-animation1"){
            sprite1.setAnimationName("14")
        } else {
            sprite1.setAnimationName("1")
        }
    }, 1000)
})()
