class Sprite {
    constructor(characterIndex, animationIndex) {
        this.node = document.createElement("div")
        this.node.classList.add("twodanim-sprite")
        this.setAnimation(animationIndex)
        this.setCharacter(characterIndex)
    }

    setAnimation(animationIndex) {
        const newName = "twodanim-sprite-animation" + animationIndex
        this.animationIndex = animationIndex
        this.node.classList.remove(this.animationName)
        this.node.classList.add(newName)
        this.animationName = newName
    }

    setCharacter(characterIndex) {
        const newName = "twodanim-sprite-character" + characterIndex
        this.characterIndex = characterIndex
        this.node.classList.remove(this.characterName)
        this.node.classList.add(newName)
        this.characterName = newName
    }

    getAnimationName() {
        Sprite.ANIMATION_TITLES[this.animationIndex]
    }
}

Sprite.LAST_ANIMATION_INDEX = 17
Sprite.ANIMATION_TITLES = [
    "前進", "突き", "逃げる",
    "通常待機", "振り", "勝利",
    "詠唱待機", "飛び道具", "瀕死",
    "防御", "汎用スキル", "状態異常",
    "ダメージ", "魔法", "睡眠",
    "回避", "アイテム", "戦闘不能"
]
