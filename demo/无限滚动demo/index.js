const scrollers = document.querySelectorAll(".scroller");

addAnimation();

function addAnimation() {
    scrollers.forEach((scroller) => {
        if (scroller.getAttribute("data-animated")) {
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);
            scrollerContent.forEach((item) => {
                // 拿到每个节点
                const cloneNode = item.cloneNode(true);
                // 把节点添加进去
                scrollerInner.appendChild(cloneNode);
            });
            // 鼠标移至元素节点时动画停止
            scrollerInner.addEventListener("mouseenter", () => {
                scrollerInner.style.animationPlayState = "paused";
            });
            // 鼠标移出元素节点时动画开始
            scrollerInner.addEventListener("mouseleave", () => {
                scrollerInner.style.animationPlayState = "running";
            });
        }
    });
}