const submit = document.getElementById("submit")
const name = document.getElementById("name");
const possessive = document.getElementById("possessivepronoun");
const objective = document.getElementById("objectivepronoun");

const finalSentence = document.querySelector("sentence");

function revealSentence() {
    event.preventDefault();
    let preferredName = name.value;
    let possessivePronoun = possessive.value;
    let objectivePronoun = objective.value;
    console.log(name.value);
    console.log(possessive.value);
    console.log(objective.value);

    document.getElementById("possessive").innerHTML = possessivePronoun;
    document.getElementById("preferredname").innerHTML = preferredName;
    document.getElementById("objective").innerHTML = objectivePronoun;

}
