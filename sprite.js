class Sprite {
    constructor(characterName, animationName) {
        this.characterName = characterName
        this.animationName = animationName
        this.node = document.createElement("div")
        this.node.classList.add("sprite", animationName, characterName)
    }

    setAnimationName(animationName) {
        this.node.classList.remove(this.animationName)
        this.node.classList.add(animationName)
        this.animationName = animationName
    }
}
