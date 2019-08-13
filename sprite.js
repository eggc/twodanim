class Sprite {
    constructor(characterName, animationName) {
        this.node = document.createElement("div")
        this.node.classList.add("sprite")
        this.setAnimationName(animationName)
        this.setCharacterName(characterName)
    }

    setAnimationName(animationName) {
        if(!animationName.startsWith("sprite-animation")) {
            animationName = "sprite-animation" + animationName
        }

        this.node.classList.remove(this.animationName)
        this.node.classList.add(animationName)
        this.animationName = animationName
    }

    setCharacterName(characterName) {
        if(!characterName.startsWith("sprite-character")) {
            characterName = "sprite-character" + characterName
        }

        this.node.classList.remove(this.characterName)
        this.node.classList.add(characterName)
        this.characterName = characterName
    }
}
