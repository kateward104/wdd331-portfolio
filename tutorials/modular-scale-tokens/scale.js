
const demo = document.querySelector(".ratio-demo");

const slider = document.querySelector("#ratio-slider");
const ratioValue = document.querySelector("#ratio-value");
const ratioButtons = document.querySelectorAll("[data-ratio]");

const roundToggle = document.querySelector("#round-toggle");


// UPDATE THE RATIO
function updateRatio(ratio) {
    demo.style.setProperty("--ratio", ratio);

    slider.value = ratio;
    ratioValue.textContent = Number(ratio).toFixed(3);

    ratioButtons.forEach(button => {
        const isActive =
            Number(button.dataset.ratio) === Number(ratio);

        button.setAttribute("aria-pressed", isActive);
    });
}


// SLIDER INTERACTION
slider.addEventListener("input", () => {
    updateRatio(slider.value);
});


// NAMED RATIO BUTTONS
ratioButtons.forEach(button => {
    button.addEventListener("click", () => {
        updateRatio(button.dataset.ratio);
    });
});


// ROUNDING TOGGLE
roundToggle.addEventListener("change", () => {
    demo.dataset.round = roundToggle.checked;
});

// SET INITIAL STATES
updateRatio(slider.value);
demo.dataset.round = roundToggle.checked;