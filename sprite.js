class Sprite {
    static LAST_ANIMATION_INDEX = 17
    constructor(characterIndex, animationIndex) {
        this.node = document.createElement("div")
        this.node.classList.add("sprite")
        this.setAnimation(animationIndex)
        this.setCharacter(characterIndex)
    }

    setAnimation(animationIndex) {
        const newName = "sprite-animation" + animationIndex
        this.animationIndex = animationIndex
        this.node.classList.remove(this.animationName)
        this.node.classList.add(newName)
        this.animationName = newName
    }

    setCharacter(characterIndex) {
        const newName = "sprite-character" + characterIndex
        this.characterIndex = characterIndex
        this.node.classList.remove(this.characterName)
        this.node.classList.add(newName)
        this.characterName = newName
    }
}
